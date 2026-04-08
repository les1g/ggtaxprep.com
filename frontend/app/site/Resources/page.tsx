import Link from "next/link";

export const metadata = {
  title: "Free Resources | GG Tax Services",
  description:
    "Explore our collection of free tax resources and tools to help you understand your tax obligations, maximize deductions, and file with confidence. From refund tracking to tax calculators, we have everything you need to navigate tax season successfully.",
};

export default function Resources() {
  const resources = [
    {
      title: "Track Your Refund",
      description:
        "Check the status of your federal and Arizona state tax refunds.",
      link: "/tools/refund",
    },
    {
      title: "Tax Document Checklist",
      description:
        "Comprehensive list of documents to gather for your tax prep.",
      link: "/tools/checklist",
    },
    {
      title: "Deductions & Credits Checklist",
      description:
        "See which federal and Arizona deductions/credits you may qualify for.",
      link: "/tools/deductions",
    },
    {
      title: "W-4 Tax Calculator",
      description:
        "Use IRS and Arizona calculators with step-by-step guidance.",
      link: "/tools/tax-calculator",
    },
    {
      title: "Estimated Payments Guide",
      description: "When and how to make quarterly estimated tax payments.",
      link: "/tools/estimated-payments",
    },
    {
      title: "IRS Forms & Publications",
      description:
        "Direct access to IRS forms, instructions, and publications.",
      link: "https://www.irs.gov/forms-instructions",
      external: true,
    },
    {
      title: "Tax Terms Glossary",
      description: "Common tax terms explained in plain English.",
      link: "/site/glossary",
    },
    {
      title: "Tax Guides",
      description:
        "Step-by-step guides on various tax topics to help you file with confidence.",
      link: "/site/guides",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Mini Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/client/secure-send"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Upload Documents
          </Link>
          <Link
            href="/tools/refund"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Track Refund
          </Link>
          <Link
            href="/site/resources"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Free Resources
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="text-center py-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">
          Free Resources
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
          A full list of our services and pricing. We specialize in individual
          tax returns, returns for small businesses, and Arizona TPT (sales)
          tax. We also offer a variety of free resources and tools to help you
          understand your tax obligations.
        </p>
      </section>

      {/* Main Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Simple Returns */}
          <div className="flex flex-col justify-between p-5 md:p-6 border-2 border-green-400 rounded bg-gray-800 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-green-400 font-semibold text-2xl mb-3">
                Simple Returns
              </h3>
              <p className="text-3xl font-bold text-white mb-4">$150</p>
              <p className="text-gray-300 text-sm mb-4">
                Simple returns are suitable for those with W-2 income and simple
                tax situations. This service is for individuals with the
                following:
              </p>

              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6 leading-relaxed">
                <li>W-2 income only</li>
                <li>Child tax credit</li>
                <li>Unemployment income (1099-G)</li>
                <li>Retirement income (1099-R)</li>
                <li>Property Taxes & Mortgage interest (1098)</li>
                <li>Student loan interest (1098-E)</li>
                <li>Student Tuition & Expenses (1098-T)</li>
                <li>Medical expenses</li>
                <li>Charitable donations</li>
                <li>IRA contributions</li>
                <li>Health Savings Account contributions</li>
                <li>Education credits</li>
                <li>Earned income credit</li>
                <li>Other common credits and deductions</li>
              </ul>
            </div>

            <a
              href="/client/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Complex Returns */}
          <div className="flex flex-col justify-between p-5 md:p-6 border border-gray-700 rounded bg-gray-800 hover:border-green-400 transition-colors">
            <div>
              <h3 className="text-green-400 font-semibold text-2xl mb-3">
                Complex Returns
              </h3>
              <p className="text-3xl font-bold text-white mb-4">$350</p>
              <p className="text-gray-300 text-sm mb-4">
                Complex returns include everything in a simple return but is
                designed for those with income from self-employment, side
                hustles, or small businesses. This service is for individuals
                with the following:
              </p>

              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6 leading-relaxed">
                <li>Self-employment Income</li>
                <li>1099-NEC, 1099-K, or 1099-MISC income</li>
                <li>Business Expenses</li>
                <li>Rental Income</li>
                <li>Investment Income</li>
                <li>Capital Gains & Losses</li>
                <li>Cryptocurrency transactions</li>
                <li>Asset depreciation</li>
                <li>Vehicle, home office, and other business deductions</li>
                <li>Qualified business income deduction</li>
                <li>
                  And more – we review your entire tax situation to maximize
                  your refund
                </li>
              </ul>
            </div>

            <a
              href="/client/scheduling"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Arizona TPT */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="mt-4 max-w-lg mx-auto">
          <div className="p-6 border border-gray-700 rounded bg-gray-800 hover:border-green-400 transition-colors text-center">
            <h3 className="text-green-400 font-semibold text-2xl mb-3">
              Arizona TPT
            </h3>
            <p className="text-3xl font-bold text-white mb-4">$150+</p>
            <p className="text-gray-300 text-sm">
              Sales tax filing and support for Arizona Transaction Privilege Tax
              reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Additional Services
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 leading-relaxed">
            <li>Tax planning and consulting</li>
            <li>IRS and state tax issue resolution</li>
            <li>Amended returns</li>
            <li>Audit support</li>
            <li>Bookkeeping and accounting support</li>
            <li>Payroll tax filings</li>
            <li>And more – just ask!</li>
          </ul>
        </div>
      </section>

      {/* NEW Expandable Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
          Additional Tax Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Service Name
              </h3>
              <p className="text-2xl font-bold text-white mb-3">$0</p>
              <p className="text-gray-300 text-sm">
                Description of the service. Explain what is included and who it
                is for.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/50 rounded-lg p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Getting Started
        </h2>
        <p className="text-gray-300 mb-6">
          Ready to file with us? Schedule a consultation so we can review your
          situation.
        </p>
        <Link
          href="/client/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block"
        >
          Schedule Your Consultation
        </Link>
      </section>

      {/* Resources */}
      <section className="py-9 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
          Tax Resources & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) =>
            resource.external ? (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                href={resource.link}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition block"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </Link>
            ),
          )}
        </div>
      </section>

      {/* Footer */}
      <div className="text-center mt-10 pb-10">
        <p>
          <a href="/site/privacy-policy" className="text-green-400 underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/site/terms" className="text-green-400 underline">
            Terms of Service
          </a>
        </p>
      </div>
    </main>
  );
}
