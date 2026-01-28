"use client";

import { useState } from "react";
import Link from "next/link";

export default function SecureSend() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB per file
  const MAX_FILES = 10;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setError("");

    // Check file count
    if (files.length + selectedFiles.length > MAX_FILES) {
      setError(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    // Validate files
    for (const file of selectedFiles) {
      if (file.size === 0) {
        setError(`${file.name} is empty or unreadable`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds 25MB limit`);
        return;
      }

      const ext = file.name.toLowerCase().split(".").pop();
      const allowedExtensions = [
        "pdf",
        "jpg",
        "jpeg",
        "png",
        "heic",
        "heif",
        "doc",
        "docx",
        "xls",
        "xlsx",
      ];
      if (!allowedExtensions.includes(ext || "")) {
        setError(`${file.name} has invalid file type`);
        return;
      }
    }

    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (files.length === 0) {
      setError("Please select at least one file");
      return;
    }

    if (!message.trim()) {
      setError("Please include a brief description");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", message);
      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/secure-send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setUploadComplete(true);
      setFiles([]);
      setEmail("");
      setMessage("");

      // Reset after 5 seconds
      setTimeout(() => {
        setUploadComplete(false);
      }, 5000);
    } catch (err) {
      setError("Failed to upload files. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link
          href="/resources"
          className="text-green-400 hover:text-green-300 mb-6 inline-block"
        >
          ← Back to Resources
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            Secure Document Send
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Upload your tax documents securely. All files are encrypted and
            transmitted directly.
          </p>
        </div>

        {/* Security Info */}
        <div className="bg-green-900/20 border border-green-400/50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-green-400 mb-4">
            Your Security Matters
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">✓</span>
              <span>
                <strong>End-to-End Encryption:</strong> All files are encrypted
                in transit using SSL/TLS 256-bit encryption
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">✓</span>
              <span>
                <strong>Secure Servers:</strong> Files stored on
                HIPAA-compliant, encrypted servers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">✓</span>
              <span>
                <strong>No Email Attachments:</strong> Eliminates email security
                vulnerabilities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">✓</span>
              <span>
                <strong>Password Protected:</strong> Access requires
                authentication
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3 font-bold">✓</span>
              <span>
                <strong>Automatic Deletion:</strong> Files automatically deleted
                after 30 days
              </span>
            </li>
          </ul>
        </div>

        {/* Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-8"
        >
          {/* Email */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Your Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
              required
            />
            <p className="text-gray-400 text-sm mt-2">
              We&#39;ll confirm receipt and notify you when we&#39;ve reviewed
              your documents.
            </p>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Upload Documents
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.doc,.docx,.xls,.xlsx"
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <div className="text-4xl mb-2">📁</div>
                <p className="text-white font-semibold mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-400 text-sm">
                  PDF, Images (JPG, JPEG, PNG, HEIC, HEIF), Word, Excel • Max
                  25MB per file • Max 10 files
                </p>
              </label>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">
                Selected Files ({files.length})
              </h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg p-3 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="text-green-400 mr-3">📄</span>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {file.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Message */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Brief Description
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g., 2024 Tax Return Documents - W-2s and 1099s"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none resize-none"
              rows={4}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/20 border border-red-400/50 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {uploadComplete && (
            <div className="bg-green-900/20 border border-green-400/50 rounded-lg p-4 mb-6">
              <p className="text-green-400 font-semibold">
                ✓ Documents uploaded successfully!
              </p>
              <p className="text-green-300 text-sm mt-1">
                We&#39;ve received your files and will review them shortly.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading || uploadComplete}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {uploading
              ? "Uploading..."
              : uploadComplete
                ? "✓ Upload Complete"
                : "Send Securely"}
          </button>

          {/* Terms */}
          <p className="text-gray-400 text-xs text-center mt-4">
            By uploading, you agree that GG Tax Services will handle your
            documents in accordance with our
            <Link
              href="/privacy"
              className="text-green-400 hover:text-green-300"
            >
              {" "}
              Privacy Policy
            </Link>{" "}
            and
            <Link href="/terms" className="text-green-400 hover:text-green-300">
              {" "}
              Terms of Service
            </Link>
            .
          </p>
        </form>

        {/* FAQ */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                What documents can I send?
              </h3>
              <p className="text-gray-300">
                Tax returns, W-2s, 1099s, bank statements, receipts, and any
                other documents relevant to your tax situation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                How long are documents stored?
              </h3>
              <p className="text-gray-300">
                Documents are automatically deleted 30 days after upload. If you
                need them retained longer, please contact us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Is this secure?
              </h3>
              <p className="text-gray-300">
                Yes. We use bank-level 256-bit SSL/TLS encryption,
                HIPAA-compliant servers, and follow all data protection
                regulations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                When will you receive my files?
              </h3>
              <p className="text-gray-300">
                Files are uploaded instantly. You&#39;ll receive an email
                confirmation within minutes. Our team will review and contact
                you within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
