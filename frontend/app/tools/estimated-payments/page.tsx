export const metadata = {
  title: "Estimated Tax Payments - GG Tax Services",
  description:
    "How to calculate, schedule, and pay federal and Arizona estimated taxes for individuals and businesses.",
};

export default function EstimatedPayments() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Estimated Tax Payments Guide
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Understand when and how to make quarterly estimated tax payments for
            both federal (IRS) and Arizona, whether you’re an individual,
            self-employed, or running a business.
          </p>
        </header>

        {/* Who Needs to Pay */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Who needs to pay estimated taxes?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Self-employed / freelancers / gig workers with untaxed income
            </li>
            <li>S-corp/LLC/partnership owners with pass-through income</li>
            <li>
              Investors with significant interest, dividends, or capital gains
            </li>
            <li>Landlords with rental income</li>
            <li>
              W-2 earners who are under-withheld (big balances due last year)
            </li>
          </ul>
          <p className="text-gray-400 text-sm">
            Rule of thumb: If you expect to owe at least $1,000 in federal tax
            (after withholding/credits), you likely need estimated payments.
          </p>
        </section>

        {/* Federal (IRS) Estimated Payments */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-green-400">
            Federal (IRS) Estimated Payments
          </h2>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Due Dates (Quarterly)
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Q1: April 15</li>
              <li>Q2: June 15</li>
              <li>Q3: September 15</li>
              <li>Q4: January 15 (of next year)</li>
            </ul>
            <p className="text-gray-400 text-sm">
              If a date falls on a weekend/holiday, the deadline moves to the
              next business day.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Safe Harbor (to avoid penalties)
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Pay 90% of your current year total tax, or</li>
              <li>
                Pay 100% of your prior year total tax (110% if prior-year AGI
                &gt; $150k MFJ / $75k single)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              How to Pay (IRS)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.irs.gov/payments/direct-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">
                  IRS Direct Pay
                </div>
                <p className="text-sm text-gray-300">
                  Pay directly from bank account (no fee).
                </p>
              </a>
              <a
                href="https://www.eftps.gov/eftps/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">EFTPS</div>
                <p className="text-sm text-gray-300">
                  Electronic Federal Tax Payment System (setup required).
                </p>
              </a>
              <a
                href="https://www.irs.gov/payments/pay-your-taxes-by-debit-or-credit-card"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">
                  Pay by Card
                </div>
                <p className="text-sm text-gray-300">Convenience fees apply.</p>
              </a>
              <a
                href="https://www.irs.gov/forms-pubs/about-form-1040-es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">
                  Form 1040-ES
                </div>
                <p className="text-sm text-gray-300">
                  Vouchers and worksheets for calculating payments.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Arizona Estimated Payments */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-green-400">
            Arizona Estimated Payments
          </h2>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Due Dates (Quarterly)
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Q1: April 15</li>
              <li>Q2: June 15</li>
              <li>Q3: September 15</li>
              <li>Q4: January 15 (of next year)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              How to Pay (AZ)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://aztaxes.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">
                  AZTaxes.gov
                </div>
                <p className="text-sm text-gray-300">
                  Pay online and view history.
                </p>
              </a>
              <a
                href="https://azdor.gov/payment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-650 border border-gray-600 hover:border-green-400 rounded-lg p-4 text-gray-200 transition-colors"
              >
                <div className="font-semibold text-green-400 mb-1">
                  ADOR Payments
                </div>
                <p className="text-sm text-gray-300">
                  State payment options and instructions.
                </p>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Arizona Notes
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Arizona generally mirrors federal quarterly due dates.</li>
              <li>
                Use your prior-year Arizona tax as a baseline if income is
                stable.
              </li>
              <li>
                Adjust for Arizona-specific credits/deductions (e.g., school
                credits) when estimating.
              </li>
            </ul>
          </div>
        </section>

        {/* How to Calculate */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold text-white">
            How to estimate your payments
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              Project your annual income (wages, self-employment, rentals,
              investments).
            </li>
            <li>
              Subtract deductions (standard or itemized) and applicable credits.
            </li>
            <li>
              Apply federal and state tax rates; include SE tax if
              self-employed.
            </li>
            <li>Subtract expected withholding (W-2, 1099 withholding).</li>
            <li>
              Divide the remaining balance over four quarterly payments (or use
              safe harbor amounts).
            </li>
          </ol>
          <p className="text-gray-400 text-sm">
            Tip: If income is uneven through the year, use the annualized
            installment method to reduce penalties.
          </p>
        </section>

        {/* Business vs Individual Considerations */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Business vs. Individual considerations
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Self-employed: Include SE tax, deduct SE health insurance and half
              of SE tax.
            </li>
            <li>
              S-corps/LLCs: Owners may need estimates on pass-through income;
              adjust W-2 withholding or pay estimates.
            </li>
            <li>
              Investors: Plan for capital gains distributions and sales;
              consider harvesting losses.
            </li>
            <li>
              Rental owners: Include depreciation, interest, taxes, insurance,
              and repairs in projections.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want us to calculate your estimates?
          </h2>
          <p className="text-gray-300 mb-6">
            We’ll project your income, apply safe harbors, and prepare federal
            and Arizona vouchers or electronic payments.
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
