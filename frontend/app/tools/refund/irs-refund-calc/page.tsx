"use client";

import { useState } from "react";

export default function IRSRefundCalculator() {
  const [acceptedDate, setAcceptedDate] = useState("");
  const [method, setMethod] = useState("direct");
  const [result, setResult] = useState("");

  const calculateRefund = () => {
    if (!acceptedDate) return;

    const date = new Date(acceptedDate);

    // IRS timing rules
    const daysToAdd =
      method === "direct"
        ? 14 // midpoint of 8–21 days
        : 26; // midpoint of 3–4 weeks

    date.setDate(date.getDate() + daysToAdd);

    setResult(date.toDateString());
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-10">
      <h3 className="text-2xl font-bold text-green-400 mb-6">
        IRS Refund Date Estimator
      </h3>

      {/* Accepted Date */}
      <label className="block text-gray-300 mb-2">Return Accepted Date</label>
      <input
        type="date"
        value={acceptedDate}
        onChange={(e) => setAcceptedDate(e.target.value)}
        className="w-full p-3 mb-4 rounded bg-gray-900 border border-gray-700 text-gray-100"
      />

      {/* Refund Method */}
      <label className="block text-gray-300 mb-2">Refund Method</label>
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="w-full p-3 mb-6 rounded bg-gray-900 border border-gray-700 text-gray-100"
      >
        <option value="direct">Direct Deposit</option>
        <option value="check">Paper Check</option>
      </select>

      <button
        onClick={calculateRefund}
        className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Estimate Refund Date
      </button>

      {result && (
        <p className="text-green-400 font-semibold mt-4 text-center">
          Estimated Refund Date: {result}
        </p>
      )}
    </div>
  );
}
