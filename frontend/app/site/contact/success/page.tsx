export const metadata = {
  title: "Message Sent",
  description: "Your message has been successfully submitted.",
};

export default function ContactSuccess() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-6">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-10 max-w-md w-full text-center shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-400 mb-3">
          Message Sent!
        </h1>

        {/* Message */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Thank you for reaching out. We’ve received your message and will get
          back to you within 24 business hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="/home"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Return Home
          </a>

          <a
            href="/site/contact"
            className="w-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-semibold py-3 rounded-lg transition-colors"
          >
            Back to Contact
          </a>
        </div>
      </div>
    </main>
  );
}
