import Link from "next/link";

export const metadata = {
  title: "Tax Planning for Year-End - GG Tax Services",
  description: "End-of-year strategies to minimize your tax liability in the upcoming year.",
};

export default function YearEndTaxPlanning() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-6 inline-block">
          ← Back to Guides
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold text-green-400 bg-gray-700 px-3 py-1 rounded-full">
              Planning
            </span>
            <span className="text-xs text-gray-400">7 min read</span>
            <span className="text-xs text-gray-400">November 1, 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Tax Planning for Year-End</h1>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              Don't wait until January to think about taxes. Year-end planning can save you thousands of dollars. 
              Here are strategic moves you can make before December 31st to minimize your tax liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Bunching Deductions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you're close to itemizing, consider bunching charitable donations or medical expenses into one year 
              to exceed the standard deduction threshold.
            </p>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-2">
                <strong>Example:</strong> Standard deduction is $27,700. If you have $26,000 in deductions, 
                make additional charitable donations of $2,000 to exceed the threshold.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Retirement Contributions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Maximize contributions to reduce your taxable income:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Traditional IRA</h4>
                <p className="text-gray-300 text-sm">
                  2024 limit: $7,000 ($8,000 if 50+). Deadline: Tax filing date (usually April 15).
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">401(k)</h4>
                <p className="text-gray-300 text-sm">
                  2024 limit: $23,500 ($31,000 if 50+). Deadline: December 31.
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">SEP-IRA</h4>
                <p className="text-gray-300 text-sm">
                  Self-employed: Up to 20% of net earnings. Deadline: Tax filing date.
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Solo 401(k)</h4>
                <p className="text-gray-300 text-sm">
                  Self-employed: Up to $69,000 (2024). Deadline: December 31.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Tax-Loss Harvesting</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sell underperforming investments to offset capital gains from winners. This can reduce your overall 
              capital gains tax significantly.
            </p>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong>⚠️ Wash Sale Rule:</strong> Don't buy back the same investment within 30 days of selling at a loss.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Charitable Giving</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Make charitable donations before December 31 to deduct them in the current tax year. 
              Keep receipts and documentation.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Cash donations</li>
              <li>Appreciated securities (avoid capital gains tax)</li>
              <li>Non-cash donations (clothing, household items)</li>
              <li>Vehicle donations</li>
              <li>Charitable gifts of stock</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Business Expenses</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Self-employed? Purchase business equipment before year-end to deduct it in the current year:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Office equipment and supplies</li>
              <li>Computer equipment and software</li>
              <li>Vehicle purchases</li>
              <li>Professional development courses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Year-End Tax Planning Checklist</h2>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 space-y-2">
              <p className="text-gray-300 text-sm">✓ Review your current tax bracket</p>
              <p className="text-gray-300 text-sm">✓ Calculate estimated tax liability</p>
              <p className="text-gray-300 text-sm">✓ Maximize retirement contributions</p>
              <p className="text-gray-300 text-sm">✓ Harvest investment losses</p>
              <p className="text-gray-300 text-sm">✓ Make charitable donations</p>
              <p className="text-gray-300 text-sm">✓ Purchase business equipment</p>
              <p className="text-gray-300 text-sm">✓ Review withholdings for next year</p>
              <p className="text-gray-300 text-sm">✓ Plan for quarterly estimated taxes (if self-employed)</p>
            </div>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Personalized Year-End Planning</h2>
          <p className="text-gray-300 mb-6">
            Our tax experts can review your situation and develop a customized strategy to minimize your tax liability.
          </p>
          <Link
            href="/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}