import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Free Resources | GG Tax Services",
  description:
    "Explore our collection of free tax resources and tools to help you understand your tax obligations, maximize deductions, and file with confidence. From refund tracking to tax calculators, we have everything you need to navigate tax season successfully.",
};

export default function Resources() {
  const resources = [
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
      {/* Header */}
      <section className="text-center py-10 bg-gray-800">
        <Script id="tally-config" strategy="beforeInteractive">
          {`window.TallyConfig = {
  "formId": "2EJP5p",
  "popup": {}
};`}
        </Script>

        <Script async src="https://tally.so/widgets/embed.js"></Script>
        <h2 className="text-4xl font-semibold text-green-500 mb-4">
          Client Portal
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
          You can submit your client intake form, securely upload your tax
          documents, pay your invoice, track the status of your refund, and
          access a variety of free resources to help you navigate tax season
          with confidence.
        </p>
        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="https://tally.so/r/RG5oAd"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Submit Intake Form
          </Link>
          <Link
            href="https://www.dropbox.com/request/PaAuMkajFAzzodp6KWRC"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Upload Documents
          </Link>
          <Link
            href="https://tally.so/r/2EJP5p"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Make A Payment
          </Link>
          <Link
            href="/tools/refund"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Check Refund Status
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section className="py-9 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) =>
            resource.external ? (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition"
              >
                <h3 className="text-xl font-bold text-green-500 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </a>
            ) : (
              <Link
                key={index}
                href={resource.link}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition block"
              >
                <h3 className="text-xl font-bold text-green-500 mb-2">
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
          <a href="/site/privacy-policy" className="text-green-500 underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/site/terms" className="text-green-500 underline">
            Terms of Service
          </a>
        </p>
      </div>
    </main>
  );
}
