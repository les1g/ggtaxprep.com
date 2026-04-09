import Link from "next/link";

export const metadata = {
  title: "Services | GG Tax Services",
  description:
    "Tax preparation services, pricing, and free tools to help you file with confidence.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <section className="text-center py-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-500 mb-4">Services</h2>
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
          <div className="flex flex-col justify-between p-5 md:p-6 border-2 border-green-500 rounded bg-gray-800 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-green-500 font-semibold text-2xl mb-3">
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
            <div className="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4 text-sm text-gray-300">
              ✔ Best for: W-2 employees with common credits & deductions
            </div>
          </div>

          {/* Complex Returns */}
          <div className="flex flex-col justify-between p-5 md:p-6 border border-gray-700 rounded bg-gray-800 hover:border-green-500 transition-colors">
            <div>
              <h3 className="text-green-500 font-semibold text-2xl mb-3">
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

            <div className="bg-gray-900/50 border border-gray-700 rounded p-3 mb-4 text-sm text-gray-300">
              ✔ Best for: Self-employed, side income, or investments
            </div>
          </div>
        </div>
      </section>
      {/* Schedule An Appointment */}
      <section>
        <div className="mt-6 text-center">
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
      {/* Additional Services */}{" "}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        {" "}
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          {" "}
          Additional Tax Services{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition"
            >
              {" "}
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                {" "}
                Service Name{" "}
              </h3>{" "}
              <p className="text-2xl font-bold text-white mb-3">$0</p>{" "}
              <p className="text-gray-300 text-sm">
                {" "}
                Description of the service. Explain what is included and who it
                is for.{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>
      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Book a time to meet with us and get started with GG tax Services.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Schedule Appointment
          </Link>
        </div>
        <div className="text-center mt-10">
          <p>
            <a
              href="/site/privacy-policy"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/site/terms"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
