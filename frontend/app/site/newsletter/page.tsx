"use client";

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h1 className="text-4xl font-semibold text-green-400 mb-4">
          December 2025
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Stay informed with the latest updates from the{" "}
          <a href="https://azdor.gov" target="_blank" rel="noopener noreferrer">
            Arizona Department of Revenue (ADOR)
          </a>{" "}
          and the{" "}
          <a
            href="https://www.irs.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS
          </a>
          .
        </p>
      </section>

      {/* Feature Articles */}
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-8">
        <div className="border border-gray-700 rounded bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            New Deduction: Car Loan Interest
          </h3>
          <p className="text-gray-300">
            The One Big Beautiful Bill Act (OBBBA) allows eligible taxpayers to
            deduct up to
            <strong> $10,000 per year</strong> in car loan interest from
            2025–2028. The deduction phases out starting at{" "}
            <strong>$100,000 MAGI</strong> for single filers and{" "}
            <strong>$200,000 MAGI</strong> for joint filers. Vehicles must be
            new, assembled in the U.S., and under 14,000 pounds.
          </p>
        </div>

        <div className="border border-gray-700 rounded bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            NOL Deductions for Business Losses
          </h3>
          <p className="text-gray-300">
            Businesses experiencing losses can leverage{" "}
            <strong>Net Operating Loss (NOL) deductions</strong> to offset
            future taxable income. NOLs can be carried forward indefinitely but
            are limited to offsetting
            <strong> 80% of taxable income</strong>. The Inflation Reduction Act
            extended the excess business loss limitation through 2028.
          </p>
        </div>

        <div className="border border-gray-700 rounded bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            Remote Work Tax Implications
          </h3>
          <p className="text-gray-300">
            Employees working across state lines may face{" "}
            <strong>double taxation</strong> if domiciled in one state but
            resident in another. Employers must manage multistate payroll
            withholding and may trigger
            <strong> nexus obligations</strong> in new jurisdictions.
          </p>
        </div>
      </section>

      {/* Tax Tips */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-gray-700">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">Tax Tips</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>High-Low Per Diem Rates:</strong> Standard per diem is $225;
            high-cost areas are $319 (Oct 2025–Sept 2026).
          </li>
          <li>
            <strong>Accelerating Deductions:</strong> Consider accelerating
            medical, mortgage, or charitable expenses into 2025 if itemizing.
          </li>
          <li>
            <strong>Employee Gifts:</strong> Tangible gifts may be tax-free, but
            cash bonuses remain taxable.
          </li>
        </ul>
      </section>

      {/* ADOR Updates */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-gray-700">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Updates from ADOR
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Arizona applies a <strong>2.5% flat income tax rate</strong> for
            2025.
          </li>
          <li>
            Businesses must renew their <strong>TPT License</strong> by Jan 1,
            2026 to avoid penalties.
          </li>
          <li>
            ADOR released its <strong>Fiscal Year 2025 Annual Report</strong>{" "}
            highlighting compliance improvements.
          </li>
        </ul>
      </section>

      {/* IRS Updates */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-gray-700">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Updates from the IRS
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            IRS Notice 2025-69 clarifies deductions for employee tips and
            overtime pay.
          </li>
          <li>
            The IRS e-file system will close on <strong>Dec 26, 2025</strong>{" "}
            for year-end maintenance.
          </li>
          <li>
            Rev. Proc. 2024-40 confirms updated{" "}
            <strong>tax brackets and standard deductions</strong> for 2025.
          </li>
        </ul>
      </section>

      {/* Deadlines */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-gray-700">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Upcoming Deadlines
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Dec 15, 2025:</strong> Corporations must pay the fourth
            installment of estimated income taxes.
          </li>
          <li>
            <strong>Jan 12, 2026:</strong> Employees must report December tip
            income of $20 or more to employers.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gray-800">
        <p className="text-gray-300 mb-4">
          Have questions or need personalized guidance?
        </p>
        <a
          href="/scheduling"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 mr-4"
        >
          Schedule Now
        </a>
        <a
          href="/contact"
          className="inline-block bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
