import Link from "next/link";

export const metadata = {
  title: "Home | GG Tax Services",
  description: "Professional tax preparation services in Arizona.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-5 leading-tight">
          Taxes Made Simple
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Looking for a reliable tax preparer in Arizona? GG Tax Services
          provides convenient, accurate, and personalized tax preparation for
          individuals and small businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+14805358927"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Call Now
          </a>
          <Link
            href="/client/services"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-6">
            You can have your taxes prepared right from your phone. No hassle,
            no stress, no driving around. Consultations are free of charge, and
            we’re always happy to answer any questions you have about the
            process or your specific situation.
          </p>

          {/* Get Started Button */}
          <div className="mb-10">
            <Link
              href="/client/submission"
              className="inline-block bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-10 rounded-lg transition"
            >
              Get Started
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              {
                step: "1",
                title: "Submit Your Info",
                text: "You can call to schedule or book online, or go straight to our client questionnaire. This lets you know exactly what documents you need to submit.",
              },
              {
                step: "2",
                title: "We Prepare Your Taxes",
                text: "Your return is prepared within 1–2 business days after receiving your information. We’ll contact you before starting your taxes to confirm details and answer any questions.",
              },
              {
                step: "3",
                title: "Review & Approve",
                text: "You don’t pay until you review everything. We provide full transparency and send you a copy of your return before you approve filing.",
              },
              {
                step: "4",
                title: "We File & Support",
                text: "We e-file your return, provide acceptance updates, and remain available until your return is fully processed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-green-400 transition"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-green-500 text-gray-900 font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-green-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Why Clients Choose GG Tax Services
          </h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-10">
            Curious to learn more about us and why we’re the best choice for
            your tax preparation needs? Learn more about our team,
            certifications, and download our business card on our{" "}
            <Link href="/site/about" className="underline text-green-400">
              about page
            </Link>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                text: "Every client receives a tailored tax strategy based on their unique financial situation.",
              },
              {
                title: "Certified Expertise",
                text: "AFSP certified and IRS PTIN registered, ensuring compliance and up-to-date tax knowledge.",
              },
              {
                title: "Maximum Refunds",
                text: "We identify deductions and credits others may miss so you keep more of what you earn.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-700 p-6 rounded-2xl hover:border-green-400 border border-transparent transition"
              >
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              Individual Tax Returns
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Preparation for W-2s, 1099s, investments, and rental income with
              accuracy and maximum deductions.
            </p>
            <Link
              href="/client/services"
              className="text-green-400 font-semibold"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              Small Business Taxes
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Tax services for sole proprietors, LLCs, and S-corps with a focus
              on reducing liability.
            </p>
            <Link
              href="/client/services"
              className="text-green-400 font-semibold"
            >
              Learn more →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/client/services"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-t border-green-400/40 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Schedule a free consultation and get peace of mind today.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-10 rounded-lg transition text-lg"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
}
