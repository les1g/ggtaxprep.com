"use client";

import { useState, useRef } from "react";

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
type Answers = {
  [key: string]: string | boolean | { name: string; dob: string }[];
};

/* ---------------------------------------------
   2. DOCUMENT RULES
---------------------------------------------- */
const DOCUMENT_RULES: Record<string, Record<string, string[]>> = {
  dependents: {
    true: [
      "Social Security cards for dependents",
      "Birth certificates",
      "Childcare provider statements",
    ],
  },
};

/* ---------------------------------------------
   3. DOCUMENT GENERATOR
---------------------------------------------- */
function generateDocumentList(answers: Answers) {
  const docs: string[] = [];
  for (const key in answers) {
    const rule = DOCUMENT_RULES[key];
    if (!rule) continue;
    if (answers[key] === true) docs.push(...rule.true);
  }
  return docs;
}

/* ---------------------------------------------
   4. MAIN COMPONENT
---------------------------------------------- */
export default function DocumentPrepQuestionnaire() {
  const hasSubmitted = useRef(false);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const [clientName, setClientName] = useState("");

  // Dependents
  const [subStep, setSubStep] = useState(0); // 0 = none, 1 = count, 2 = details
  const [dependentCount, setDependentCount] = useState(1);
  const [dependents, setDependents] = useState<{ name: string; dob: string }[]>(
    [],
  );
  const [activeDependentIndex, setActiveDependentIndex] = useState(0);

  const current: Question = QUESTIONS[step - 1];

  /* ---------------------------------------------
     WEB3FORMS
  ---------------------------------------------- */
  async function submitToWeb3Forms() {
    // ⛔ Prevent duplicate submissions
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;

    const formData = new FormData();
    formData.append("access_key", "e2198c11-32ff-4164-a3c1-2cc7c40d92f5");
    formData.append("subject", "New Document Prep Questionnaire");
    formData.append("from_name", clientName);
    formData.append("name", clientName);
    formData.append("answers", JSON.stringify(answers, null, 2));
    formData.append("dependents", JSON.stringify(dependents, null, 2));

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
  }

  /* ---------------------------------------------
     STEP CONTROL
  ---------------------------------------------- */
  const goNext = async () => {
    if (step === QUESTIONS.length) {
      await submitToWeb3Forms();
      setDone(true);
      return;
    }
    setStep(step + 1);
  };

  const handleBoolean = (value: boolean) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));

    if (current.id === "dependents" && value) {
      setSubStep(1);
      return;
    }

    goNext();
  };

  const documents = generateDocumentList(answers);

  /* ---------------------------------------------
     RENDER
  ---------------------------------------------- */
  return (
    <main className="bg-gray-900 text-gray-100 px-4 sm:px-6 py-6 sm:py-10 min-h-[100svh]">
      {/* NAME */}
      {step === 0 && !done && (
        <div className="max-w-2xl mx-auto pt-6 sm:pt-10">
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            Before We Begin
          </h1>

          <input
            value={clientName}
            onChange={(e) =>
              setClientName(
                e.target.value
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase()),
              )
            }
            placeholder="Your full name"
            className="w-full p-4 rounded bg-gray-800 border border-gray-700"
          />

          <button
            disabled={!clientName}
            onClick={() => setStep(1)}
            className="mt-6 w-full bg-green-600 py-4 rounded-lg"
          >
            Start Questionnaire
          </button>
        </div>
      )}

      {/* DEPENDENT COUNT */}
      {subStep === 1 && !done && (
        <div className="max-w-2xl mx-auto pt-6 sm:pt-10">
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            How many dependents do you have?
          </h1>

          <input
            type="number"
            min={1}
            max={20}
            value={dependentCount}
            onChange={(e) => setDependentCount(Number(e.target.value))}
            className="w-full p-4 rounded bg-gray-800 border border-gray-700"
          />

          <button
            onClick={() => {
              setDependents(
                Array.from({ length: dependentCount }, () => ({
                  name: "",
                  dob: "",
                })),
              );
              setSubStep(2);
            }}
            className="mt-6 w-full bg-green-600 py-4 rounded-lg"
          >
            Continue
          </button>
        </div>
      )}

      {/* DEPENDENT DETAILS */}
      {subStep === 2 && !done && (
        <div className="max-w-2xl mx-auto w-full pt-6 sm:pt-10">
          <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">
            Dependent {activeDependentIndex + 1} of {dependentCount}
          </h1>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Dependent Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={dependents[activeDependentIndex].name}
                onChange={(e) => {
                  const updated = [...dependents];
                  updated[activeDependentIndex].name = e.target.value
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  setDependents(updated);
                }}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                value={dependents[activeDependentIndex].dob}
                onChange={(e) => {
                  const updated = [...dependents];
                  updated[activeDependentIndex].dob = e.target.value;
                  setDependents(updated);
                }}
                className=" p-3 rounded-lg bg-gray-800 border mt-4 border-gray-700"
              />
            </div>

            <button
              disabled={
                !dependents[activeDependentIndex].name ||
                !dependents[activeDependentIndex].dob
              }
              onClick={() => {
                if (activeDependentIndex + 1 < dependentCount) {
                  setActiveDependentIndex(activeDependentIndex + 1);
                } else {
                  setAnswers((prev) => ({
                    ...prev,
                    dependentsList: dependents,
                  }));
                  setSubStep(0);
                  setActiveDependentIndex(0);
                  goNext();
                }
              }}
              className="w-full bg-green-600 py-3 rounded-lg font-semibold mt-4 disabled:opacity-50"
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}

      {/* MAIN QUESTIONS */}
      {subStep === 0 && step > 0 && step <= QUESTIONS.length && !done && (
        <div className="max-w-2xl mx-auto pt-6 sm:pt-10">
          <div className="mb-3 text-sm text-gray-400">
            Step {step} of {QUESTIONS.length}
          </div>

          <p className="text-xl mb-8">{current.question}</p>

          {current.type === "boolean" && (
            <div className="space-y-4">
              <button
                onClick={() => handleBoolean(true)}
                className="w-full bg-green-600 py-4 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => handleBoolean(false)}
                className="w-full border py-4 rounded-lg"
              >
                No
              </button>
            </div>
          )}

          {current.type === "select" && (
            <>
              <select
                value={(answers[current.id] as string) || ""}
                onChange={(e) =>
                  setAnswers((p) => ({ ...p, [current.id]: e.target.value }))
                }
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 border border-gray-700"
              >
                <option value="">Select one...</option>
                {current.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>

              <button
                disabled={!answers[current.id]}
                onClick={goNext}
                className="mt-6 w-full bg-green-600 py-4 rounded-lg"
              >
                Continue
              </button>
            </>
          )}
        </div>
      )}

      {/* FINAL */}
      {done && (
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 sm:mb-6">
            You’re Ready to Upload
          </h1>

          <p className="text-gray-300 mb-6">
            Please upload the following documents:
          </p>

          <ul className="text-left space-y-2 mb-8">
            {documents.map((doc, i) => (
              <li key={i}>✓ {doc}</li>
            ))}
          </ul>

          <a
            href="/client/secure-send"
            className="inline-block w-full bg-green-600 hover:bg-green-500 py-4 rounded-lg font-semibold"
          >
            Continue to Secure Upload
          </a>
        </div>
      )}
    </main>
  );
}
