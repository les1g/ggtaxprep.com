export const metadata = {
  title: "About GG Tax Services",
  description: "Learn about GG Tax Preparation Services and our team of certified professionals",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">About GG Tax Services</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At GG Tax Preparation Services, we believe that tax preparation doesn't have to be complicated.
          Our mission is to provide honest, reliable, and professional tax services to individuals and
          small business owners in our community. With years of experience and a commitment to excellence,
          we help our clients maximize their refunds and minimize their tax burden.
        </p>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Accuracy</h3>
            <p className="text-gray-300">
              We meticulously review every detail to ensure your tax return is accurate and complete.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Integrity</h3>
            <p className="text-gray-300">
              We maintain the highest ethical standards and always put your interests first.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Reliability</h3>
            <p className="text-gray-300">
              You can count on us to meet deadlines and be there when you need us most.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Meet Our Team</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              {/* Team Member Photo */}
              <div className="bg-gray-700 rounded-lg h-64 mb-4 flex items-center justify-center">
                <img src="logo.png" alt="GG Tax Team" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-green-400 mb-2">GG Tax Preparation Services</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our team brings years of combined experience in tax preparation, accounting, and financial services.
                We stay up-to-date with the latest tax laws and regulations to ensure our clients receive the most
                current and beneficial tax strategies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in working with self-employed individuals, small business owners, and families to
                navigate complex tax situations and optimize their financial outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Professional Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AFSP Certification */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">AFSP Certification</h3>
            <p className="text-gray-300 mb-4">
              We are certified through the Academy of Financial Service Professionals, demonstrating our commitment
              to professional development and continuing education in tax and financial services.
            </p>
            <div className="bg-gray-700 rounded p-4 text-center">
              <img src="/images/afsp-cert.png" alt="AFSP Certification" className="w-full h-auto rounded" />
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Verified Certificate of Completion</p>
          </div>

          {/* PTIN Information */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">IRS PTIN Holder</h3>
            <p className="text-gray-300 mb-4">
              As an IRS Preparer Tax Identification Number (PTIN) holder, we are registered with the IRS and subject
              to their regulations and quality standards. This ensures our clients receive professional, compliant
              tax preparation services.
            </p>
            <div className="bg-gray-700 rounded p-6">
              <p className="text-white font-semibold text-center mb-2">IRS PTIN</p>
              <p className="text-green-400 text-center font-bold text-lg">Pxxxx0192</p>
              <p className="text-xs text-gray-400 text-center mt-4">IRS Registered Tax Preparer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Verify Our Credentials (IRS Directory) */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Verify Our Credentials</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            You can confirm our active PTIN in the official IRS Preparer Directory.
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Open the IRS Preparer Directory.</li>
            <li>Search by our name or ZIP code.</li>
            <li>Confirm our active PTIN listing.</li>
          </ol>
          <a
            href="https://irs.treasury.gov/rpo/rpo.jsf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Open IRS Preparer Directory
          </a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Why Choose GG Tax Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Certified Professionals</h4>
              <p className="text-gray-300">Highly trained and credentialed tax professionals</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Personalized Service</h4>
              <p className="text-gray-300">Customized solutions tailored to your situation</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Maximum Refunds</h4>
              <p className="text-gray-300">We identify deductions and credits you qualify for</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Competitive Pricing</h4>
              <p className="text-gray-300">Transparent pricing with no hidden fees</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Confidentiality</h4>
              <p className="text-gray-300">Your information is secure and protected</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-green-400 font-bold text-2xl flex-shrink-0">✓</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Year-Round Support</h4>
              <p className="text-gray-300">We're here to answer questions anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-green-400 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h2>
        <p className="text-gray-300 mb-6">
          Let us handle your taxes so you can focus on what matters most.
        </p>
        <a
          href="/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
        >
          Schedule Your Consultation Today
        </a>
      </div>
    </div>
  );
}