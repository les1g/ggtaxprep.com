export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    if (!SENDGRID_API_KEY || !FROM_EMAIL || !ADMIN_EMAIL) {
      console.error("Missing env vars");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { email, message, fileNames, attachments } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("Processing submission:", {
      email,
      fileCount: attachments?.length || 0,
    });

    // Confirmation to client (no attachments)
    await sgMail.send({
      to: email,
      from: FROM_EMAIL,
      subject: "✓ GG Tax Services - Documents Received",
      html: `
        <h2 style="color:#22c55e;">Document Upload Confirmed</h2>
        <p>Thank you for submitting your tax documents.</p>
        <h3 style="color:#22c55e;">Files Received:</h3>
        <p>${fileNames}</p>
        <p><strong>Your Message:</strong> ${message}</p>
        <p style="color:#666;font-size:13px;">Your documents are secure and will be deleted after processing.</p>
      `,
    });

    // Notification to admin WITH attachments
    await sgMail.send({
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `📄 New Document Upload from ${email}`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Client:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <h3>Files:</h3>
        <p>${fileNames}</p>
        <p style="color:#999;font-size:12px;">Timestamp: ${new Date().toLocaleString()}</p>
      `,
      attachments: attachments || [],
    });

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
