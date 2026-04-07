import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | GG Tax Services",
  description: "Learn about GG Tax Preparation Services.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          About
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Professional, family-driven tax preparation built on trust,
          transparency, and care.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-6">
            You can have your taxes prepared right from your phone or you can
            come in person. Most Consultations are free of charge, and we’re
            always happy to answer any questions you have about the process or
            your specific situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              {
                step: "1",
                title: "Submit Your Info",
                text: "You can call, email, text, or book online to get started. We’ll let you know exactly which documents you need to provide.",
              },
              {
                step: "2",
                title: "We Prepare Your Taxes",
                text: "Your return is usually prepared within 1–2 business days after receiving your information. We’ll contact you before starting to confirm details.",
              },
              {
                step: "3",
                title: "Review & Approve",
                text: "You don’t pay until you review everything. We provide full transparency and send you a copy before you approve filing.",
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

      {/* About / Team */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <Image
                src="/images/Progessional-image-min.png"
                alt="GG Tax Team"
                width={400}
                height={400}
                className="rounded-xl object-cover"
                priority
              />
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
              <p>
                GG Tax Services is led by Gisel Garrido, a dedicated tax
                professional committed to serving individuals, families, and
                small businesses with accuracy, integrity, and genuine care.
              </p>
              <p>
                What began as a family-driven mission has grown into a trusted
                tax practice proudly supporting clients throughout Arizona.
              </p>
              <p>
                As an IRS-registered PTIN holder and AFSP-certified tax
                professional with over 5 years of financial services experience,
                Gisel provides confident guidance tailored to each client’s
                unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Certifications & Credentials
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-green-400 font-semibold">PTIN:</span>{" "}
                #P0*****13
              </p>
              <p>
                <span className="text-green-400 font-semibold">
                  AFSP Certified:
                </span>{" "}
                Since 2020
              </p>
            </div>

            <Image
              src="/images/image.png"
              alt="AFSP Certification Seal"
              width={180}
              height={180}
            />
          </div>
        </div>
      </section>

      {/* Business Card */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Business Card</h2>
          <p className="text-gray-300 mb-6">
            Keep our contact information handy or share it with someone who
            needs trusted tax help.
          </p>

          <a
            href="/images/business-card-ggtax.png"
            download
            className="inline-block bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
          >
            Download Business Card
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-400 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-6">
            Let us handle your taxes so you can focus on what matters most.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Schedule
          </Link>
        </div>
      </section>
    </div>
  );
}
