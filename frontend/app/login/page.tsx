"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-400">Client Login</h1>

      {/* Credentials form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
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

        <button
          type="submit"
          className="w-full p-3 rounded bg-green-500 hover:bg-green-600 text-white font-bold flex items-center justify-center"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400">or</div>

      {/* OAuth + Sign Up buttons */}
      <div className="mt-6 space-y-4 w-full max-w-sm">
        {[
          { provider: "google", label: "Google", icon: "google.svg" },
          { provider: "apple", label: "Apple", icon: "apple.svg" },
          { provider: "microsoft", label: "Microsoft", icon: "microsoft.svg" },
        ].map(({ provider, label, icon }) => (
          <button
            key={provider}
            onClick={() => signIn(provider, { callbackUrl: "/dashboard" })}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 hover:border-green-400 flex items-center"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <img
                src={`/icons/${icon}`}
                alt={label}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="font-medium">Continue with {label}</span>
            </div>
          </button>
        ))}

        <div className="text-sm text-gray-400 text-center">Don't have an account yet?</div>
        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="w-full p-3 rounded bg-green-500 hover:bg-green-600 text-white font-bold flex items-center justify-center"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
