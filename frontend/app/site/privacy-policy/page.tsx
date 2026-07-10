export const metadata = {
  title: "Terms of Service",
  description: "GG Tax Services terms of service and user agreement.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last Updated: April 27, 2026</p>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 space-y-8 text-gray-300 leading-relaxed">
          {/* AGREEMENT */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Agreement to Terms
            </h2>
            <p>
              By engaging GG Tax Services (“we,” “our,” or “us”) for tax
              preparation or related services, you (“you” or “client”) agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, you should not use our services.
            </p>
          </section>

          {/* SERVICES PROVIDED */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Services Provided
            </h2>
            <p className="mb-3">
              GG Tax Services provides professional tax-related services,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Individual and business income tax preparation</li>
              <li>Tax planning and general tax guidance</li>
              <li>Arizona Transaction Privilege Tax (TPT) filings</li>
              <li>Amended returns and prior-year filings</li>
              <li>
                Assistance with IRS and state tax notices for returns we prepare
              </li>
            </ul>
            <p className="mt-3">
              The exact scope of services for each engagement will be based on
              your specific situation and the information you provide.
            </p>
          </section>

          {/* CLIENT RESPONSIBILITIES */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Client Responsibilities
            </h2>
            <p className="mb-3">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Provide complete, accurate, and timely information and documents
              </li>
              <li>
                Disclose all income, deductions, credits, and relevant tax items
              </li>
              <li>
                Respond promptly to questions or requests for additional
                information
              </li>
              <li>Review your tax return carefully before it is filed</li>
              <li>
                Confirm that all information on the return is true, correct, and
                complete
              </li>
              <li>
                Maintain your own copies of tax returns and supporting documents
              </li>
              <li>
                Notify us of any changes to your contact or financial
                information
              </li>
            </ul>
          </section>

          {/* FEES AND PAYMENT */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Fees and Payment
            </h2>
            <p className="mb-3">
              Our fees are based on the complexity of your return, forms
              required, and the time and expertise involved. We do not use a
              flat-rate system; pricing is determined at the time of service.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Free estimates may be provided before work begins</li>
              <li>
                Deposits may be required for more complex returns or engagements
              </li>
              <li>
                Payment methods include Stripe (card payments), Zelle, and cash
              </li>
              <li>
                Your account must be paid in full before any tax return is filed
              </li>
              <li>We do not offer payment plans</li>
              <li>
                Additional fees may apply for amended returns, complex issues,
                or additional services; these will be disclosed in advance when
                reasonably possible
              </li>
            </ul>
            <p className="mt-3">
              All fees are earned for professional services rendered. Once a
              return has been filed, fees are generally non-refundable.
            </p>
          </section>

          {/* REFUNDS AND CORRECTIONS */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Refunds and Corrections
            </h2>
            <p className="mb-3">
              If you are dissatisfied with our services, you must notify us
              promptly and before your return is filed so we can attempt to
              resolve the issue. Once a return is filed with the IRS or a state
              agency, fees are non-refundable.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                If an error is caused by us, we will correct the return at no
                additional preparation fee
              </li>
              <li>
                If a correction is required due to incomplete, inaccurate, or
                omitted information you provided, additional fees may apply
              </li>
              <li>
                If third-party or government fees are incurred to correct an
                issue caused by your information, you are responsible for those
                costs
              </li>
            </ul>
          </section>

          {/* SERVICE TIMELINE */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Service Timeline
            </h2>
            <p className="mb-3">
              The time required to complete your return depends on the
              complexity of your situation, the completeness of your documents,
              and the time of year (e.g., peak tax season). We do not guarantee
              a specific turnaround time but will make reasonable efforts to
              complete your return as promptly as possible.
            </p>
            <p>
              We are not responsible for delays caused by your late submission
              of documents, changes in your information, or delays by the IRS or
              state tax authorities in processing your return or refund.
            </p>
          </section>

          {/* ACCURACY, LIABILITY, AND NO GUARANTEES */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Accuracy, Liability, and No Guarantees
            </h2>
            <p className="mb-3">
              We prepare your tax return based on the information you provide.
              You are ultimately responsible for the accuracy and completeness
              of your tax return.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                We are not liable for penalties, interest, or additional tax
                resulting from incomplete, inaccurate, or omitted information
                provided by you
              </li>
              <li>
                We do not guarantee any particular refund amount, tax outcome,
                or that a return will not be audited
              </li>
              <li>
                We are not responsible for IRS or state processing delays,
                system issues, or changes in tax law after filing
              </li>
            </ul>
          </section>

          {/* AUDIT SUPPORT */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Audit Support and Notices
            </h2>
            <p className="mb-3">
              We may assist with IRS or state tax notices and audit-related
              matters for returns we prepared.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Support is limited to returns prepared by GG Tax Services</li>
              <li>
                Additional fees may apply for audit support, representation, or
                extensive correspondence; such fees will be discussed with you
                in advance when reasonably possible
              </li>
            </ul>
          </section>

          {/* CONFIDENTIALITY */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Confidentiality
            </h2>
            <p>
              All information you provide is treated as confidential and is
              protected under applicable federal and state laws. We will not
              disclose your information to third parties without your consent,
              except as required or permitted by law (such as to the IRS, state
              tax authorities, or as otherwise described in our Privacy Policy).
            </p>
          </section>

          {/* DOCUMENT RETENTION */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Document Retention
            </h2>
            <p className="mb-3">
              We retain copies of tax returns and certain related records for at
              least the period required under IRS and applicable state
              regulations, typically a minimum of 7 years.
            </p>
            <p>
              You are responsible for maintaining your own copies of tax
              returns, source documents, and supporting records. We may not be
              able to provide copies indefinitely beyond required retention
              periods.
            </p>
          </section>

          {/* NO LEGAL OR INVESTMENT ADVICE */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              No Legal or Investment Advice
            </h2>
            <p>
              Our services are limited to tax preparation and general tax
              guidance. We do not provide legal, investment, or financial
              planning advice. You should consult an attorney, financial
              advisor, or other qualified professional for advice in those
              areas.
            </p>
          </section>

          {/* TERMINATION */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Termination of Services
            </h2>
            <p className="mb-3">
              Either you or GG Tax Services may terminate the engagement at any
              time before a return is filed.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                If you terminate before filing, you remain responsible for fees
                for work already performed
              </li>
              <li>
                We may refuse or terminate services if you provide false or
                misleading information, fail to pay fees, engage in abusive or
                threatening behavior, or if we identify a conflict of interest
              </li>
            </ul>
          </section>

          {/* LIMITATION OF LIABILITY */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, GG Tax Services’ total
              liability arising out of or related to our services is limited to
              the amount of fees you paid to us for the specific engagement at
              issue. We are not liable for any indirect, incidental,
              consequential, special, or punitive damages.
            </p>
          </section>

          {/* GOVERNING LAW AND DISPUTE RESOLUTION */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Governing Law and Dispute Resolution
            </h2>
            <p className="mb-3">
              These Terms of Service are governed by the laws of the State of
              Arizona, without regard to its conflict of law principles.
            </p>
            <p>
              Any dispute arising out of or relating to these terms or our
              services will be resolved through binding arbitration in Arizona.
              By using our services, you agree to waive your right to a jury
              trial or participation in a class action, to the extent permitted
              by law.
            </p>
          </section>

          {/* CHANGES TO TERMS */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Material
              changes will be communicated via our website or by email when
              appropriate. Your continued use of our services after changes are
              posted constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* CONTACT INFORMATION */}
          <section>
            <h2 className="text-2xl font-bold text-green-500 mb-3">
              Contact Information
            </h2>
            <p>
              If you have questions about these Terms of Service, please
              contact:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong>Email:</strong> info@ggtaxprep.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
