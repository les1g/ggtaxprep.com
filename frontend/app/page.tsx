export const metadata = {
  title: "GG Tax Services - Professional Tax Preparation in Scottsdale, AZ",
  description: "Expert tax preparation services for individuals and small businesses. AFSP certified, IRS PTIN registered.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-6 leading-tight">
              Taxes Made Simple
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let GG Tax Services handle the complexity while you focus on growing your business. 
              We're committed to maximizing your refund and minimizing your tax liability with personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/scheduling"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                View Our Services
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center border border-gray-700">
            <img 
              src="/images/hero-image.jpg" 
              alt="Tax preparation consultation" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Clients Choose GG Tax Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">Personalized Approach</h3>
              <p className="text-gray-300">
                We don't use one-size-fits-all solutions. Every client gets a customized strategy 
                based on their unique financial situation and goals.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">Certified Expertise</h3>
              <p className="text-gray-300">
                AFSP certified and IRS PTIN registered. We stay current with tax law changes 
                to ensure you receive the most beneficial guidance.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg hover:border-green-400 border-2 border-transparent transition-colors">
              <h3 className="text-xl font-bold text-green-400 mb-3">Maximum Refunds</h3>
              <p className="text-gray-300">
                We identify deductions and credits you might miss, ensuring you keep more of 
                what you earn and get the refund you deserve.
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
            <h3 className="text-2xl font-bold text-green-400 mb-4">Individual Tax Returns</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive tax preparation for salaried employees, freelancers, and self-employed individuals. 
              We ensure you claim every deduction you're entitled to.
            </p>
            <a href="/services" className="text-green-400 hover:text-green-300 font-semibold">Learn more →</a>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-colors">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Small Business Taxes</h3>
            <p className="text-gray-300 mb-4">
              Specialized tax preparation for small business owners. We help optimize your business 
              structure and identify tax-saving opportunities throughout the year.
            </p>
            <a href="/services" className="text-green-400 hover:text-green-300 font-semibold">Learn more →</a>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/services"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-t border-b border-green-400/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Simplify Your Taxes?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation with our tax professionals today.
          </p>
          <a
            href="/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-lg"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}