export const metadata = {
  title: "Privacy Policy",
  description: "GG Tax Services privacy policy and data protection practices.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: January 28, 2026</p>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Introduction
            </h2>
            <p>
              GG Tax Services ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, phone number, and mailing address</li>
              <li>
                Social Security Number (SSN) or Tax Identification Number (TIN)
              </li>
              <li>
                Financial information (income, expenses, bank account details)
              </li>
              <li>Employment and business information</li>
              <li>Tax documents (W-2s, 1099s, receipts, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address, browser type, and device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prepare and file your tax returns</li>
              <li>Provide tax planning and consulting services</li>
              <li>Communicate with you about your account and services</li>
              <li>Comply with legal obligations and IRS requirements</li>
              <li>Improve our services and website functionality</li>
              <li>
                Send newsletters and promotional materials (with your consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Data Security
            </h2>
            <p className="mb-3">
              We implement industry-standard security measures to protect your
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>256-bit SSL/TLS encryption for data transmission</li>
              <li>Encrypted storage of sensitive documents</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access on a need-to-know basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Data Retention
            </h2>
            <p>
              We retain your tax records for a minimum of 7 years as required by
              IRS regulations. Uploaded documents are automatically deleted
              after 30 days unless you request longer retention. You may request
              deletion of your data at any time, subject to legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Information Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                The IRS and state tax authorities (as required for filing)
              </li>
              <li>
                Third-party service providers (e.g., cloud storage, payment
                processors)
              </li>
              <li>Legal authorities when required by law</li>
              <li>
                Professional advisors (accountants, attorneys) with your consent
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>
                Request deletion of your data (subject to legal requirements)
              </li>
              <li>Opt-out of marketing communications</li>
              <li>Receive a copy of your tax documents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Cookies</h2>
            <p>
              We use cookies to enhance your experience, analyze site usage, and
              assist in our marketing efforts. You can control cookies through
              your browser settings, but disabling them may affect site
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by email or through a notice on
              our website. Your continued use of our services constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong>Email:</strong> info@ggtaxprep.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
