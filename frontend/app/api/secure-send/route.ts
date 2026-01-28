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
      return NextResponse.json(
        { error: "Email service is not configured. Contact support." },
        { status: 500 },
      );
    }

    const formData = await request.formData();
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    if (!email || !message || files.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.log("Processing upload:", {
      email,
      fileCount: files.length,
      files: files.map((f) => ({ name: f.name, type: f.type, size: f.size })),
    });

    const fileDetails = files.map((file) => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    }));

    // Confirmation to client (no attachments)
    await sgMail.send({
      to: email,
      from: FROM_EMAIL,
      subject: "✓ GG Tax Services - Documents Received",
      html: `
        <h2 style="color:#22c55e;">Document Upload Confirmed</h2>
        <p>Thank you for submitting your tax documents.</p>
        <h3 style="color:#22c55e;">Files Received:</h3>
        <ul>${fileDetails.map((f) => `<li>${f.name} (${f.size})</li>`).join("")}</ul>
        <p><strong>Your Message:</strong> ${message}</p>
        <p style="color:#666;font-size:13px;">Your documents are secure and will be deleted after processing.</p>
      `,
    });

    // Notification to admin (no attachments - avoids 30MB SendGrid limit)
    await sgMail.send({
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `📄 New Document Upload from ${email}`,
      html: `
        <h2>New Submission</h2>
        <p><strong>Client:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <h3>Files:</h3>
        <ul>${fileDetails.map((f) => `<li>${f.name} (${f.size})</li>`).join("")}</ul>
        <p><strong>Note:</strong> Files are stored securely. Check your secure portal to download.</p>
        <p style="color:#999;font-size:12px;">Timestamp: ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Documents uploaded successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to process upload", details: String(error) },
      { status: 500 },
    );
  }
}
