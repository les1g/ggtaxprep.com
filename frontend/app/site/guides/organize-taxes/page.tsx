import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "How to Organize Your Taxes - GG Tax Services",
  description:
    "Step-by-step guide to organizing your documents and information for tax season.",
};

export default function OrganizeTaxes() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/site/guides"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            How to Organize Your Taxes
          </h1>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-gray-400">5 min read</span>
            <span className="text-xs text-gray-400">January 15, 2025</span>
          </div>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              Organizing your taxes doesn&apos;t have to be stressful. With a
              simple system and a few hours of your time, you can gather
              everything you need for a smooth filing experience. This guide
              walks you through the process step-by-step so you&apos;re ready
              when tax season arrives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Step 1: Create a Dedicated Folder
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Start by creating a physical or digital folder labeled with the
              current tax year (e.g., &quot;2025 Taxes&quot;). Keep all
              tax-related documents in one place throughout the year. This makes
              it much easier to find what you need when it&apos;s time to file.
            </p>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 mb-4">
              <p className="text-gray-300 text-sm">
                <strong>Pro Tip:</strong> If you prefer digital, use cloud
                storage like Google Drive or Dropbox. This way your documents
                are backed up and accessible from anywhere.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Step 2: Gather Your Documents
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Identify what you need. Common documents include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>
                <strong>W-2 forms</strong> from all employers
              </li>
              <li>
                <strong>1099 forms</strong> (1099-NEC, 1099-MISC, 1099-INT,
                1099-DIV, etc.)
              </li>
              <li>
                <strong>Receipts and expense records</strong> for deductions
              </li>
              <li>
                <strong>Mortgage statements</strong> and property tax records
              </li>
              <li>
                <strong>Charitable donation receipts</strong>
              </li>
              <li>
                <strong>Medical and dental expense receipts</strong>
              </li>
              <li>
                <strong>Business expense documentation</strong>
              </li>
              <li>
                <strong>Investment statements</strong> showing gains/losses
              </li>
            </ul>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong>Reminder:</strong> Your employers and financial
                institutions typically send forms by January 31st. Request
                copies immediately if you&apos;re missing any documents.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Step 3: Organize by Category
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Group documents into logical categories. This makes it easier to
              enter information into your tax return:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Income</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• W-2 forms</li>
                  <li>• 1099 forms</li>
                  <li>• Investment income</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Deductions
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Charitable donations</li>
                  <li>• Medical expenses</li>
                  <li>• Business expenses</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Step 4: Set Reminders
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mark your calendar for key deadlines:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>January 31st</strong> – Most W-2s and 1099s arrive
              </li>
              <li>
                <strong>February 1st</strong> – Start requesting missing
                documents
              </li>
              <li>
                <strong>Mid-February</strong> – Begin organizing documents
              </li>
              <li>
                <strong>April 15th</strong> – Federal tax deadline
              </li>
            </ul>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Professional Help?
          </h2>
          <p className="text-gray-300 mb-6">
            Our tax professionals can provide personalized guidance.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
