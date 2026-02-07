import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Home Office Deduction Guide - GG Tax Services",
  description:
    "Learn how to calculate and claim your home office deduction correctly.",
};

export default function HomeOfficeDeduction() {
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
            Home Office Deduction Guide
          </h1>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-gray-400">6 min read</span>
            <span className="text-xs text-gray-400">February 5, 2025</span>
          </div>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              Working from home? You may qualify for a home office deduction.
              With more people working remotely, this deduction has become
              increasingly valuable. Here&apos;s what you need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Requirements
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your home office must meet these criteria to qualify:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Used regularly and exclusively for business</li>
              <li>Your principal place of business</li>
              <li>Where you meet with clients or customers, OR</li>
              <li>A separate structure not attached to your home</li>
            </ul>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <strong>Note:</strong> You cannot use this deduction if you work
                from a shared space or occasionally work from home.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Two Calculation Methods
            </h2>
            <div className="space-y-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Simplified Method
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>$5 per square foot</strong>, up to 300 sq ft (maximum
                  $1,500/year)
                </p>
                <p className="text-gray-300 text-sm">
                  Easier to calculate and less IRS scrutiny. Good for most home
                  office situations.
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Regular Method
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Calculate actual expenses and allocate to your office space
                </p>
                <p className="text-gray-300 text-sm">
                  More complex but can yield higher deductions for larger
                  offices.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Deductible Expenses (Regular Method)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Direct expenses (100% deductible):
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Office furniture and equipment</li>
              <li>Office supplies</li>
              <li>Equipment repairs (desk, chair, shelving)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Indirect expenses (prorated based on office size):
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Mortgage interest or rent</li>
              <li>Utilities</li>
              <li>Internet and phone</li>
              <li>Home insurance</li>
              <li>Repairs and maintenance</li>
              <li>Depreciation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Example Calculation
            </h2>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">
                <strong>Home details:</strong> 2,000 sq ft home, 200 sq ft home
                office (10%)
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Annual mortgage interest: $8,000 × 10% = $800
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Annual utilities: $2,400 × 10% = $240
              </p>
              <p className="text-gray-300 text-sm mb-2">
                Office furniture/supplies: $500
              </p>
              <p className="text-gray-300 text-sm font-semibold">
                <strong>Total deduction: $1,540</strong>
              </p>
            </div>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Maximize Your Home Office Deduction
          </h2>
          <p className="text-gray-300 mb-6">
            We can help you determine which method works best for your situation
            and ensure all expenses are properly documented.
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
