import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./menu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.ggtaxprep.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GG Tax Services",
  description: "Professional tax preparation services in Arizona.",
  keywords: [
    "Tax Preparation",
    "Arizona Tax Services",
    "Income Tax Filing",
    "Business Tax Services",
    "Personal Tax Returns",
    "Tax Consultant AZ",
    "Tax Advisor Arizona",
    "Tax Help AZ",
    "Tax Filing Services",
    "Tax Preparation Near Me",
  ],
  authors: [{ name: "GG Tax Services LLC", url: "https://www.ggtaxprep.com" }],
  creator: "GG Tax Services LLC",
  publisher: "GG Tax Services LLC",
  openGraph: {
    title: "GG Tax Services",
    description: "Professional tax preparation services in Arizona.",
    url: siteUrl,
    siteName: "GG Tax Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100 font-sans flex flex-col`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gray-800 border-b border-gray-700 p-4 md:p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 min-w-0">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="GG Tax Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </Link>
            </div>

            {/* Navigation Component */}
            <Navigation />
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 text-center py-6">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.instagram.com/ggtaxprep_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 inline"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582094297032"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 inline"
                />
              </a>
              <a
                href="https://share.google/6EWZ0fv9gCbniIfqF"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="Google Review"
              >
                <Image
                  src="/icons/google-review.svg"
                  alt="Google Review"
                  width={24}
                  height={24}
                  className="h-6 w-6 inline"
                />
              </a>
            </div>

            <p className="text-sm">
              &copy; GG Tax Services LLC. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
