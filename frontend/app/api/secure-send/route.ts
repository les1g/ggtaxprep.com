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

// Secure server-side Supabase client with service role key (never exposed to client)
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
      console.error("Missing env vars");
      return NextResponse.json(
        { error: "Server is not configured properly." },
        { status: 500 },
      );
    }

    // ✅ Accept FormData instead of JSON
    const formData = await request.formData();

    // ----------------------
    // Extract & Validate Input
    // ----------------------

    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();
    const files = formData.getAll("files") as File[];

    const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
    const MAX_FILES = 10;

    const ALLOWED_TYPES = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/heic",
      "image/heif",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    // Basic validation
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

    if (files.length === 0 || files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `You can upload up to ${MAX_FILES} files.` },
        { status: 400 },
      );
    }

    // Validate each file
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `${file.name} exceeds 25MB limit.` },
          { status: 400 },
        );
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: `${file.name} has an invalid file type.` },
          { status: 400 },
        );
      }
    }

    console.log("Processing submission:", {
      email,
      fileCount: files.length,
    });

    const fileUrls: string[] = [];
    const fileNames: string[] = [];

    const timestamp = Date.now();

    // ✅ Upload files using service role
    for (const file of files) {
      const uniqueName = `${timestamp}-${Math.random()
        .toString(36)
        .substring(2)}-${file.name}`;

      const buffer = Buffer.from(await file.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from("uploaded-docs")
        .upload(uniqueName, buffer, {
          contentType: file.type,
        });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      // Generate 7-day signed URL
      const { data: signedUrlData, error: signError } = await supabase.storage
        .from("uploaded-docs")
        .createSignedUrl(uniqueName, 60 * 60 * 24 * 7);

      if (signError) {
        throw new Error(signError.message);
      }

      fileUrls.push(signedUrlData.signedUrl);
      fileNames.push(file.name);
    }

    // ------------------------
    // Confirmation email to client
    // ------------------------
    console.log("Client email received:", email);

    const clientEmail = new SendSmtpEmail();
    clientEmail.to = [{ email }];
    clientEmail.sender = {
      email: BREVO_SENDER_EMAIL,
      name: BREVO_SENDER_NAME,
    };
    clientEmail.subject = "✓ GG Tax Services - Documents Received";
    clientEmail.htmlContent = `
      <h2 style="color:#22c55e;">Document Upload Confirmed</h2>
      <p>Thank you for submitting your tax documents.</p>
      <h3 style="color:#22c55e;">Files Received:</h3>
      <p>${fileNames.join(", ")}</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p style="color:#666;font-size:13px;">Our team will review your documents within 1-2 business days.</p>
    `;

    await emailAPI.sendTransacEmail(clientEmail);

    // ------------------------
    // Notification email to admin
    // ------------------------
    const adminEmail = new SendSmtpEmail();
    adminEmail.to = [{ email: ADMIN_EMAIL }];
    adminEmail.sender = {
      email: BREVO_SENDER_EMAIL,
      name: BREVO_SENDER_NAME,
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
      <p style="color:#999;font-size:12px;">Timestamp: ${new Date().toLocaleString()}</p>
    `;

    await emailAPI.sendTransacEmail(adminEmail);

    console.log("Submission successful for:", email);

    return NextResponse.json(
      { success: true, message: "Documents uploaded successfully." },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    console.error("Submission error:", errorMessage);

    return NextResponse.json(
      { error: "Failed to process submission", details: errorMessage },
      { status: 500 },
    );
  }
}
