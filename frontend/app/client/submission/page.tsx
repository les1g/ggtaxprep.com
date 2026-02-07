"use client";

import { useState } from "react";

/* ---------------------------------------------
   1. QUESTIONS
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
      "Qualifying Widow(er)",
      "I'm not sure",
    ],
  },
  {
    id: "dependents",
    question: "Do you have any dependents?",
    type: "boolean" as const,
  },
  {
    id: "selfEmployment",
    question: "Did you have self-employment or business income?",
    type: "boolean" as const,
  },
  {
    id: "homeOwner",
    question: "Did you own a home in the tax year?",
    type: "boolean" as const,
  },
  {
    id: "investments",
    question: "Did you have investments, stocks, or crypto?",
    type: "boolean" as const,
  },
  {
    id: "rental",
    question: "Did you have rental property income?",
    type: "boolean" as const,
  },
  {
    id: "education",
    question: "Did you or a dependent have education expenses?",
    type: "boolean" as const,
  },
  {
    id: "marketplace",
    question: "Did you have Marketplace health insurance (Form 1095-A)?",
    type: "boolean" as const,
  },
];

type Question = (typeof QUESTIONS)[number];
type Answers = { [key: string]: string | boolean };

/* ---------------------------------------------
   2. DOCUMENT RULES ENGINE
---------------------------------------------- */

type RuleSet = Record<string, string[]>;

type DocumentRules = {
  [key: string]: RuleSet;
};

const DOCUMENT_RULES: DocumentRules = {
  filingStatus: {
    Single: ["Photo ID"],
    "Married Filing Jointly": [
      "Photo ID for both spouses",
      "Marriage certificate (if newly married)",
    ],
    "Married Filing Separately": ["Photo ID", "Spouse’s full name & SSN"],
    "Head of Household": ["Proof of residency for dependents"],
    "Qualifying Widow(er)": ["Spouse’s death certificate"],
  },

  dependents: {
    true: [
      "Social Security cards for dependents",
      "Birth certificates",
      "Childcare provider statements",
    ],
  },

  selfEmployment: {
    true: [
      "1099-NEC / 1099-K",
      "Business income totals",
      "Expense receipts",
      "Mileage log",
      "Home office expenses",
    ],
  },

  homeOwner: {
    true: [
      "Form 1098 Mortgage Interest",
      "Property tax statements",
      "Closing disclosure (if purchased/refinanced)",
    ],
  },

  investments: {
    true: ["1099-B", "1099-DIV", "1099-INT", "Crypto statements"],
  },

  rental: {
    true: [
      "Rental income totals",
      "Expense receipts",
      "Mortgage interest",
      "Property taxes",
      "Insurance statements",
    ],
  },

  education: {
    true: ["1098-T", "Tuition statements", "Book/supply receipts"],
  },

  marketplace: {
    true: ["Form 1095-A"],
  },
};

/* ---------------------------------------------
   3. GENERATE DOCUMENT LIST
---------------------------------------------- */
function generateDocumentList(answers: Answers) {
  const docs: string[] = [];

  for (const key in answers) {
    const answer = answers[key];
    const rule = DOCUMENT_RULES[key];

    if (!rule) continue;

    if (typeof answer === "boolean") {
      const boolKey = answer ? "true" : "false";
      if (rule[boolKey]) docs.push(...rule[boolKey]);
    }

    if (typeof answer === "string" && rule[answer]) {
      docs.push(...rule[answer]);
    }
  }

  return docs;
}

/* ---------------------------------------------
   4. MAIN COMPONENT
---------------------------------------------- */
export default function DocumentPrepQuestionnaire() {
  const [step, setStep] = useState(0); // step 0 = name/email
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  // NEW: name + email
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const current: Question = QUESTIONS[step - 1]; // shift by 1 because step 0 is intro

  /* ---------------------------------------------
     SUBMIT TO WEB3FORMS
  ---------------------------------------------- */
  async function submitToWeb3Forms() {
    const formData = new FormData();

    formData.append("access_key", "e2198c11-32ff-4164-a3c1-2cc7c40d92f5");
    formData.append("name", clientName);
    formData.append("email", clientEmail);

    // Add questionnaire answers
    for (const key in answers) {
      formData.append(key, String(answers[key]));
    }

    // Add generated document list
    const docs = generateDocumentList(answers);
    formData.append("documents_needed", docs.join(", "));

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  }

  /* ---------------------------------------------
     STEP LOGIC
  ---------------------------------------------- */
  const goNext = async () => {
    // If finishing last question → send email
    if (step === QUESTIONS.length) {
      await submitToWeb3Forms();
      setDone(true);
      return;
    }

    setStep(step + 1);
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleBoolean = (value: boolean) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    goNext();
  };

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const documents = generateDocumentList(answers);

  /* ---------------------------------------------
     RENDER
  ---------------------------------------------- */
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
      {/* STEP 0 — NAME + EMAIL */}
      {step === 0 && !done && (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            Before We Begin
          </h1>

          <p className="text-gray-300 mb-6">
            Please enter your name and email so we can attach your questionnaire
            to your file.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your full name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-gray-100"
            />

            <input
              type="email"
              placeholder="Your email address"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-gray-100"
            />

            <button
              disabled={!clientName || !clientEmail}
              onClick={() => setStep(1)}
              className="w-full bg-green-600 disabled:bg-green-900 disabled:text-gray-500 hover:bg-green-500 text-white font-semibold py-4 rounded-lg text-lg"
            >
              Start Questionnaire
            </button>
          </div>
        </div>
      )}

      {/* QUESTIONNAIRE STEPS */}
      {step > 0 && step <= QUESTIONS.length && !done && (
        <div className="max-w-2xl mx-auto">
          <div className="mb-3 text-sm text-gray-400">
            Step {step} of {QUESTIONS.length}
          </div>

          <h1 className="text-3xl font-bold text-green-400 mb-6">
            Document Prep Questionnaire
          </h1>

          <p className="text-xl text-gray-100 mb-8">{current.question}</p>

          {current.type === "boolean" && (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleBoolean(true)}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-lg text-lg"
              >
                Yes
              </button>
              <button
                onClick={() => handleBoolean(false)}
                className="w-full border border-gray-500 hover:border-gray-300 text-gray-100 font-semibold py-4 rounded-lg text-lg"
              >
                No
              </button>
            </div>
          )}

          {current.type === "select" && (
            <div className="space-y-6">
              <select
                className="w-full p-4 rounded bg-gray-800 border border-gray-700 text-gray-100 text-lg"
                value={(answers[current.id] as string) || ""}
                onChange={(e) => handleSelect(e.target.value)}
              >
                <option value="">Select one...</option>
                {current.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                disabled={!answers[current.id]}
                onClick={goNext}
                className="w-full bg-green-600 disabled:bg-green-900 disabled:text-gray-500 hover:bg-green-500 text-white font-semibold py-4 rounded-lg text-lg"
              >
                Continue
              </button>
            </div>
          )}

          {step > 1 && (
            <button
              onClick={goBack}
              className="mt-6 text-sm text-gray-400 hover:text-gray-200"
            >
              ← Back
            </button>
          )}
        </div>
      )}

      {/* FINAL SCREEN */}
      {done && (
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            You’re Ready to Upload
          </h1>

          <p className="text-gray-300 mb-10 text-lg">
            Based on your answers, you need to upload the following documents:
          </p>

          <ul className="text-left text-gray-300 mb-10 space-y-2">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>

          <a
            href="/client/secure-send"
            className="w-full inline-block bg-green-600 hover:bg-green-500 text-white font-semibold py-4 rounded-lg text-center text-lg"
          >
            Continue to Secure Upload
          </a>
        </div>
      )}
    </main>
  );
}
