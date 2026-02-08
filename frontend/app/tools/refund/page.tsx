import IRSRefundCalculator from "./irs-refund-calc/page";
import AZRefundCalculator from "./az-refund-calc/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tax Refund Status - GG Tax Services",
  description: "Track your federal and Arizona state tax refund status",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link
          href="/client/services"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Track Your Tax Refund
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Monitor the status of your federal and Arizona state tax refunds using
          the official government tracking tools below. Have your SSN, filing
          status, and refund amount ready.
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
              e-filing acceptance.
            </li>
            <li>
              Direct deposit is the fastest and most secure refund method.
            </li>
            <li>
              Processing times may be longer during peak tax season
              (February–April).
            </li>
            <li>
              Returns claiming certain credits or requiring manual review may
              take additional time.
            </li>
            <li>
              Amended returns typically take 8–12 weeks for the IRS and up to 16
              weeks for ADOR.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-t border-green-400/40 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions about your refund?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            If you have concerns about your refund status or need help with tax
            questions, our team is here to assist you. Contact us for support.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-10 rounded-lg transition text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
