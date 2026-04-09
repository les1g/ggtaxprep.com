import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Services | GG Tax Services",
  description:
    "Tax preparation services, pricing, and free tools to help you file with confidence.",
};

const additionalServices = [
  {
    name: "Transaction and Use Tax (TPT) Account Setup",
    price: "$150",
    desc: "Includes full account setup and ongoing maintenance as long as regular returns are filed. Maintenance includes license renewals and resale certificates (Form 5000) as needed.",
  },
  {
    name: "Resale Certificate",
    price: "$50",
    desc: "Preparation and filing of resale certificate (Form 5000) for your business.",
  },
  {
    name: "Transaction and Use Tax (TPT) Returns – Quarterly",
    price: "$75 / return",
    desc: "Filing of Transaction Privilege & Use Tax returns quarterly. Includes reporting to city, county, and state, plus a summary of sales, tax liability, and financial breakdown.",
  },
  {
    name: "Transaction and Use Tax (TPT) Returns – Monthly",
    price: "$50 / return",
    desc: "Monthly filing of Transaction Privilege & Use Tax returns. Includes full reporting and a summary of sales, tax liability, and financial details.",
  },
  {
    name: "Penalty Abatement",
    price: "$40 / period",
    desc: "Review of late filing or payment penalties to determine eligibility for relief. Approval is not guaranteed and is decided by the IRS or Department of Revenue on a case-by-case basis.",
  },
  {
    name: "Withholding / Payroll Account Setup",
    price: "$300",
    desc: "Setup and maintenance of Withholding and Payroll accounts for your business. This includes registration with the state and IRS, plus ongoing support to ensure compliance with tax laws and regulations.",
  },
  {
    name: "Withholding / Payroll Returns",
    price: "$100 / return",
    desc: "Filing of Withholding and Payroll returns for your business. Includes reporting to the state and IRS, plus a summary of wages, taxes withheld, and financial details.",
  },
  {
    name: "ITIN Application",
    price: "$150",
    desc: "Preparation and filing of ITIN (Individual Taxpayer Identification Number) applications for individuals who are not eligible for a Social Security Number but need to file taxes in the U.S.",
  },
  {
    name: "ITIN Renewal",
    price: "$100",
    desc: "Preparation and filing of ITIN renewal applications for individuals whose ITIN has expired or is set to expire. This service ensures that your ITIN remains valid for tax filing purposes.",
  },
  {
    name: "1099 Preparation",
    price: "$30 / form",
    desc: "Preparation and filing of 1099 forms for your business. This includes reporting of non-employee compensation, interest, dividends, and other types of income to the IRS and recipients.",
  },
  {
    name: "Amended Returns",
    price: "$50-$350 / return",
    desc: "Preparation and filing of amended tax returns to correct errors or update information on previously filed returns. This service includes a review of the original return and guidance on the changes being made. Price varies depending on return type and complexity.",
  },
  {
    name: "Tax Resolution Services",
    price: "Varies",
    desc: "Assistance with tax resolution services for individuals and businesses facing tax issues such as audits, collections, or disputes with the IRS. This service includes representation, negotiation, and guidance to resolve tax problems effectively. Pricing varies based on the complexity of the case and services required.",
  },
  {
    name: "Tax Planning and Consultation",
    price: "Varies",
    desc: "Personalized tax planning and consultation services to help you optimize your tax situation and plan for the future. This includes strategies for minimizing tax liability, maximizing deductions and credits, and guidance on tax-efficient financial decisions. Pricing varies based on the scope of consultation and services provided.",
  },
  {
    name: "Business Entity Formation",
    price: "Varies",
    desc: "Assistance with business entity formation, including LLCs, S-Corps, and C-Corps. This service includes guidance on choosing the right entity type for your business, preparation and filing of formation documents, and ongoing support to ensure compliance with state and federal regulations. Pricing varies based on the complexity of the formation and services required.",
  },
  {
    name: "Estate and Trust Tax Preparation",
    price: "Varies",
    desc: "Preparation of estate and trust tax returns, including Form 1041. This service is designed for individuals responsible for managing estates or trusts and includes guidance on tax implications, deductions, and compliance with IRS regulations. Pricing varies based on the complexity of the estate or trust and services provided.",
  },
  {
    name: "Nonprofit Tax Services",
    price: "Varies",
    desc: "Specialized tax services for nonprofit organizations, including tax-exempt status applications, annual filings, and compliance support. This service helps nonprofits navigate the unique tax requirements and maintain their tax-exempt status. Pricing varies based on the scope of services and complexity of the nonprofit's tax situation.",
  },
  {
    name: "Custom Tax Services",
    price: "Varies",
    desc: "Tailored tax services to meet your specific needs. Whether you have unique tax situations, require specialized advice, or need assistance with complex tax issues, we can provide customized solutions to help you navigate the tax landscape effectively. Pricing varies based on the scope of services and complexity of the case.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Script id="tally-config" strategy="afterInteractive">
        {`window.TallyConfig = { formId: "2EJP5p", popup: {} };`}
      </Script>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <section className="text-center py-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-500 mb-4">Services</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
          A full list of our services and pricing. We specialize in individual
          tax returns, returns for small businesses, and Arizona TPT (sales)
          tax. We also offer a variety of free resources and tools to help you
          understand your tax obligations.
        </p>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
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
                <li>Property Taxes &amp; Mortgage interest (1098)</li>
                <li>Student loan interest (1098-E)</li>
                <li>Student Tuition &amp; Expenses (1098-T)</li>
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
              ✔ Best for: W-2 employees with common credits &amp; deductions
            </div>
          </div>

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
                <li>Capital Gains &amp; Losses</li>
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

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Additional Tax Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition"
            >
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                {service.name}
              </h3>
              <p className="text-2xl font-bold text-white mb-3">
                {service.price}
              </p>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
            <Link
              href="/site/privacy-policy"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/site/terms"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}