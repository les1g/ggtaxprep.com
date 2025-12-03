import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/...nextauth]/authOptions";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p className="text-gray-400">You must be logged in to view the dashboard.</p>
        <a
          href="/login"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-6">
      <h1 className="text-3xl font-bold text-green-400 mb-6">Welcome to Your Dashboard</h1>
      <p className="text-gray-300 mb-4">
        Hello, <span className="text-green-300">{session.user?.name ?? session.user?.email}</span>!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-gray-800 border border-gray-700 rounded p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Invoices</h2>
          <p className="text-gray-300">View and track your tax invoices.</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Documents</h2>
          <p className="text-gray-300">Upload and manage your tax documents securely.</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Discounts</h2>
          <p className="text-gray-300">Check available promotions and referral rewards.</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Profile</h2>
          <p className="text-gray-300">Update your account details and preferences.</p>
        </div>
      </div>

      <LogoutButton />
    </div>
  );
}