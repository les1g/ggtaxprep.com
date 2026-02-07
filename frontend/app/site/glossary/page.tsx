export const metadata = {
  title: "Tax Glossary - GG Tax Services",
  description: "Common tax terms explained in simple language.",
};

const terms: { term: string; definition: string }[] = [
  {
    term: "Adjusted Gross Income (AGI)",
    definition:
      "Your total income minus above-the-line deductions, before standard or itemized deductions.",
  },
  {
    term: "Above-the-Line Deduction",
    definition:
      "A deduction you can take even if you don't itemize, which reduces AGI.",
  },
  {
    term: "Itemized Deductions",
    definition:
      "Expenses like mortgage interest, SALT, charity, and medical costs you claim instead of the standard deduction.",
  },
  {
    term: "Standard Deduction",
    definition:
      "A fixed amount that reduces taxable income; you choose this or itemizing, whichever is larger.",
  },
  {
    term: "Tax Credit",
    definition:
      "Directly reduces your tax bill dollar-for-dollar (e.g., Child Tax Credit).",
  },
  {
    term: "Refundable Credit",
    definition:
      "If the credit exceeds your tax, you can get the extra as a refund (e.g., part of EITC).",
  },
  {
    term: "Nonrefundable Credit",
    definition:
      "Can reduce tax to zero but won’t create a refund beyond tax owed.",
  },
  {
    term: "Earned Income Tax Credit (EITC)",
    definition:
      "Refundable credit for eligible workers with low to moderate income.",
  },
  {
    term: "Withholding",
    definition:
      "Tax your employer takes from each paycheck and sends to the IRS/state for you.",
  },
  {
    term: "Estimated Tax Payments",
    definition:
      "Quarterly payments you send if tax isn’t fully covered by withholding (common for self-employed).",
  },
  {
    term: "1099-NEC / 1099-MISC",
    definition:
      "Forms reporting non-employee income like freelance or contract work.",
  },
  {
    term: "W-2",
    definition: "Form from your employer showing wages and taxes withheld.",
  },
  {
    term: "Schedule C",
    definition: "Form to report self-employment income and expenses.",
  },
  {
    term: "Self-Employment Tax",
    definition:
      "Social Security and Medicare taxes for self-employed income (covers both employer and employee portions).",
  },
  {
    term: "Basis",
    definition:
      "Generally what you paid for an asset; used to calculate gain or loss when you sell.",
  },
  {
    term: "Capital Gain / Loss",
    definition: "Profit or loss when you sell investments or property.",
  },
  {
    term: "Short-Term vs Long-Term",
    definition:
      "Short-term: held 1 year or less (taxed as ordinary income). Long-term: held over 1 year (often lower rates).",
  },
  {
    term: "Wash Sale",
    definition:
      "Selling an investment at a loss and rebuying too soon, disallowing the loss for taxes.",
  },
  {
    term: "Depreciation",
    definition:
      "Expensing the cost of certain business or rental assets over time.",
  },
  {
    term: "Home Office Deduction",
    definition:
      "Deduction for a space used regularly and exclusively for business.",
  },
  {
    term: "SALT Cap",
    definition:
      "Limit on deducting state and local taxes on Schedule A (e.g., $10k or $40k depending on year).",
  },
  {
    term: "Filing Status",
    definition:
      "Your category for taxes (Single, MFJ, MFS, HOH, Qualifying Surviving Spouse).",
  },
  {
    term: "Taxable Income",
    definition:
      "Income after deductions and exemptions that is used to calculate tax.",
  },
  {
    term: "Extension",
    definition:
      "Extra time to file (not to pay). Taxes still due by the original deadline.",
  },
  {
    term: "Underpayment Penalty",
    definition:
      "Fee for not paying enough tax during the year via withholding/estimates.",
  },
];

export default function TaxGlossary() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Tax Glossary
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plain-English explanations of common tax terms. Use this as a quick
            reference while you prepare or review your return.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map(({ term, definition }) => (
            <div
              key={term}
              className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-green-400 transition-colors"
            >
              <h2 className="text-lg font-bold text-green-400 mb-2">{term}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {definition}
              </p>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Need a term explained for your situation?
          </h3>
          <p className="text-gray-300 mb-4">
            Send us your question and we’ll clarify how it applies to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/site/contact"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-5 rounded-lg transition-colors"
            >
              Ask a Question
            </a>
            <a
              href="/client/scheduling"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2.5 px-5 rounded-lg transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
