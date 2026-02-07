"use client";

import { useState } from "react";

export default function TaxChecklist() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const checklist = {
    "Personal Information": {
      items: [
        "Your social security number or tax ID number",
        "Your spouse's full name, social security number or tax ID number, and date of birth",
        "Identity Protection PIN (if issued by IRS)",
        "Routing and account numbers for direct deposit or payment",
        "Foreign reporting and residency information (if applicable)",
      ],
    },
    "Dependent Information": {
      items: [
        "Dates of birth and social security numbers for all dependents",
        "Childcare provider's tax ID number (if applicable)",
        "Income of dependents and other adults in household",
        "Form 8332 (if noncustodial parent claiming child)",
      ],
    },
    "Employment Income": {
      items: [
        "Form W-2 from all employers",
        "1099-G (Unemployment benefits)",
        "1099-NEC or 1099-MISC (contractor income)",
        "Schedule K-1 (partnership, S-corp, trust income)",
      ],
    },
    "Self-Employment & Business Income": {
      items: [
        "Records of all business expenses (receipts, credit card statements, check registers)",
        "Business-use asset information (cost, date placed in service)",
        "Home office information (if applicable)",
        "Estimated tax payment records (Form 1040-ES)",
        "Schedule C documentation",
      ],
    },
    "Rental Income": {
      items: [
        "Rental income records",
        "Records of all rental expenses",
        "Rental asset information (cost, date placed in service)",
        "Depreciation records",
        "Estimated tax payment records (Form 1040-ES)",
      ],
    },
    "Retirement & Investment Income": {
      items: [
        "Form 1099-R (pension/IRA/annuity income)",
        "Form 1099-INT (interest income)",
        "Form 1099-DIV (dividend income)",
        "Form 1099-OID (original issue discount)",
        "Form 1099-B (sales of stocks or securities)",
        "Form 1099-S (real estate transaction proceeds)",
        "Traditional IRA basis documentation",
        "Dates of acquisition and cost basis for property sold",
        "Estimated tax payment records (Form 1040-ES)",
      ],
    },
    "Other Income Sources": {
      items: [
        "Form 1099-SA (HSA/Long-term care reimbursements)",
        "Form 1099-K (payment card transactions)",
        "W-2G (gambling income)",
        "Cryptocurrency transaction records",
        "Jury duty payment records",
        "Hobby income and expense records",
        "Prize and award documentation",
        "Trust income documentation",
        "Social Security/RRB income (SSA-1099, RRB-1099)",
        "Royalty income (1099-MISC)",
      ],
    },
    "Home & Vehicle Ownership": {
      items: [
        "Form 1098 (mortgage interest statements)",
        "Real estate property tax records",
        "Personal property tax records",
        "Energy-saving home improvement receipts (solar panels, etc.)",
        "Electric vehicle purchase documentation",
        "Vehicle sales tax invoice",
        "Form 1098-E (student loan interest)",
      ],
    },
    "Charitable Donations": {
      items: [
        "Cash donation receipts to charitable organizations",
        "Records of non-cash charitable donations",
        "Charitable mileage records",
        "House of worship donation records",
        "School donation documentation",
      ],
    },
    "Medical & Healthcare Expenses": {
      items: [
        "Medical and dental expense receipts",
        "Health insurance premium payments",
        "Form 1095-A (Marketplace insurance)",
        "Qualified health insurance premium documentation",
        "Charitable medical mileage records",
      ],
    },
    "Childcare Expenses": {
      items: [
        "Day care or family care provider records",
        "Baby-sitter payment records (for children under 13)",
        "Provider's tax ID number",
        "Dependent care FSA documentation from employer",
      ],
    },
    "Educational Expenses": {
      items: [
        "Form 1098-T (educational institution)",
        "Itemized educational expense receipts",
        "Scholarship or fellowship documentation",
        "Form 1098-E (student loan interest)",
        "K-12 educator classroom expense receipts",
      ],
    },
    "Retirement & Savings Contributions": {
      items: [
        "Form 5498-SA (HSA contributions)",
        "Form 5498 (IRA contributions)",
        "Form 5498-QA (ABLE account)",
        "Form 5498-ESA (Education Savings Account)",
        "Other 5498 series forms",
      ],
    },
    "State & Local Taxes": {
      items: [
        "State and local income tax paid records",
        "Sales tax paid documentation",
        "State tax refund from prior year",
        "Vehicle property tax invoices",
        "City/county residency records (if applicable)",
      ],
    },
    "Disaster Relief": {
      items: [
        "Property loss documentation (appraisals, cleanup costs)",
        "Repair and rebuilding cost records",
        "Insurance reimbursement statements",
        "FEMA assistance documentation",
        "Federal disaster declaration verification",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Tax Document Checklist
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Use this comprehensive checklist to gather all the documents you'll need for your tax preparation appointment.
            Not every item will apply to your situation—check only what's relevant to you.
          </p>
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/50 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong>Pro Tip:</strong> Organize your documents by category before your appointment. 
              This helps us work more efficiently and may save you time and money.
            </p>
          </div>
        </div>

        {/* Checklist Sections */}
        <div className="space-y-4 mb-12">
          {Object.entries(checklist).map(([section, data]) => (
            <div key={section} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl"></span>
                  <h2 className="text-xl font-bold text-green-400">{section}</h2>
                </div>
                <span className={`text-2xl text-gray-400 transition-transform ${expandedSections.includes(section) ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {/* Section Items */}
              {expandedSections.includes(section) && (
                <div className="px-6 py-4 bg-gray-700/50 border-t border-gray-600">
                  <ul className="space-y-3">
                    {data.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-gray-600 text-green-500 cursor-pointer flex-shrink-0"
                          aria-label={`Check off ${item}`}
                        />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Print/Download Section */}
        <div className="bg-gray-800 border border-green-400 rounded-lg p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Save This Checklist</h3>
          <p className="text-gray-300 mb-6">
            Print or download this checklist to take with you when gathering your tax documents.
          </p>
          <button
            onClick={() => window.print()}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Print Checklist
          </button>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to File Your Taxes?</h3>
          <p className="text-gray-300 mb-6">
            Schedule a consultation with our tax professionals to get started.
          </p>
          <a
            href="/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}