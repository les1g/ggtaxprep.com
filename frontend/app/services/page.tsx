export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Our Services</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Comprehensive tax preparation and compliance support for individuals and small businesses in Arizona.
        </p>
      </section>

      {/* Services grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual Returns */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Individual Returns</h3>
            <p className="text-gray-300 text-sm mb-4">
              Form 1040, W‑2, 1099, itemized deductions, tax credits, and e‑file submission.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Federal & Arizona returns</li>
              <li>Amended returns</li>
              <li>ITIN support</li>
            </ul>
          </div>

          {/* Small Business (Schedule C) */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Small Business (Schedule C)</h3>
            <p className="text-gray-300 text-sm mb-4">
              Sole proprietor filings with income/expense categorization and quarterly estimates.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Books review and cleanup</li>
              <li>Depreciation and assets</li>
              <li>Estimated tax planning</li>
            </ul>
          </div>

          {/* Arizona TPT */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Arizona TPT Filings</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transaction Privilege Tax setup, monthly/quarterly filings, and compliance checks.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>City and state reporting</li>
              <li>Nexus evaluation</li>
              <li>Late filing remediation</li>
            </ul>
          </div>

          {/* Penalty Abatement */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Penalty Abatement</h3>
            <p className="text-gray-300 text-sm mb-4">
              Guidance and preparation for reasonable cause penalty relief with IRS & AZDOR.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Case review and documentation</li>
              <li>Submission preparation</li>
              <li>Status tracking</li>
            </ul>
          </div>

          {/* Compliance & Advisory */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Compliance & Advisory</h3>
            <p className="text-gray-300 text-sm mb-4">
              Year‑round support to stay compliant, optimize deductions, and plan ahead.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Withholding reviews</li>
              <li>Entity considerations</li>
              <li>Record‑keeping best practices</li>
            </ul>
          </div>

          {/* Document Support */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Document Support</h3>
            <p className="text-gray-300 text-sm mb-4">
              Secure intake, checklist generation, and guidance on required records.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Encrypted uploads</li>
              <li>Personalized checklists</li>
              <li>Turnaround transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gray-800">
        <p className="text-gray-300 mb-4">Ready to get started?</p>
        <a href="/scheduling" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
          Schedule a Call
        </a>
      </section>

    </main>
  );
}
