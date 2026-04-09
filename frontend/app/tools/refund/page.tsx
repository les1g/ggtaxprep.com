import IRSRefundCalculator from "./irs-refund-calc/page";
import AZRefundCalculator from "./az-refund-calc/page";
import Link from "next/link";

export const metadata = {
  title: "Tax Refund Status - GG Tax Services",
  description: "Track your federal and Arizona state tax refund status",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          Track Your Tax Refund
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Monitor the status of your federal and Arizona state tax refunds using
          official government tools.
        </p>

        <p className="text-gray-400 text-sm mt-4">
          Have your SSN, filing status, and refund amount ready.
        </p>

        <p className="mt-3 text-red-400 font-semibold text-sm">
          Refund info is typically available 24–48 hours after e-filing
          acceptance.
        </p>
      </div>

      {/* Tracking Cards */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
          Check Refund Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Federal */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-500 mb-2">
                Federal Tax Refund
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Use the IRS “Where’s My Refund?” tool to check your federal
                refund status.
              </p>
            </div>

            <a
              href="https://sa.www4.irs.gov/wmr/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Check IRS Status
            </a>
          </div>

          {/* State */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-500 mb-2">
                Arizona State Refund
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Track your Arizona refund through the official ADOR portal.
              </p>
            </div>

            <a
              href="https://aztaxes.gov/Home/CheckRefund"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Check ADOR Status
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
          Expected Refund Timelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8">
            <IRSRefundCalculator />
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8">
            <AZRefundCalculator />
          </div>
        </div>
      </div>

      {/* Important Info */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Important Information
        </h2>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8">
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm md:text-base">
            <li>
              Refund info is typically available 24–48 hours after e-filing
              acceptance.
            </li>
            <li>
              Direct deposit is the fastest and most secure refund method.
            </li>
            <li>
              Processing times may be longer during peak tax season (Feb–April).
            </li>
            <li>Some returns require additional review and may take longer.</li>
            <li>
              Amended returns may take 8–16 weeks depending on the agency.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Questions about your refund?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            If you need help understanding your refund or have tax questions,
            we’re here to help.
          </p>

          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Schedule Appointment
          </Link>
        </div>

        {/* Footer Links */}
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
    </div>
  );
}
