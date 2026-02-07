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

      {/* Help / What You’ll Need Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-green-400 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Questions About Your Refund? Here’s What You’ll Need
        </h2>
        <p className="text-gray-300 mb-6">
          Having the right documents ready helps us prepare and verify your
          return accurately and avoid refund delays.
        </p>

        <div className="text-gray-300 space-y-4 text-left">
          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              1. Identity & Filing Status
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Full legal names (as shown on Social Security cards).</li>
              <li>
                Social Security Numbers / ITINs for you, your spouse, and all
                dependents.
              </li>
              <li>Dates of birth for everyone on the return.</li>
              <li>
                Driver’s license or state ID (number, issue date, expiration).
              </li>
              <li>Current address, phone number, and email.</li>
              <li>
                Prior-year AGI or prior-year PIN (for e-file verification).
              </li>
              <li>
                Filing status (Single, Married Filing Jointly, Married Filing
                Separately, Head of Household, Qualifying Widow(er)).
              </li>
              <li>
                Proof of residency for dependents (if required—school/medical
                records, lease, etc.).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              2. Prior-Year Tax Information
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Last year’s federal and state tax returns.</li>
              <li>Any IRS or state notices received during the year.</li>
              <li>Estimated tax payments made (dates and amounts).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              3. Income Documents (W‑2s & 1099s)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">W‑2:</span> from all employers.
              </li>
              <li>
                <span className="font-semibold">1099‑NEC / 1099‑MISC:</span>{" "}
                self-employment or contractor income.
              </li>
              <li>
                <span className="font-semibold">1099‑K:</span> payment apps,
                online sales, platforms.
              </li>
              <li>
                <span className="font-semibold">1099‑G:</span> unemployment,
                state refunds, or other government payments.
              </li>
              <li>
                <span className="font-semibold">SSA‑1099:</span> Social Security
                benefits.
              </li>
              <li>
                <span className="font-semibold">1099‑R:</span> pensions, IRA,
                and retirement distributions.
              </li>
              <li>
                <span className="font-semibold">Investment forms:</span>{" "}
                1099‑INT, 1099‑DIV, 1099‑B, crypto statements.
              </li>
              <li>
                Rental income and expense records, if you own rental property.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              4. Deductions & Credits
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Childcare provider info (name, EIN/SSN, address, amount paid).
              </li>
              <li>
                Education forms: 1098‑T, 1098‑E, and tuition/fee receipts.
              </li>
              <li>
                Health insurance forms: 1095‑A (Marketplace—required), 1095‑B,
                1095‑C (if available).
              </li>
              <li>
                HSA documents: 5498‑SA, 1099‑SA, and contribution records.
              </li>
              <li>
                Itemized deductions: medical expenses, charitable donations,
                mortgage interest (1098), property taxes, etc.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              5. Business, Rental, or Farm Activity (If Applicable)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Income and expense logs or bookkeeping reports.</li>
              <li>Depreciation schedules and asset purchase/sale details.</li>
              <li>Mileage logs for business use of vehicle.</li>
              <li>1099s issued to contractors.</li>
              <li>Inventory records (if applicable).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              6. State-Specific (Including Arizona)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Arizona Form 140 and related state documents.</li>
              <li>
                Credits for charitable contributions, school credits, foster
                care, etc.
              </li>
              <li>Vehicle registration fees and property tax info.</li>
              <li>Proof of Arizona residency if requested.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              7. Banking & Authorization
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Bank routing and account number for direct deposit.</li>
              <li>Payment method for tax preparation fees.</li>
              <li>Signed e-file authorization (Form 8879).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-400 mb-1">
              8. Final Confirmations
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Review and approval of your tax summary.</li>
              <li>Signed engagement letter (if required).</li>
              <li>
                Confirmation that all income and documents have been provided
                and are accurate.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 mt-6 mb-6">
          If you’re missing something or aren’t sure what applies to you, we can
          walk through it together.
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
