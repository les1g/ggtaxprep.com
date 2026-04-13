import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Home | GG Tax Services",
  description: "Professional tax preparation services in Arizona.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-5 leading-tight">
          GG Tax Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We offer accurate, reliable, and convenient tax services for
          individuals and small businesses. Flexible scheduling, clear
          communication, and experience you can trust.
        </p>

        <div className="space-x-4 inline-flex">
          <Link
            href="/client/services"
            className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Clients Choose Us
          </h2>

          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            Learn more about our background, certifications, and experience on
            our{" "}
            <Link href="/site/about" className="underline text-green-500">
              About Page
            </Link>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Scheduling",
                text: "Want to skip the line? Fill out our intake form online and get your document checklist right away. You can also schedule an appointment in-person or over the phone.",
              },
              {
                title: "Experienced & Certified",
                text: "With over 5 years of experience working at the Arizona Department of Revenue, AFSP certified, and IRS PTIN registered, we bring expertise you can trust.",
              },
              {
                title: "Clear Communication",
                text: "We keep you updated every step of the way with fast, friendly communication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-700 p-6 rounded-2xl hover:border-green-500 border border-transparent transition"
              >
                <h3 className="text-lg font-bold text-green-500 mb-3">
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

      {/* STARTING PRICES */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mb-12">
          These are some of the most common services we provide. For a full list
          of services, pricing, and what is included, please visit our{" "}
          <Link href="/client/services" className="underline text-green-500">
            Services Page
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Simple Returns",
              price: "$150",
              desc: "Suitable for most clients with W‑2 income, dependents, or other common tax situations. Free estimates available.",
            },
            {
              title: "Complex Returns",
              price: "$350",
              desc: "Ideal for clients with self‑employment income, rental income, gig work, or other advanced tax situations.",
            },
            {
              title: "Arizona TPT Services",
              price: "$50–$150",
              desc: "Whether you need a TPT license, aren’t sure if you need one, or already have one and need help filing, we can assist.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition"
            >
              <h3 className="text-xl font-bold text-green-500 mb-2">
                {item.title}
              </h3>
              <p className="text-2xl font-bold mb-2">{item.price}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-6 italic">
          Free estimates available for simple returns. Complex returns may
          require a deposit. An estimate is the amount you can expect to owe or
          receive as a refund, based on the information you provide.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marlene R.",
                message:
                  "Got my refund super fast and was able to get everything done over the phone. Reasonable prices too",
              },
              {
                name: "Seth B.",
                message:
                  "After my previous tax guy retired Gisele made the entire process easy! Thanks again.",
              },
              {
                name: "Cindy S.",
                message:
                  "Highly recommend! Gisel knows her stuff and is very helpful.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-green-500 transition"
              >
                <p className="text-gray-300 text-sm mb-4 leading-relaxed italic">
                  “{testimonial.message}”
                </p>
                <p className="text-green-500 font-semibold text-sm">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-10">How Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              {
                step: "1",
                title: "Interview",
                text: "We start with a tax interview. You can fill our intake form online or schedule an interview. During the interview, we ask questions about your income, expenses, and tax situation to determine what forms you need and how to maximize your refund or minimize your tax liability.",
              },
              {
                step: "2",
                title: "Documents & Preparation",
                text: "We will guide you on what documents to send. Once you provide them, we will prepare your return accurately and efficiently. We will keep you updated throughout the process and let you know if we need anything else from you.",
              },
              {
                step: "3",
                title: "Review & Approve",
                text: "You review the completed return and approve it. You pay your invoice once you approve the return.",
              },
              {
                step: "4",
                title: "Filing & Follow‑Up",
                text: "We file your return and guide you through refunds or payments.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-green-500 transition"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-green-500 text-gray-900 font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-green-500 mb-2">
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

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "How do I schedule an appointment?",
              a: "You can schedule online or call us at (480) 535-8927 to schedule over the phone.",
            },
            {
              q: "Do you offer virtual appointments?",
              a: "Yes, we do appointments over the phone if it is more convienent you can also fill out our intake form and get your document checklist right away.",
            },
            {
              q: "How do I send documents?",
              a: "You can send documents by going to the client portal and clicking the upload button (Dropbox), email, or drop off in person.",
            },
            {
              q: "Do you offer free estimates?",
              a: "Yes simple returns qualify for free estimates. Simple returns are usually those with just W-2 income. Complex returns may require a deposit. Complex returns are usually those with self-employment income, rental income, etc.",
            },
            {
              q: "How long does it take?",
              a: "Turnaround time depends on the season and complexity, but we communicate with you throughout the process.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-lg font-bold text-green-500 mb-2">
                {item.q}
              </h3>
              <p className="text-gray-300 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
            <a
              href="/site/privacy-policy"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/site/terms"
              className="text-green-500 hover:text-green-300 transition underline"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
