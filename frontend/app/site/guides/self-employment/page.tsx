import Link from "next/link";

export const metadata = {
  title: "Self-Employment Tax Explained - GG Tax Services",
  description: "Complete guide to understanding self-employment taxes and quarterly payments.",
};

export default function SelfEmploymentTax() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-6 inline-block">
          ← Back to Guides
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold text-green-400 bg-gray-700 px-3 py-1 rounded-full">
              Self-Employment
            </span>
            <span className="text-xs text-gray-400">8 min read</span>
            <span className="text-xs text-gray-400">February 1, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Self-Employment Tax Explained</h1>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              If you're self-employed, you're responsible for both the employer and employee portions of Social Security 
              and Medicare taxes. Understanding these taxes is crucial for budgeting and avoiding penalties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">What is Self-Employment Tax?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Self-employment tax covers Social Security and Medicare for self-employed individuals. The current rate is 15.3% 
              of your net self-employment income:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>12.4%</strong> for Social Security (on earnings up to $168,600 in 2024)</li>
              <li><strong>2.9%</strong> for Medicare (on all earnings)</li>
              <li><strong>0.9%</strong> Additional Medicare Tax (on earnings over $200,000 single/$250,000 married)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Who Pays Self-Employment Tax?</h2>
            <p className="text-gray-300 leading-relaxed">
              You must pay self-employment tax if:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>You earned net earnings of $400 or more from self-employment</li>
              <li>You're a member of a partnership with net earnings of $400+</li>
              <li>You're a minister, member of a religious sect, or Christian Science practitioner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Quarterly Estimated Tax Payments</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most self-employed people need to make quarterly estimated tax payments to avoid penalties and interest charges. 
              These are due on:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3">
                <p className="text-gray-300 text-sm"><strong>Q1:</strong> April 15</p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3">
                <p className="text-gray-300 text-sm"><strong>Q2:</strong> June 17</p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3">
                <p className="text-gray-300 text-sm"><strong>Q3:</strong> September 16</p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3">
                <p className="text-gray-300 text-sm"><strong>Q4:</strong> January 16 (next year)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Deductions Available</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can deduct 50% of your self-employment tax from your gross income. This helps reduce your overall tax burden 
              and is calculated on Form SE (Schedule SE).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Additionally, you can deduct other business expenses such as home office, equipment, supplies, and professional services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">Record Keeping Tips</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Track all income and expenses throughout the year</li>
              <li>Keep receipts and invoices for all business expenses</li>
              <li>Use accounting software to simplify tracking</li>
              <li>Set aside 25-30% of income for taxes</li>
              <li>Review quarterly to adjust estimated payments</li>
            </ul>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Optimize Your Self-Employment Taxes</h2>
          <p className="text-gray-300 mb-6">
            Our experts can help you plan quarterly payments and find deductions you may have missed.
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