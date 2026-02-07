"use client";

import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/* ---------------------------------------------
   QUESTIONS
---------------------------------------------- */
const QUESTIONS = [
  {
    id: "filingStatus",
    question: "What is your filing status?",
    type: "select" as const,
    options: [
      "Single",
      "Married Filing Jointly",
      "Married Filing Separately",
      "Head of Household",
      "I'm not sure",
    ],
  },
  {
    id: "income",
    question: "What Kind of income did you have during 2025?",
    type: "select" as const,
    options: [
      "Employment (W-2)",
      "Freelance / Contract (1099-NEC / 1099-K / 1099-MISC)",
      "Investment (1099-B / 1099-DIV / 1099-INT)",
      "Cryptocurrency",
      "None of the above",
    ],
  },
  {
    id: "otherIncome",
    question:
      "Did you receive any additional income (unemployment, cash jobs, alimony, etc.)?",
    type: "boolean" as const,
  },
  {
    id: "hasDependents",
    question: "Do you have any dependents?",
    type: "boolean" as const,
  },
  {
    id: "dependentCount",
    question: "How many dependents do you have?",
    type: "number" as const,
    min: 1,
    max: 10,
    dependsOn: "hasDependents",
  },

  {
    id: "selfEmployment",
    question: "Did you have self-employment or business income during 2025?",
    type: "boolean" as const,
  },
  {
    id: "moved",
    question: "Did you move to a new address during 2025?",
    type: "boolean" as const,
  },
  {
    id: "homeOwner",
    question: "Did you buy or sell a home during 2025?",
    type: "boolean" as const,
  },
  {
    id: "investments",
    question:
      "Did you have investments, stocks, or cryptocurrency activity during 2025?",
    type: "boolean" as const,
  },
  {
    id: "rental",
    question: "Did you have rental property income during 2025?",
    type: "boolean" as const,
  },
  {
    id: "education",
    question:
      "Did you or a dependent attend school as a full-time student and have education expenses during 2025?",
    type: "boolean" as const,
  },
  {
    id: "marketplace",
    question:
      "Did you have Marketplace health insurance (Form 1095-A) during 2025?",
    type: "boolean" as const,
  },
];

type Answers = {
  [key: string]: string | boolean | number;
};

/* ---------------------------------------------
   DOCUMENTS
---------------------------------------------- */
const BASE_DOCUMENTS = [
  "Government-issued photo ID",
  "Social Security card and birth certificate",
  "All income documents (W-2s, 1099s, K-1s)",
  "Prior year tax return (if available)",
];

const DOCUMENT_RULES: Record<string, string[]> = {
  hasDependents: [
    "Social Security cards and birth certificates for all dependents",
  ],
  selfEmployment: ["1099-NEC / 1099-K / 1099-MISC", "Business expense records"],
  homeOwner: ["Form 1098", "Property tax statement", "Closing disclosure"],
  investments: ["1099-B / 1099-DIV / 1099-INT", "Crypto transaction history"],
  rental: ["Rental income & expense records"],
  education: ["Form 1098-T", "Tuition receipts"],
  marketplace: ["Form 1095-A"],
};

function generateDocumentList(answers: Answers) {
  const docs = new Set(BASE_DOCUMENTS);

  Object.entries(answers).forEach(([key, value]) => {
    if (value === true && DOCUMENT_RULES[key]) {
      DOCUMENT_RULES[key].forEach((doc) => docs.add(doc));
    }
  });

  return Array.from(docs);
}

/* ---------------------------------------------
   COMPONENT
---------------------------------------------- */
export default function DocumentPrepQuestionnaire() {
  const hasSubmitted = useRef(false);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [clientName, setClientName] = useState("");
  const [done, setDone] = useState(false);
  const [mailingStreet, setMailingStreet] = useState("");
  const [mailingCity, setMailingCity] = useState("");
  const [mailingState, setMailingState] = useState("");
  const [mailingZip, setMailingZip] = useState("");
  const [sameAsPrimary, setSameAsPrimary] = useState<boolean | null>(null);
  const [primaryStreet, setPrimaryStreet] = useState("");
  const [primaryCity, setPrimaryCity] = useState("");
  const [primaryState, setPrimaryState] = useState("");
  const [primaryZip, setPrimaryZip] = useState("");

  const current = QUESTIONS[step - 1];

  async function submit() {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;

    const formData = new FormData();
    formData.append("access_key", "e2198c11-32ff-4164-a3c1-2cc7c40d92f5");
    formData.append("name", clientName);
    formData.append("answers", JSON.stringify(answers, null, 2));
    formData.append(
      "mailingAddress",
      `${mailingStreet}, ${mailingCity}, ${mailingState} ${mailingZip}`,
    );
    formData.append(
      "primaryAddress",
      sameAsPrimary
        ? `${mailingStreet}, ${mailingCity}, ${mailingState} ${mailingZip}`
        : `${primaryStreet}, ${primaryCity}, ${primaryState} ${primaryZip}`,
    );

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  }

  const next = async () => {
    if (step === QUESTIONS.length) {
      await submit();
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const documents = generateDocumentList(answers);

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen px-4 py-10">
      {step === 0 && !done && (
        <div className="max-w-2xl mx-auto pt-6 sm:pt-10">
          <Link
            href="/client/services"
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 hover:text-green-400"
          >
            <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
          </Link>

          <h1 className="text-3xl font-bold text-green-400 mb-6">
            Before We Begin
          </h1>

          {/* FULL NAME */}
          <label className="block text-sm text-gray-400 mb-1">
            Full Legal Name
          </label>
          <input
            value={clientName}
            onChange={(e) =>
              setClientName(
                e.target.value
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase()),
              )
            }
            placeholder="First Last"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 mb-4"
          />

          {/* MAILING ADDRESS */}
          <label className="block text-sm text-gray-400 mb-1">
            Mailing Address
          </label>

          <input
            value={mailingStreet}
            onChange={(e) => setMailingStreet(e.target.value)}
            placeholder="Street Address"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700 mb-3"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <input
              value={mailingCity}
              onChange={(e) => setMailingCity(e.target.value)}
              placeholder="City"
              className="p-4 rounded bg-gray-800 border border-gray-700"
            />

            <input
              value={mailingState}
              onChange={(e) =>
                setMailingState(e.target.value.toUpperCase().slice(0, 2))
              }
              placeholder="State"
              maxLength={2}
              className="p-4 rounded bg-gray-800 border border-gray-700"
            />

            <input
              value={mailingZip}
              onChange={(e) =>
                setMailingZip(e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              placeholder="ZIP"
              inputMode="numeric"
              className="p-4 rounded bg-gray-800 border border-gray-700"
            />
          </div>

          {/* SAME AS PRIMARY */}
          <p className="text-sm text-gray-300 mb-2">
            Is this the same as your primary (home) address?
          </p>

          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => setSameAsPrimary(true)}
              className={`flex-1 py-3 rounded-lg border ${
                sameAsPrimary === true
                  ? "bg-green-600 border-green-600"
                  : "border-gray-700"
              }`}
            >
              Yes
            </button>

            <button
              type="button"
              onClick={() => setSameAsPrimary(false)}
              className={`flex-1 py-3 rounded-lg border ${
                sameAsPrimary === false
                  ? "bg-green-600 border-green-600"
                  : "border-gray-700"
              }`}
            >
              No
            </button>
          </div>

          {/* PRIMARY ADDRESS (ONLY IF DIFFERENT) */}
          {sameAsPrimary === false && (
            <>
              <label className="block text-sm text-gray-400 mb-1">
                Primary (Home) Address
              </label>
              <input
                value={primaryStreet}
                onChange={(e) => setPrimaryStreet(e.target.value)}
                placeholder="Street Address"
                className="w-full p-4 rounded bg-gray-800 border border-gray-700 mb-3"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <input
                  value={primaryCity}
                  onChange={(e) => setPrimaryCity(e.target.value)}
                  placeholder="City"
                  className="p-4 rounded bg-gray-800 border border-gray-700"
                />
                <input
                  value={primaryState}
                  onChange={(e) =>
                    setPrimaryState(e.target.value.toUpperCase().slice(0, 2))
                  }
                  placeholder="State"
                  maxLength={2}
                  className="p-4 rounded bg-gray-800 border border-gray-700"
                />
                <input
                  value={primaryZip}
                  onChange={(e) =>
                    setPrimaryZip(e.target.value.replace(/\D/g, "").slice(0, 5))
                  }
                  placeholder="ZIP"
                  inputMode="numeric"
                  className="p-4 rounded bg-gray-800 border border-gray-700"
                />
              </div>
            </>
          )}

          <button
            disabled={
              !clientName.trim() ||
              !mailingStreet.trim() ||
              !mailingCity.trim() ||
              mailingState.length !== 2 ||
              mailingZip.length !== 5 ||
              sameAsPrimary === null ||
              (sameAsPrimary === false &&
                (!primaryStreet ||
                  !primaryCity ||
                  primaryState.length !== 2 ||
                  primaryZip.length !== 5))
            }
            onClick={() => setStep(1)}
            className="mt-4 w-full bg-green-600 py-4 rounded-lg disabled:opacity-50"
          >
            Start Questionnaire
          </button>
        </div>
      )}

      {current && !done && step > 0 && (
        <div className="max-w-2xl mx-auto">
          <p className="mb-6 text-gray-400">
            Step {step} of {QUESTIONS.length}
          </p>

          <p className="text-xl mb-6">{current.question}</p>

          {current.type === "boolean" && (
            <div className="space-y-4">
              <button
                onClick={() => {
                  const updated = { ...answers, [current.id]: true };
                  setAnswers(updated);
                  next();
                }}
                className="w-full bg-green-600 py-4 rounded-lg"
              >
                Yes
              </button>

              <button
                onClick={() => {
                  const updated = { ...answers, [current.id]: false };
                  setAnswers(updated);

                  // 🔥 SKIP dependentCount if No
                  if (current.id === "hasDependents") {
                    setStep((s) => s + 2);
                  } else {
                    next();
                  }
                }}
                className="w-full border py-4 rounded-lg"
              >
                No
              </button>
            </div>
          )}
          {current.type === "number" && (
            <>
              <input
                type="number"
                min={current.min ?? 1}
                max={current.max ?? 20}
                value={(answers[current.id] as number) || ""}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [current.id]: Number(e.target.value),
                  })
                }
                className="w-full p-4 rounded bg-gray-800 border border-gray-700"
                placeholder="Enter number"
              />

              <button
                disabled={!answers[current.id]}
                onClick={next}
                className="mt-6 w-full bg-green-600 py-4 rounded-lg"
              >
                Continue
              </button>
            </>
          )}

          {current.type === "select" && (
            <>
              <select
                value={(answers[current.id] as string) || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [current.id]: e.target.value })
                }
                className="w-full p-4 rounded bg-gray-800 border border-gray-700"
              >
                <option value="">Select one…</option>
                {current.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>

              <button
                disabled={!answers[current.id]}
                onClick={next}
                className="mt-6 w-full bg-green-600 py-4 rounded-lg"
              >
                Continue
              </button>
            </>
          )}
        </div>
      )}

      {done && (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            Documents to Upload
          </h1>
          <p className="mb-4 text-gray-400">
            If you don’t have a Social Security card or birth certificate
            available, that’s okay. You can upload another document, photo, or
            text file that clearly shows the full name, date of birth, and
            Social Security number for you or your dependents.
          </p>

          <ul className="space-y-2 mb-8">
            {documents.map((doc) => (
              <li key={doc}>✓ {doc}</li>
            ))}
          </ul>

          <a
            href="/client/secure-send"
            className="block bg-green-600 py-4 rounded-lg text-center font-semibold"
          >
            Continue to Secure Upload
          </a>
        </div>
      )}
    </main>
  );
}
