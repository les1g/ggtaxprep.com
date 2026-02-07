import { IRSRefundCalculator } from "./irs-refund-calc/page";
import { AZRefundCalculator } from "./az-refund-calc/page";

export const metadata = {
  title: "Tax Refund Status - GG Tax Services",
  description: "Track your federal and Arizona state tax refund status",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Track Your Tax Refund
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Monitor the status of your federal and Arizona state tax refunds using
          the official government tracking tools below. Have your SSN, filing
          status, and refund amount ready.{" "}
          <span className="mt-4 text-red-400 font-bold block">
            Note: Refund information is typically available 24-48 hours after
            e-filing acceptance.
          </span>
        </p>
      </div>

      {/* Tracking Links */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Check Refund Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Federal Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                Federal Tax Refund
              </h3>
              <p className="text-gray-300">
                Access the IRS &quot;Where&apos;s My Refund?&quot; portal to
                check your federal return status.
              </p>
            </div>
            <a
              href="https://sa.www4.irs.gov/wmr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors w-full justify-center"
            >
              <span>Check IRS Status</span>
            </a>
          </div>

          {/* State Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                Arizona State Refund
              </h3>
              <p className="text-gray-300">
                Track your Arizona refund through the ADOR portal.
              </p>
            </div>
            <a
              href="https://aztaxes.gov/Home/CheckRefund"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors w-full justify-center"
            >
              <span>Check ADOR Status</span>
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Information */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Expected Refund Timelines
        </h2>

        {/* IRS Timeline */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6">
          <IRSRefundCalculator />
        </div>

        {/* ADOR Timeline */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <AZRefundCalculator />
        </div>
      </div>

      {/* Important Information */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Important Information
        </h2>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              Refund information is typically available 24-48 hours after
              e-filing acceptance
            </li>
            <li>Direct deposit is the fastest and most secure refund method</li>
            <li>
              Processing times may be longer during peak tax season
              (February-April)
            </li>
            <li>
              Returns claiming credits or requiring manual review may take
              additional time
            </li>
            <li>
              Amended returns typically take 8-12 weeks for the IRS and up to 16
              weeks for ADOR
            </li>
          </ul>
        </div>
      </div>

      {/* Help Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-green-400 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Questions About Your Refund?
        </h2>
        <p className="text-gray-300 mb-6">
          If you have concerns about your refund status or need assistance, our
          team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/site/contact"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/client/scheduling"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </div>
  );
}
