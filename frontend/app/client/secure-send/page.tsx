"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SecureSend() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 25 * 1024 * 1024;

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setError("");

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds 25MB per file limit`);
        return;
      }

      const fileExtension = file.name
        .toLowerCase()
        .substring(file.name.lastIndexOf("."));

      const isValidType =
        ALLOWED_TYPES.includes(file.type) ||
        ALLOWED_EXTENSIONS.includes(fileExtension);

      if (!isValidType) {
        setError(`${file.name} has an invalid file type`);
        return;
      }
    }

    // ✅ Unlimited files — just append
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return digits;

    let formatted = "";
    if (match[1]) formatted = "(" + match[1];
    if (match[2]) formatted += ") " + match[2];
    if (match[3]) formatted += "-" + match[3];
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) return setError("Please enter your email address");
    if (!phone) return setError("Please enter your phone number");
    if (files.length === 0) return setError("Please select at least one file");
    if (!message.trim()) return setError("Please include a brief description");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/secure-send", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setUploadComplete(true);
      setFiles([]);
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => {
        setUploadComplete(false);
      }, 5000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to upload files";
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-left">
            <Link
              href="/client/services"
              className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 hover:text-green-400"
            >
              <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Secure Document Upload
          </h1>

          <p className="text-gray-300">
            Upload your tax documents securely.
            <span className="text-green-400 font-semibold">
              {" "}
              Unlimited files allowed
            </span>{" "}
            • 25MB max per file.
          </p>

          <p className="text-red-400 text-sm mt-2 font-bold">
            Please upload all documents from your checklist to avoid delays.
          </p>
        </div>

        {uploadComplete && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
            <p className="text-green-400 font-semibold">
              Documents uploaded successfully!
            </p>
            <p className="text-green-300 text-sm">
              We&apos;ll review your documents within 1–2 business days.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address *"
              required
              className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-600 focus:border-green-500 outline-none"
            />

            <input
              type="tel"
              maxLength={14}
              value={phone}
              onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
              placeholder="Your Phone Number *"
              required
              className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-600 focus:border-green-500 outline-none"
            />

            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.doc,.docx,.xls,.xlsx"
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <p className="text-gray-300 font-semibold mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-500 text-sm">
                  Unlimited files • 25MB max per file
                </p>
              </label>
            </div>

            {files.length > 0 && (
              <h3 className="text-white font-semibold">
                Selected Files ({files.length})
              </h3>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Brief Description *"
              required
              className="w-full bg-gray-900 text-white px-4 py-3 rounded border border-gray-600 focus:border-green-500 outline-none h-24 resize-none"
            />

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg"
            >
              {uploading ? "Uploading..." : "Send Securely"}
            </button>

            <p className="text-gray-400 text-sm">
              Your documents are not uploaded until you see the{" "}
              <span className="text-green-400 font-semibold">
                &quot;Documents uploaded successfully!&quot;
              </span>{" "}
              message. You will receive an email confirmation once received.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
