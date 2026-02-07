export const metadata = {
  title: "Tax Calculator Hub - GG Tax Services",
  description:
    "Access IRS and Arizona withholding estimators with simple step-by-step guidance.",
};

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Tax Calculator
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the official IRS and Arizona tools to estimate withholding and
            projected taxes. Follow the quick steps below to get accurate
            results.
          </p>
        </header>

        {/* IRS Calculator */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold text-green-400">
                IRS Tax Withholding Estimator
              </h2>
              <p className="text-gray-300">
                Estimate your federal withholding and adjust your W-4 to avoid a
                big balance due or large refund.
              </p>
            </div>
            <a
              href="https://www.irs.gov/individuals/tax-withholding-estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Open IRS Estimator ↗
            </a>
          </div>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Gather your latest paystub(s) and most recent tax return.</li>
            <li>
              Enter filing status, dependents, and income details (wages,
              self-employment, other).
            </li>
            <li>
              Add deductions/credits (standard or itemized, child tax credit,
              etc.).
            </li>
            <li>
              Review recommended W-4 adjustments to fine-tune withholding.
            </li>
            <li>
              Submit an updated W-4 to your employer if changes are needed.
            </li>
          </ol>
          <p className="text-gray-400 text-sm">
            Tip: Re-run after major changes (raise, new job, side income, new
            dependent).
          </p>
        </section>

        {/* Arizona Calculator */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold text-green-400">
                Arizona Withholding Calculator
              </h2>
              <p className="text-gray-300">
                Estimate Arizona state withholding to align your paycheck with
                expected state tax.
              </p>
            </div>
            <a
              href="https://azdor.gov/tax-withholding-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Open AZ Calculator ↗
            </a>
          </div>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              Have your current Arizona A-4 election and latest paystub handy.
            </li>
            <li>Enter filing status, pay frequency, and Arizona wages.</li>
            <li>
              Select an Arizona withholding percentage (A-4 options) or adjust
              based on the calculator’s suggestion.
            </li>
            <li>Account for additional AZ income or deductions if prompted.</li>
            <li>
              Update your A-4 with your employer to apply the new percentage.
            </li>
          </ol>
          <p className="text-gray-400 text-sm">
            Note: Arizona uses percentage-based withholding; small tweaks can
            reduce year-end surprises.
          </p>
        </section>

        {/* How to Get the Best Estimate */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-3">
          <h3 className="text-2xl font-bold text-white">
            How to get the best results
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Use recent paystubs and last year’s return for accurate inputs.
            </li>
            <li>
              Include all income sources (wages, self-employment, rentals,
              investments).
            </li>
            <li>
              Factor in expected deductions/credits (standard vs. itemized, CTC,
              education credits).
            </li>
            <li>
              Recalculate after life changes: marriage, new dependent, new job,
              big bonus, or sale of assets.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Need help dialing it in?
          </h3>
          <p className="text-gray-300 mb-6">
            We’ll review your situation, project your taxes, and prepare
            tailored withholding or estimated payment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/client/scheduling"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="/site/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Ask a Question
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
