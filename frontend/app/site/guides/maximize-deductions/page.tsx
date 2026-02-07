import Link from "next/link";

export const metadata = {
  title: "Maximizing Your Tax Deductions - GG Tax Services",
  description:
    "Discover legitimate deductions you might be missing to lower your tax bill.",
};

export default function MaximizeDeductions() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/site/guides"
          className="text-green-400 hover:text-green-300 mb-6 inline-block"
        >
          ← Back to Guides
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold text-green-400 bg-gray-700 px-3 py-1 rounded-full">
              Tax Tips
            </span>
            <span className="text-xs text-gray-400">7 min read</span>
            <span className="text-xs text-gray-400">January 20, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            Maximizing Your Tax Deductions
          </h1>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              Many taxpayers leave money on the table by missing deductions they
              qualify for. Here&apos;s how to maximize yours and reduce your tax
              liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Common Deductions People Miss
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Review this checklist to see if you qualify for any of these
              commonly overlooked deductions:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Home office expenses (if you work from home)</li>
              <li>Vehicle mileage for business or medical purposes</li>
              <li>Professional development and education</li>
              <li>Home improvements for medical accessibility</li>
              <li>Unreimbursed employee expenses</li>
              <li>Investment losses and capital losses</li>
              <li>Charitable contributions</li>
              <li>State and local taxes (SALT)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Standard vs. Itemized Deductions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Don&apos;t automatically choose the standard deduction. Calculate
              both options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Standard Deduction
                </h4>
                <p className="text-gray-300 text-sm">
                  Flat amount based on filing status. Simpler but may not be
                  optimal.
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Itemized Deductions
                </h4>
                <p className="text-gray-300 text-sm">
                  Add up all deductible expenses. Better if total exceeds
                  standard deduction.
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Choose whichever gives you the bigger benefit. In 2024, the
              standard deduction ranges from $13,850 to $27,700 depending on
              your filing status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Keep Good Records
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The IRS may ask for proof of deductions. Keep receipts, invoices,
              and documentation for at least three years. Better yet, keep
              records for seven years to be safe.
            </p>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <strong>✓ Action Item:</strong> Organize your receipts by
                category and keep digital copies backed up.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Tax Credits vs. Deductions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Don&apos;t confuse deductions with credits. Credits are even
              better because they reduce your tax dollar-for-dollar, while
              deductions only reduce your taxable income. Common credits include
              child tax credit, education credits, and earned income tax credit.
            </p>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Maximize Your Refund
          </h2>
          <p className="text-gray-300 mb-6">
            Let our experts review your deductions and credits to ensure
            you&apos;re not leaving money on the table.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
