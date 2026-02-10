import Link from "next/link";

export const metadata = {
  title: "Services | GG Tax Services",
  description:
    "Tax preparation services, pricing, and free tools to help you file with confidence.",
};

export default function Services() {
  const resources = [
    {
      title: "Track Your Refund",
      description:
        "Check the status of your federal and Arizona state tax refunds.",
      link: "/tools/refund",
    },
    {
      title: "Tax Document Checklist",
      description:
        "Comprehensive list of documents to gather for your tax prep.",
      link: "/tools/checklist",
    },
    {
      title: "Deductions & Credits Checklist",
      description:
        "See which federal and Arizona deductions/credits you may qualify for.",
      link: "/tools/deductions",
    },

    {
      title: "W‑4 Tax Calculator",
      description:
        "Use IRS and Arizona calculators with step‑by‑step guidance.",
      link: "/tools/tax-calculator",
    },
    {
      title: "Estimated Payments Guide",
      description: "When and how to make quarterly estimated tax payments.",
      link: "/tools/estimated-payments",
    },
    {
      title: "IRS Forms & Publications",
      description:
        "Direct access to IRS forms, instructions, and publications.",
      link: "https://www.irs.gov/forms-instructions",
      external: true,
    },
    {
      title: "Tax Terms Glossary",
      description: "Common tax terms explained in plain English.",
      link: "/site/glossary",
    },
    {
      title: "Tax Guides",
      description:
        "Step‑by‑step guides on various tax topics to help you file with confidence.",
      link: "/site/guides",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Mini Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/client/secure-send"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Secure Send Portal
          </Link>
          <Link
            href="/tools/refund"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Track Refund
          </Link>
          <Link
            href="/site/contact"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Page header */}
      <section className="text-center py-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Services</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Comprehensive tax preparation, TPT filings, small‑business returns,
          and amended return support for individuals and Arizona businesses.
          Transparent pricing with no hidden fees.
        </p>
      </section>
      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Individual Returns */}
          <div className="p-6 border-2 border-green-400 rounded bg-gray-800 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-green-400 font-semibold text-2xl mb-3">
              Individual Returns
            </h3>
            <p className="text-3xl font-bold text-white mb-4">$100</p>
            <p className="text-gray-300 text-sm mb-4">
              Form 1040 preparation with all forms and schedules included.
              Covers W‑2, 1099, credits, deductions, and e‑file submission, no
              matter how simple or complex.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>Federal & Arizona returns</li>
              <li>All forms, schedules, and worksheets included</li>
              <li>W‑2, 1099, gig‑work, and investment income</li>
              <li>Itemized deductions & tax credits</li>
              <li>Amended returns (additional fee applies)</li>
              <li>ITIN support</li>
              <li>Full review + e‑file submission</li>
              <li>Copy of your return for your records</li>
            </ul>
            <a
              href="/client/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Small Business (Schedule C) */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800 hover:border-green-400 transition-colors">
            <h3 className="text-green-400 font-semibold text-2xl mb-3">
              Small Business
            </h3>
            <p className="text-3xl font-bold text-white mb-4">$150</p>
            <p className="text-gray-300 text-sm mb-4">
              Complete Schedule C preparation for sole proprietors and
              single‑member LLCs. Includes income/expense categorization, tax
              planning, and year‑end cleanup.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>Full Schedule C preparation</li>
              <li>Books review and cleanup</li>
              <li>Income & expense categorization</li>
              <li>Depreciation and asset reporting</li>
              <li>Mileage, home office, and business deductions</li>
              <li>Estimated tax planning</li>
              <li>Quarterly estimate calculations</li>
              <li>Integration with your personal tax return</li>
              <li>Copy of your return for your records</li>
            </ul>
            <a
              href="/client/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Arizona TPT */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800 hover:border-green-400 transition-colors">
            <h3 className="text-green-400 font-semibold text-2xl mb-3">
              Arizona TPT Filings
            </h3>
            <p className="text-3xl font-bold text-white mb-4">Starts at $35</p>
            <p className="text-gray-300 text-sm mb-4">
              Full support for Transaction Privilege Tax setup, filings,
              amendments, and AZDOR communication. Perfect for dealerships,
              small businesses, and new filers.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>City and state TPT reporting</li>
              <li>Monthly, quarterly, or annual filing</li>
              <li>Amended TPT returns (additional fee applies)</li>
              <li>Late filing remediation & penalty abatement requests</li>
              <li>
                Full compliance review of sales, purchases, and deductions
              </li>
              <li>We communicate with AZDOR on your behalf</li>
              <li>Confirmation of filing and payment status with AZDOR</li>
            </ul>
            <a
              href="/client/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/50 rounded-lg p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Getting Started
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Ready to file with us? Please call, email, or schedule a consultation
          so we can review your situation and confirm your service needs.
        </p>
        <Link
          href="/client/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
        >
          Schedule Your Consultation
        </Link>
      </section>

      {/* Resources Section */}
      <section className="py-9 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
          Tax Resources & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) =>
            resource.external ? (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                href={resource.link}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all block"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </Link>
            ),
          )}
        </div>
      </section>
      {/* CTA */}
      <section className="text-center pb-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          Need Professional Help?
        </h2>
        <p className="text-gray-300 mb-6">
          Whether you&apos;re filing for the first time or need expert guidance,
          we&apos;re here to help.
        </p>
        <Link
          href="/client/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
        >
          Schedule Now
        </Link>
      </section>
    </main>
  );
}
