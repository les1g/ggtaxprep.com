"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SecureSend() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const DROPBOX_LINK =
    "https://www.dropbox.com/request/PaAuMkajFAzzodp6KWRC";

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

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number");
      return;
    }

    if (!message.trim()) {
      setError("Please include a brief description");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Redirect to Dropbox upload
    window.open(DROPBOX_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
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
            Upload Documents
          </h1>

          <p className="text-gray-400 text-lg">
            Securely upload your documents using our protected portal.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <form onSubmit={handleContinue} className="space-y-6">

            

            {/* CTA */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Continue to Secure Upload
            </button>

            {/* Backup link */}
            <p className="text-gray-500 text-sm text-center">
              If the button doesn’t work,{" "}
              <a
                href={DROPBOX_LINK}
                target="_blank"
                className="text-green-500 underline"
              >
                click here to upload
              </a>
              .
            </p>

          </form>
        </div>

        {/* Security */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mt-8 text-center text-gray-300 text-sm">
          🔒 Files are securely uploaded via Dropbox with encryption in transit and at rest.
        </div>

        {/* What Happens Next */}
        <div className="mt-8 bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            What Happens Next?
          </h3>
          <ol className="space-y-3 text-gray-300">
            <li>1. Upload your documents via Dropbox</li>
            <li>2. We review within 1–2 business days</li>
            <li>3. You’ll receive next steps via email</li>
          </ol>
        </div>

      </div>
    </div>
  );
}