import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pay Invoice | GG Tax Services",
  description:
    "Securely pay your invoice using Zelle or other payment methods. No processing fee for Zelle payments.",
};

export default function InvoicePayment() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <section className="text-center py-10 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-500 mb-4">
          Pay Your Invoice
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed px-4">
          Choose your preferred payment method below. Zelle is the recommended
          option with no processing fee. Other payment methods are available
          with a small processing fee.
        </p>
      </section>

      {/* Payment Options */}
      <section className="py-9 px-6 max-w-4xl mx-auto space-y-8">
        {/* Zelle Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-500 mb-3">
            Zelle (Preferred)
          </h3>
          <p className="text-gray-300 mb-4">
            Pay instantly with no processing fee. Send payment to:
            <span className="font-semibold text-white">
              {" "}
              info@ggtaxprep.com
            </span>
          </p>

          {/* QR Code Placeholder */}
          <div className="w-full flex justify-center mb-4">
            <div className="bg-gray-700 h-40 w-40 rounded-lg flex items-center justify-center text-gray-400">
              <Link
                href="https://enroll.zellepay.com/qr-codes?data=eyJ0b2tlbiI6ImluZm9AZ2d0YXhwcmVwLmNvbSIsIm5hbWUiOiJHaXNlbCBHYXJyaWRvIiwiYWN0aW9uIjoiUGF5bWVudCJ9"
                className="text-green-500 underline"
              >
                <Image
                  src="/images/ZelleQR.png"
                  alt="Zelle QR Code"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-lg"
                />
              </Link>
            </div>
          </div>

          <div className="border-gray-700 rounded p-3 mb-4 text-sm text-gray-300 text-center">
            <Link
              href="https://enroll.zellepay.com/qr-codes?data=eyJ0b2tlbiI6ImluZm9AZ2d0YXhwcmVwLmNvbSIsIm5hbWUiOiJHaXNlbCBHYXJyaWRvIiwiYWN0aW9uIjoiUGF5bWVudCJ9"
              className="inline-block px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-md transition-colors"
            >
              Pay with Zelle
            </Link>
          </div>
        </div>

        {/* Other Payment Methods */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          {/* Small logo placeholders */}
          <div className="mb-4">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2 text-center">
              Accepted payment types
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Apple Pay",
                "Visa",
                "Mastercard",
                "Link Pay",
                "Cash App Pay",
                "Google Pay",
                "Amazon Pay",
              ].map((logo) => (
                <div
                  key={logo}
                  className="h-10 min-w-[90px] px-3 rounded-md bg-gray-700 border border-gray-600 flex items-center justify-center text-[11px] text-gray-200"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="border-gray-700 rounded p-3 mb-4 text-sm text-gray-300 text-center">
            <Link
              href="#"
              className="inline-block px-4 py-2 text-sm bg-blue-900 hover:bg-blue-900 text-white font-semibold rounded-md transition-colors"
            >
              Pay Now
            </Link>
          </div>
          <p className="text-gray-300 mb-4">
            <span className="text-sm text-gray-400 italic">
              Processing fee applies. The fee is calculated at checkout.
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center mt-10 pb-10">
        <p>
          <a href="/site/privacy-policy" className="text-green-500 underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/site/terms" className="text-green-500 underline">
            Terms of Service
          </a>
        </p>
      </div>
    </main>
  );
}
