import PhoneInput from "./phone-input";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with GG Tax Services for any inquiries about tax preparation and compliance in Arizona.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Page Header */}
      <section className="text-center py-14 px-4 bg-gray-800 border-b border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-400 mb-3">
          Contact Us
        </h2>
      </section>

      {/* Contact Info */}
      <section className="py-10 px-4 max-w-3xl mx-auto space-y-6">
        {/* Row 1: Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-green-400 mb-1">Email</h3>
            <a
              href="mailto:info@ggtaxprep.com"
              className="text-gray-300 hover:text-green-300 transition-colors break-all"
            >
              info@ggtaxprep.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold text-green-400 mb-1">Phone</h3>
            <a
              href="tel:+14805358927"
              className="text-gray-300 hover:text-green-300 transition-colors"
            >
              (480) 535‑8927
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
          <h3 className="text-lg font-semibold text-green-400 mb-1">Hours</h3>
          <p className="text-gray-300 leading-tight">
            Mon–Sat
            <br />
            8am – 6pm
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 max-w-3xl mx-auto pb-20">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6 bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 shadow-lg"
        >
          {/* REQUIRED: Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="9bb8593b-a08d-4b58-9f2c-f4a0fe8457ce"
          />

          {/* REDIRECT AFTER SUCCESS */}
          <input
            type="hidden"
            name="redirect"
            value="https://ggtaxprep.com/site/contact/success"
          />

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="First Last"
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100 
                         focus:border-green-400 focus:outline-none text-base"
              style={{ textTransform: "capitalize" }}
            />
          </div>

          {/* Phone */}
          <div>
            <PhoneInput />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 
                         focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none 
                         text-base placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={5}
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100 
                         focus:border-green-400 focus:outline-none text-base"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold 
                       hover:bg-green-500 transition-colors text-base"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
