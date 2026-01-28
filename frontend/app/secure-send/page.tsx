"use client";

import { useState } from "react";

export default function SecureSend() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 25 * 1024 * 1024;
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

    if (files.length + selectedFiles.length > MAX_FILES) {
      setError(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} exceeds 25MB limit`);
        return;
      }

      const fileExtension = file.name
        .toLowerCase()
        .substring(file.name.lastIndexOf("."));
      const isValidType =
        ALLOWED_TYPES.includes(file.type) ||
        ALLOWED_EXTENSIONS.includes(fileExtension);

      if (!isValidType) {
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
      // Build attachments with browser-compatible base64
      const attachments = await Promise.all(
        files.map(async (file) => {
          const buffer = await file.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          let binary = "";
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          const base64 = btoa(binary);
          return {
            content: base64,
            filename: file.name,
            type: file.type || "application/octet-stream",
            disposition: "attachment",
          };
        }),
      );

      const fileDetails = files.map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
      }));

      // Send to your API
      const response = await fetch("/api/secure-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          fileNames: fileDetails.map((f) => `${f.name} (${f.size})`).join(", "),
          attachments,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Upload failed");
      }

      setUploadComplete(true);
      setFiles([]);
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setUploadComplete(false);
      }, 5000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to upload files";
      setError(errorMessage);
      console.error("Upload error:", errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Secure Send</h1>

        {uploadComplete && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
            <p className="text-green-400">✓ Documents uploaded successfully!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Your Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Upload Documents</label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.heic,.heif,.doc,.docx,.xls,.xlsx"
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <p className="text-gray-400">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-500 text-sm">
                  PDF, Images (JPG, JPEG, PNG, HEIC, HEIF), Word, Excel • Max
                  25MB per file • Max 10 files
                </p>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-4">
                <h3 className="text-white font-semibold mb-2">
                  Selected Files ({files.length}):
                </h3>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-800 p-2 rounded"
                    >
                      <span className="text-gray-300">
                        {file.name} ({(file.size / (1024 * 1024)).toFixed(2)}{" "}
                        MB)
                      </span>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <label className="block text-white mb-2">Brief Description</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g., 2024 Tax Return Documents - W-2s and 1099s"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 h-24"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-2 rounded"
          >
            {uploading ? "Uploading..." : "Send Securely"}
          </button>
        </form>
      </div>
    </div>
  );
}
