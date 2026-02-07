"use client";

export default function DeductionsChecklist() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Deductions & Credits You May Qualify For
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Start with federal deductions/credits (IRS), then apply Arizona-specific deductions/credits.
            Compare standard vs. itemized at both levels to maximize savings. Use the Print button to save as PDF.
          </p>
          <button
            onClick={() => window.print()}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Print / Save as PDF
          </button>
        </header>

        {/* IRS Deductions & Credits */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-8">
          <h2 className="text-3xl font-bold text-green-400">IRS (Federal) Deductions & Credits</h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Above-the-Line Deductions</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Educator Expenses: Up to $300 ($600 MFJ if both educators)</li>
              <li>Student Loan Interest: Up to $2,500 (income limits apply)</li>
              <li>IRA Contributions: Deductible based on income/plan coverage</li>
              <li>HSA Contributions: For high-deductible health plans</li>
              <li>Self-Employed: Health insurance premiums; 50% SE tax; SEP/SIMPLE/solo 401(k); home office; ordinary/necessary biz expenses</li>
              <li>Alimony paid (pre-2019 decrees)</li>
              <li>Moving expenses (active-duty military PCS only)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Itemized Deductions (Schedule A)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Medical & Dental: Unreimbursed 7.5% of AGI</li>
              <li>SALT: Up to $10,000 (2024) or $40,000 (2025)</li>
              <li>Home Mortgage Interest (within balance limits)</li>
              <li>Charitable Contributions: Cash/non-cash to qualified orgs</li>
              <li>Casualty & Theft: Federally declared disaster areas only</li>
              <li>Gambling Losses: Up to gambling winnings</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Key Federal Tax Credits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Child Tax Credit: Up to $2,200 per child (2025)</li>
              <li>Child & Dependent Care Credit</li>
              <li>Earned Income Tax Credit (EITC)</li>
              <li>Education Credits: American Opportunity (AOTC), Lifetime Learning (LLC)</li>
              <li>Saver’s Credit (retirement contributions)</li>
              <li>Premium Tax Credit (Marketplace health insurance)</li>
            </ul>
          </div>
        </section>

        {/* Arizona Deductions & Credits */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-8">
          <h2 className="text-3xl font-bold text-green-400">Arizona Deductions & Credits</h2>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Standard Deduction</h3>
            <p className="text-gray-300">Claimable even if you itemize federally; extra deduction for age 65+.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-200">
              <div className="bg-gray-700/60 rounded-lg p-4">
                <p className="font-semibold text-green-400">2024</p>
                <p>Single/MFS: $14,600</p>
                <p>MFJ: $29,200</p>
                <p>HOH: $21,900</p>
              </div>
              <div className="bg-gray-700/60 rounded-lg p-4">
                <p className="font-semibold text-green-400">2025</p>
                <p>Single/MFS: $15,750</p>
                <p>MFJ: $31,500</p>
                <p>HOH: $23,625</p>
              </div>
              <div className="bg-gray-700/60 rounded-lg p-4">
                <p className="font-semibold text-green-400">Notes</p>
                <p>Additional amount if 65+</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Itemized (Based on Fed Schedule A, with AZ adjustments)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Medical & dental 7.5% AGI</li>
              <li>Home mortgage interest</li>
              <li>Charitable donations</li>
              <li>State, local, real estate, personal property taxes (adjust if claiming AZ charitable credits)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Arizona Subtractions from Income</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Active Duty Military Pay (fully subtractable)</li>
              <li>Retirement benefits: federally taxable Social Security & railroad retirement</li>
              <li>Adoption expenses: Up to $3,000 (year adoption order granted)</li>
              <li>Long-term care insurance premiums (if qualifying)</li>
              <li>529 Plan contributions: Up to $2,000 (single) / $4,000 (MFJ)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">Arizona Tax Credits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Public School Extracurricular Activities</li>
              <li>Private School Tuition Organizations</li>
              <li>Qualifying Charitable Organizations (QCOs)</li>
              <li>Qualifying Foster Care Charitable Organizations (QFCOs)</li>
            </ul>
          </div>
        </section>

        {/* How to Use */}
        <section className="bg-gray-800 border border-green-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Use This List</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Start with federal deductions and credits.</li>
            <li>Apply Arizona-specific deductions and credits separately.</li>
            <li>Compare standard vs. itemized at both federal and state levels.</li>
            <li>Choose the combination that yields the greatest overall tax benefit.</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Maximizing Your Deductions?</h2>
          <p className="text-gray-300 mb-6">
            Book a consultation and we’ll map the best deduction and credit strategy for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/scheduling"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="/contact"
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