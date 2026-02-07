import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Professional tax preparation services in Arizona.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mini Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/tools/refund"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Track Refund
          </Link>

          <Link
            href="/client/secure-send"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Upload Documents
          </Link>

          <Link
            href="/client/submission"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Client Questionnaire
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 leading-tight">
            Taxes Made Simple
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Searching for a tax preparer in Arizona? Look no further! At GG Tax
            Services, we specialize in convenient tax preparation for
            individuals and businesses in Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14805358927"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Call Now
            </a>
            <a
              href="/client/services"
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why Clients Choose GG Tax Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">
                Personalized Approach
              </h3>
              <p className="text-gray-300">
                Every client gets a customized strategy based on their unique
                financial situation and goals. We take the time to understand
                your needs and tailor our services to maximize your benefits.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">
                Certified Expertise
              </h3>
              <p className="text-gray-300">
                AFSP certified and IRS PTIN registered. We stay current with tax
                law changes to ensure you receive the most beneficial guidance.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">
                Maximum Refunds
              </h3>
              <p className="text-gray-300">
                We identify deductions and credits you might miss, ensuring you
                keep more of what you earn and get the refund you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-colors">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Individual Tax Returns
            </h3>
            <p className="text-gray-300 mb-4">
              Comprehensive tax preparation for employees, freelancers, and
              self-employed individuals. We ensure you take advantage of all
              eligible deductions and credits to maximize your refund.
            </p>
            <a
              href="/client/services"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-colors">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Small Business Taxes
            </h3>
            <p className="text-gray-300 mb-4">
              Specialized tax preparation for small business owners. We help
              optimize your business structure and identify tax-saving
              opportunities throughout the year.
            </p>
            <a
              href="/client/services"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Learn more →
            </a>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/client/services"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-t border-b border-green-400/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation with our tax professionals today.
          </p>
          <a
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-lg"
          >
            Schedule Now
          </a>
        </div>
      </section>
    </div>
  );
}
