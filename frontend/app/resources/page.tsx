import Link from "next/link";

export const metadata = {
  title: "Resources",
  description:
    "Upload your tax documents and access free tax resources and tools.",
};

type Resource = {
  title: string;
  description: string;
  icon: string;
  link: string;
  external?: boolean;
};

export default function Resources() {
  const resources: Resource[] = [
    {
      title: "Deductions & Credits Checklist",
      description:
        "See which federal and Arizona deductions/credits you may qualify for",
      icon: "🗎",
      link: "/deductions",
    },
    {
      title: "Tax Document Checklist",
      description:
        "Comprehensive list of documents to gather for your tax prep",
      icon: "🗎",
      link: "/checklist",
    },
    {
      title: "W-4 Tax Calculator",
      description: "Use IRS and Arizona calculators with step-by-step guidance",
      icon: "🗎",
      link: "/tax-calculator",
    },
    {
      title: "Estimated Payments Guide",
      description: "When and how to make quarterly estimated tax payments",
      icon: "🗎",
      link: "/estimated-payments",
    },
    {
      title: "IRS Forms & Publications",
      description: "Direct access to IRS forms, instructions, and publications",
      icon: "🗎",
      link: "https://www.irs.gov/forms-instructions",
      external: true,
    },
    {
      title: "Track Your Refund",
      description:
        "Check the status of your federal and Arizona state tax refunds",
      icon: "🗎",
      link: "/refund",
    },
    {
      title: "Tax Terms Glossary",
      description: "Common tax terms explained in plain English",
      icon: "🗎",
      link: "/glossary",
    },
    {
      title: "Newsletter",
      description:
        "Subscribe to receive tax tips, updates, and deadline reminders.",
      icon: "🗎",
      link: "/newsletter",
    },
    {
      title: "Tax Guides",
      description:
        "Step-by-step guides on various tax topics to help you file with confidence.",
      icon: "🗎",
      link: "/guides",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Resources
        </h1>
        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          Access free tax resources, tools, and securely upload your tax
          documents.
        </p>

        {/* Refund Status Section */}
        <section className="mb-12 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Upload Documents
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Use our secure document upload portal to send us your tax documents
            safely and conveniently online. Please do not upload documents
            without scheduling an appointment first.
          </p>
          <Link
            href="/secure-send"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
          >
            File Upload
          </Link>
        </section>

        {/* Resources Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Available Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              if (resource.external) {
                return (
                  <a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all"
                  >
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {resource.description}
                    </p>
                  </a>
                );
              }
              return (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all block"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Additional Help */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            Other Ways We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Ask Our Experts
              </h3>
              <p className="text-gray-300 mb-4">
                Have a tax question? Reach out directly. Our team is happy to
                provide guidance.
              </p>
              <Link
                href="tel:+4805358927"
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                Contact us →
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Learn More
              </h3>
              <p className="text-gray-300 mb-4">
                Check out our comprehensive guides and educational resources on
                various tax topics.
              </p>
              <Link
                href="/guides"
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                View guides →
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Newsletter
              </h3>
              <p className="text-gray-300 mb-4">
                Stay informed with tax tips, updates, and important deadlines.
              </p>
              <a
                href="/newsletter"
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                Newsletter →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for Professional Help?
          </h2>
          <p className="text-gray-300 mb-6">
            Resources are helpful, but sometimes you need expert guidance.
            Schedule a consultation with one of our tax professionals.
          </p>
          <Link
            href="/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule Now
          </Link>
        </section>
      </div>
    </div>
  );
}
