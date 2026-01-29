export const metadata = {
  title: "Services & Pricing",
  description:
    "Comprehensive tax preparation and compliance services with clear, transparent pricing.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">
          Services & Pricing
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Comprehensive tax preparation and compliance support for individuals
          and small businesses in Arizona. Simple flat-rate pricing—no hidden
          fees.
        </p>
      </section>

      {/* Services with Pricing */}
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
              Form 1040, W‑2, 1099, itemized deductions, tax credits, and e‑file
              submission. No matter how complex.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>Federal & Arizona returns</li>
              <li>Amended returns</li>
              <li>ITIN support</li>
              <li>W‑2, 1099, all deductions included</li>
              <li>All forms and schedules included</li>
            </ul>
            <a
              href="/scheduling"
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
            <p className="text-3xl font-bold text-white mb-4">$100</p>
            <p className="text-gray-300 text-sm mb-4">
              Sole proprietor filings with income/expense categorization and
              quarterly estimates.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>Books review and cleanup</li>
              <li>Depreciation and assets</li>
              <li>Estimated tax planning</li>
              <li>Income/expense categorization</li>
              <li>Quarterly estimates included</li>
            </ul>
            <a
              href="/scheduling"
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
            <p className="text-3xl font-bold text-white mb-4">$25 per filing</p>
            <p className="text-gray-300 text-sm mb-4">
              Transaction Privilege Tax setup, monthly/quarterly filings, and
              compliance checks.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6">
              <li>City and state reporting</li>
              <li>Nexus evaluation</li>
              <li>Late filing remediation</li>
              <li>Monthly or quarterly options</li>
              <li>All filings fully managed</li>
            </ul>
            <a
              href="/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                ✓ Free Consultation
              </h4>
              <p className="text-sm">
                Discuss your tax situation before committing
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                ✓ Secure Document Upload
              </h4>
              <p className="text-sm">
                Upload your documents safely through our portal
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                ✓ E-File Submission
              </h4>
              <p className="text-sm">
                Fast and secure electronic filing included
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                ✓ Maximum Refund Guarantee
              </h4>
              <p className="text-sm">
                We&apos;ll find every deduction you qualify for
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gray-800">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to get started?
        </h3>
        <p className="text-gray-300 mb-6">
          Schedule a free consultation or upload your documents securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/scheduling"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Schedule Consultation
          </a>
          <a
            href="/secure-send"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Upload Documents
          </a>
        </div>
      </section>
    </main>
  );
}
