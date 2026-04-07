import Link from "next/link";
import GoogleScheduler from "./client/scheduling/GoogleScheduler";

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
          We offer personalized, accurate, and secure tax services for individuals and small businesses.
          Flexible scheduling, clear communication, and experience you can trust.
        </p>

        <div className="space-x-4 inline-flex">
          <Link
            href="/client/services"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition"
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
            Learn more about our background, certifications, and experience on our{" "}
            <Link href="/site/about" className="underline text-green-400">
              About Page
            </Link>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Scheduling",
                text: "You can schedule an appointment in-person or over the phone. We work around your schedule to make the process as easy as possible.",
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

      {/* STARTING PRICES */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mb-12">
          These are some of the most common services we provide. For a full list of services, pricing, and what is included, please visit our{" "}
          <Link href="/client/services" className="underline text-green-400">
            Services Page
          </Link>.
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
              desc: "Ideal for clients with self‑employment income, rental income, gig work, or other advanced tax situations. Deposit for an estimate may be required.",
            },
            {
              title: "Arizona TPT Services",
              price: "$50–$150",
              desc: "Whether you need a TPT license, aren’t sure if you need one, or already have one and need help filing, we can assist.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition"
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {item.title}
              </h3>
              <p className="text-2xl font-bold mb-2">{item.price}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-6 italic">
          Free estimates available for simple returns. Complex returns may require a deposit. An estimate is the amount you can expect to owe or receive as a refund, based on the information you provide. The final amount may differ based on additional information or changes to your return.
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-800 py-14">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            How Our Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1. Interview", text: "We start with a phone or in‑person tax interview." },
              { step: "2. Documents", text: "You send your documents by email, text, or drop‑off." },
              { step: "3. Preparation", text: "We prepare your return accurately and efficiently." },
              { step: "4. Review", text: "You review the completed return and approve it." },
              { step: "5. Payment", text: "You pay your invoice once you approve the return." },
              { step: "6. Filing & Follow‑Up", text: "We file your return and guide you through refunds or payments." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-green-400 mb-2">{item.step}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Who We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Arizona residents",
            "Non‑residents & part‑year residents",
            "Self‑employed & gig workers",
            "Rental property owners",
            "Small business owners",
            "Students & first‑time filers",
          ].map((group) => (
            <div
              key={group}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition text-center"
            >
              <p className="text-gray-300">{group}</p>
            </div>
          ))}
        </div>
      </section>


      {/* MEET THE PREPARER */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Meet Your Tax Preparer
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          With experience working directly at the Arizona Department of Revenue, AFSP certification,
          and an active IRS PTIN, you get knowledgeable, reliable, and friendly service from someone
          who understands the tax system from the inside. Learn more about our background and experience on our{" "}
          <Link href="/site/about" className="underline text-green-400">
            About Page
          </Link>
        </p>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Client Testimonials</h2>
          <p className="text-gray-400 mb-6">Testimonials coming soon.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: "How do I schedule an appointment?",
              a: "You can schedule online using our Google appointment system below.",
            },
            {
              q: "Do you offer virtual appointments?",
              a: "Yes — phone, virtual, and in‑person appointments are all available.",
            },
            {
              q: "How do I send documents?",
              a: "You can send documents by email, text message, or drop them off in person.",
            },
            {
              q: "Do you offer free estimates?",
              a: "Yes — simple returns qualify for free estimates. Complex returns may require a deposit.",
            },
            {
              q: "How long does it take?",
              a: "Turnaround time depends on the season and complexity, but we communicate with you throughout the process.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-2">{item.q}</h3>
              <p className="text-gray-300 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA WITH GOOGLE SCHEDULER */}
      <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-t border-green-400/40 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book your tax interview now — phone, virtual, or in‑person.
          </p>

          {/* Google Scheduler Button */}
          <div className="flex justify-center">
            <GoogleScheduler />
          </div>
        </div>
      </section>
    </div>
  );
}
