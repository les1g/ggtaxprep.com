export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Tax Preparation & Compliance</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-300">
          Helping Arizona individuals and small businesses file with confidence, accuracy, and care.
        </p>
        <a href="/scheduling" className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
          Schedule a Call
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">Why Choose GG Tax?</h3>
        <p className="text-gray-300 mb-6">
          We specialize in federal and Arizona tax filings, small business compliance, and penalty abatement strategies.
          With personalized service and transparent pricing, we make tax season stress-free and efficient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 border border-gray-700 rounded bg-gray-800 shadow-sm">
            <h4 className="text-green-400 font-semibold mb-2">Individual Returns</h4>
            <p className="text-sm text-gray-300">1040, W‑2, 1099, deductions, credits — we handle it all with care.</p>
          </div>
          <div className="p-4 border border-gray-700 rounded bg-gray-800 shadow-sm">
            <h4 className="text-green-400 font-semibold mb-2">Business & TPT</h4>
            <p className="text-sm text-gray-300">Schedule C, Arizona TPT filings, and quarterly compliance support.</p>
          </div>
          <div className="p-4 border border-gray-700 rounded bg-gray-800 shadow-sm">
            <h4 className="text-green-400 font-semibold mb-2">Penalty Abatement</h4>
            <p className="text-sm text-gray-300">We help you request relief from IRS and AZDOR penalties when eligible.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
