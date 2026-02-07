import { NextRequest, NextResponse } from "next/server";
import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
  SendSmtpEmail,
} from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

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
      !ADMIN_EMAIL
    ) {
      console.error("Missing env vars");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { email, message, fileNames, fileUrls } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("Processing submission:", {
      email,
      fileCount: fileUrls?.length || 0,
    });

    // Confirmation email to client
    const clientEmail = new SendSmtpEmail();
    clientEmail.to = [{ email }];
    clientEmail.sender = { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME };
    clientEmail.subject = "✓ GG Tax Services - Documents Received";
    clientEmail.htmlContent = `
      <h2 style="color:#22c55e;">Document Upload Confirmed</h2>
      <p>Thank you for submitting your tax documents.</p>
      <h3 style="color:#22c55e;">Files Received:</h3>
      <p>${fileNames}</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p style="color:#666;font-size:13px;">Our team will review your documents within 1-2 business days.</p>
    `;

    await emailAPI.sendTransacEmail(clientEmail);

    // Notification email to admin
    const adminEmail = new SendSmtpEmail();
    adminEmail.to = [{ email: ADMIN_EMAIL }];
    adminEmail.sender = { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME };
    adminEmail.subject = `📄 New Document Upload from ${email}`;
    adminEmail.htmlContent = `
      <h2>New Submission</h2>
      <p><strong>Client:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <h3>Files:</h3>
      <p>${fileNames}</p>
      <h3>Download Links (expires in 7 days):</h3>
      <ul>
        ${fileUrls?.map((url: string) => `<li><a href="${url}">Download File</a></li>`).join("") || ""}
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
