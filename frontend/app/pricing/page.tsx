export const metadata = {
  title: "Pricing",
  description:
    "Clear and transparent pricing for GG Tax Services' tax preparation and compliance in Arizona.",
};

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Pricing</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          No hidden fees. Clear rates for every service. Custom quotes available
          for complex filings.
        </p>
      </section>

      {/* Pricing table */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Individual Tax Return
            </h3>
            <p className="text-gray-300 mb-2">
              Starting at <span className="text-white font-bold">$100</span>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Federal + Arizona filing</li>
              <li>Includes W‑2, 1099, standard deductions</li>
              <li>Additional forms billed per complexity</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Small Business (Schedule C)
            </h3>
            <p className="text-gray-300 mb-2">
              Starting at <span className="text-white font-bold">$150</span>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Income/expense categorization</li>
              <li>Quarterly estimates optional</li>
              <li>Includes sole proprietor filing</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Arizona TPT Filing
            </h3>
            <p className="text-gray-300 mb-2">
              Flat rate <span className="text-white font-bold">$25</span> per
              filing
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Monthly or quarterly</li>
              <li>Includes city and state reporting</li>
              <li>Late filings may incur surcharge</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
