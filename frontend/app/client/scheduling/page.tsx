export const metadata = {
  title: "Schedule | GG Tax Services",
  description:
    "Welcome to GG Tax Services, your trusted partner for tax preparation and compliance in Arizona.",
};

import BookingScheduler from "./BookingScheduler";

export default function Schedule() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Page header */}
      <section className="text-center py-16 bg-gray-800 border-gray-700 px-6 mx-auto">
        <h1 className="text-4xl font-semibold text-green-500 mb-4">
          Schedule An Appointment
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-10">
          Book a 30-minute appointment online. Phone appointments are available
          Monday through Saturday from 8:00 AM to 6:00 PM. In-person appointments
          are available at 12:00 PM Monday through Friday, and from 8:00 AM to
          6:00 PM on Saturday, at 4015 N 15th Ave, Phoenix, AZ 85018.
        </p>
        <BookingScheduler />
      </section>

      {/* What to Expect Section */}
      <section className="py-10 px-6 max-w-3xl mx-auto ">
        <div className="bg-gray-800 border border-gray-700 rounded p-8 ">
          <h2 className="text-2xl font-semibold text-green-500 mb-4 ">
            Important Information
          </h2>

          <p className="text-gray-300 mb-10">
            GG Tax Services is currently a one-person operation. Appointments
            are scheduled based on availability. Phone appointments are
            available every 30 minutes from 8:00 AM to 6:00 PM, Monday through
            Saturday. In-person appointments are offered at 12:00 PM Monday
            through Friday, and every 30 minutes from 8:00 AM to 6:00 PM on
            Saturday. All times are Arizona time. You can also fill out our
            intake form online and get your document checklist right away.
          </p>

          <h3 className="text-2xl font-semibold text-green-500 mb-4 ">
            What to Expect
          </h3>

          <p className="text-gray-300">
            Whether this is your first time working with us or you&apos;re a
            returning client, your appointment is designed to be simple, clear,
            and stress‑free. Here&apos;s what you can expect:
          </p>

          <ul className="text-gray-300 space-y-2 mt-4">
            <li>
              • A friendly and professional interview to gather necessary
              information.
            </li>
            <li>
              • Clear explanations of your tax situation and any questions you
              may have.
            </li>
            <li>
              • A straightforward process to ensure your tax return is accurate
              and complete.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mb-4 mt-10">
            What to Bring
          </h3>
          <p className="text-gray-300">
            To make the most of your appointment, please have the following
            documents ready:
          </p>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li>• Photo ID or driver&apos;s license</li>
            <li>• Any relevant tax documents (e.g., W-2, 1099 forms)</li>
            <li>• Receipts for deductible expenses (if applicable)</li>
            <li>• Previous year&apos;s tax return (if available)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-500 mb-4 mt-10">
            Before You Book
          </h3>
          <p className="text-gray-300">
            If you have any questions about the scheduling process or what to
            expect during your appointment, please don&apos;t hesitate to
            contact us. We&apos;re here to help and ensure you have a smooth
            experience with GG Tax Services.
          </p>
          <ul className="text-gray-300 space-y-2 mt-4">
            <li>• Ensure you have access to your tax documents</li>
            <li>
              • Consider any specific questions or concerns you want to discuss
              during your appointment
            </li>
            <li>
              • If you have a phone appointment, ensure you have a quiet and
              private space for the call
            </li>
          </ul>
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
    </main>
  );
}
