import Link from "next/link";
import Image from "next/image";

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
            href="#payment-options"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Payment Options
          </Link>
          <Link
            href="/tools/refund"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            Check Refund Status
          </Link>
        </div>
      </section>

      {/* Payment options */}
      <section
        id="payment-options"
        className="scroll-mt-8 px-6 py-10 max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-green-500 mb-3">
            Accepted Payment Methods
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the payment method that works best for you. Please pay the
            amount shown on your invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold text-green-500 mb-3">Zelle</h3>
            <p className="text-gray-300 mb-4">
              Send your payment using Zelle. Add us as a recipient with this
              email address, then send the amount shown on your invoice.
            </p>
            <a
              href="mailto:info@ggtaxprep.com"
              className="text-white underline underline-offset-4 font-semibold"
            >
              info@ggtaxprep.com
            </a>
            <ol className="list-decimal list-inside text-gray-300 mt-4 space-y-2">
              <li>Open Zelle in your banking app.</li>
              <li>Add info@ggtaxprep.com as the recipient.</li>
              <li>Send the amount due on your invoice.</li>
            </ol>
            <Image
              src="/images/ZelleQR.png"
              alt="QR code for Zelle payment"
              width={200}
              height={200}
              className="mt-5 w-40 h-40 self-center rounded bg-white p-2"
            />
          </article>

          <article className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-500 mb-3">Cash</h3>
            <p className="text-gray-300 mb-4">
              Cash payments can be made in person at our office:
            </p>
            <address className="text-white not-italic font-semibold">
              4015 N 15th Ave
              <br />
              Phoenix, AZ 85018
            </address>
          </article>

          <article className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-500 mb-3">Check</h3>
            <p className="text-gray-300">
              Make your check payable to{" "}
              <strong className="text-white">GG Tax Services</strong>.
            </p>
          </article>

          <article className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold text-green-500 mb-3">
              Credit or Debit Card &amp; Digital Wallets
            </h3>
            <p className="text-gray-300 mb-4">
              Pay online by credit card, debit card, Apple Pay, or Google Pay.
              A processing fee applies; the fee will be calculated when you
              continue to the payment page.
            </p>
            <a
              href="https://tally.so/r/2EJP5p"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex justify-center rounded-lg bg-green-600 px-5 py-3 font-bold text-white transition-colors hover:bg-green-500"
            >
              Continue to Online Payment
            </a>
          </article>
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
