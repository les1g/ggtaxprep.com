"use client";

import { useState } from "react";

export default function PhoneInput() {
  const [value, setValue] = useState("");

  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10); // limit to 10 digits
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return digits;

    let formatted = "";
    if (match[1]) formatted = "(" + match[1];
    if (match[2]) formatted += ") " + match[2];
    if (match[3]) formatted += "-" + match[3];
    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatPhoneNumber(e.target.value));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100"
        placeholder="(123) 456-7890"
      />
    </div>
  );
}
