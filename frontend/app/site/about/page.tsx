import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn about GG Tax Preparation Services.",
};

export default function About() {
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
            href="/client/questionnaire"
            className="px-4 py-2 border border-green-400 text-green-400 rounded-lg text-sm font-semibold 
                 hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            Client Questionnaire
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-1">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          About Us
        </h1>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              {/* Team Member Photo */}
              <div className="bg-gray-700 rounded-lg h-64 mb-4 flex items-center justify-center">
                <Image
                  src="/images/Progessional-image-min.png"
                  alt="GG Tax Team"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-4 leading-relaxed">
                GG Tax Services is led by Gisel Garrido, a dedicated tax
                professional committed to serving individuals, families, and
                small businesses with accuracy, integrity, and genuine care.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                What began as a family‑driven mission has grown into a trusted
                tax practice proudly supporting clients throughout Arizona.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Gisel is an IRS‑registered PTIN holder and an Annual Filing
                Season Program (AFSP) certified tax professional with over 5
                years of experience in financial services, she brings a strong
                foundation in tax preparation, client support, and financial
                guidance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-300 leading-relaxed">PTIN: #P00736013</p>
          <p className="text-gray-300 leading-relaxed">
            AFSP Certified Since 2020
          </p>
          <div className="flex-wraps mt-6">
            <Image
              src="/images/image.png"
              alt="AFSP Certification Seal"
              width={200}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      {/* Business Card Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Business Card</h2>
          <p className="text-gray-300 mb-6">
            Download to keep our contact info handy or share it with others.
          </p>
          <a
            href="/images/business-card.png"
            download
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
          >
            Download
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 border border-green-400 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-gray-300 mb-6">
          Let us handle your taxes so you can focus on what matters most.
        </p>
        <a
          href="/client/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
}
