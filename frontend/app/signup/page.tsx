"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    // TODO: Replace with real signup logic
    if (name && email && password) {
      setSuccess("Account created successfully! You can now log in.");
      setError("");
    } else {
      setError("Please fill out all fields.");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-400">Create Your Account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="p-3 w-full rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400">or</div>

      {/* OAuth buttons */}
      <div className="mt-6 space-y-4 w-full max-w-sm">
        {/* Google */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
          <span className="font-medium">Sign up with Google</span>
        </button>

        {/* Apple */}
        <button
          onClick={() => signIn("apple", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/apple.svg" alt="Apple" className="h-5 w-5" />
          <span className="font-medium">Sign up with Apple</span>
        </button>

        {/* Microsoft */}
        <button
          onClick={() => signIn("microsoft", { callbackUrl: "/dashboard" })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center space-x-3 justify-center"
        >
          <img src="/icons/microsoft.svg" alt="Microsoft" className="h-5 w-5" />
          <span className="font-medium">Sign up with Microsoft</span>
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Already have an account?{" "}
        <a href="/login" className="text-green-400 hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
}
