import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
  SendSmtpEmail,
} from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Secure server-side Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const emailAPI = new TransactionalEmailsApi();
if (BREVO_API_KEY) {
  emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    if (
      !BREVO_API_KEY ||
      !BREVO_SENDER_EMAIL ||
      !BREVO_SENDER_NAME ||
      !ADMIN_EMAIL ||
      !SUPABASE_URL ||
      !SUPABASE_SERVICE_ROLE_KEY
    ) {
      return NextResponse.json(
        { error: "Server is not configured properly." },
        { status: 500 },
      );
    }

    const formData = await request.formData();

    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const files = formData.getAll("files") as File[];

    const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
    const MAX_FILES = 10;

    // ----------------------
    // Basic Validation
    // ----------------------

    if (!email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (!files || files.length === 0 || files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `You can upload up to ${MAX_FILES} files.` },
        { status: 400 },
      );
    }

    // ----------------------
    // iPhone-Safe File Validation
    // ----------------------

    const ALLOWED_EXTENSIONS = [
      ".pdf",
      ".jpg",
      ".jpeg",
      ".png",
      ".heic",
      ".heif",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
    ];

    for (const file of files) {
      if (!file || file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `${file?.name || "File"} exceeds 25MB limit.` },
          { status: 400 },
        );
      }

      const lastDot = file.name.lastIndexOf(".");
      const extension =
        lastDot !== -1 ? file.name.substring(lastDot).toLowerCase() : "";

      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        return NextResponse.json(
          { error: `${file.name} has an invalid file type.` },
          { status: 400 },
        );
      }
    }

    const fileUrls: string[] = [];
    const fileNames: string[] = [];
    const timestamp = Date.now();

    // ----------------------
    // Upload Files (iPhone Compatible)
    // ----------------------

    for (const file of files) {
      const uniqueName = `${timestamp}-${Math.random()
        .toString(36)
        .substring(2)}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("uploaded-docs")
        .upload(uniqueName, file, {
          contentType: file.type || "application/octet-stream",
          upsert: true,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data: signedUrlData, error: signError } = await supabase.storage
        .from("uploaded-docs")
        .createSignedUrl(uniqueName, 60 * 60 * 24 * 7);

      if (signError || !signedUrlData) {
        throw new Error(signError?.message || "Failed to create signed URL");
      }

      fileUrls.push(signedUrlData.signedUrl);
      fileNames.push(file.name);
    }

    // ------------------------
    // Client Confirmation Email
    // ------------------------

    const clientEmail = new SendSmtpEmail();
    clientEmail.to = [{ email }];
    clientEmail.sender = {
      email: BREVO_SENDER_EMAIL!,
      name: BREVO_SENDER_NAME!,
    };
    clientEmail.subject = "✓ GG Tax Services - Documents Received";
    clientEmail.htmlContent = `
      <h2 style="color:#22c55e;">Document Upload Confirmed</h2>
      <p>Thank you for submitting your tax documents.</p>
      <h3 style="color:#22c55e;">Files Received:</h3>
      <p>${fileNames.join(", ")}</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p style="color:#666;font-size:13px;">
        Our team will review your documents within 1-2 business days.
      </p>
    `;

    await emailAPI.sendTransacEmail(clientEmail);

    // ------------------------
    // Admin Notification Email
    // ------------------------

    const adminEmail = new SendSmtpEmail();
    adminEmail.to = [{ email: ADMIN_EMAIL! }];
    adminEmail.sender = {
      email: BREVO_SENDER_EMAIL!,
      name: BREVO_SENDER_NAME!,
    };
    adminEmail.subject = `📄 New Document Upload from ${email}`;
    adminEmail.htmlContent = `
      <h2>New Submission</h2>
      <p><strong>Client:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <h3>Files:</h3>
      <p>${fileNames.join(", ")}</p>
      <h3>Download Links (expires in 7 days):</h3>
      <ul>
        ${fileUrls
          .map((url) => `<li><a href="${url}">Download File</a></li>`)
          .join("")}
      </ul>
      <p style="color:#999;font-size:12px;">
        Timestamp: ${new Date().toLocaleString()}
      </p>
    `;

    await emailAPI.sendTransacEmail(adminEmail);

    return NextResponse.json(
      { success: true, message: "Documents uploaded successfully." },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { error: "Failed to process submission", details: errorMessage },
      { status: 500 },
    );
  }
}
