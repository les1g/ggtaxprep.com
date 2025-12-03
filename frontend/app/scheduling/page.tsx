export default function Schedule() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Schedule a Consultation</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Book a time that works best for you. All consultations are handled securely through Calendly.
        </p>
      </section>

      {/* Calendly Embed */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded p-6">
          <iframe
            src="https://calendly.com/ggtaxservices"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
