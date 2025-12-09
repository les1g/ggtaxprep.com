import type { Metadata } from "next";
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

const siteUrl = "https://www.ggtaxservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GG Tax Services",
    template: "%s | GG Tax Services",
  },
  description: "Professional tax preparation and consulting services",
  openGraph: {
    title: "GG Tax Services",
    description: "Professional tax preparation and consulting services",
    url: siteUrl,
    siteName: "GG Tax Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GG Tax Services",
    description: "Professional tax preparation and consulting services",
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
              <a href="/" className="flex-shrink-0">
                <img src="/logo.png" alt="GG Tax Logo" className="h-8 w-8 md:h-10 md:w-10" />
              </a>
              <h1 className="text-sm md:text-lg lg:text-xl font-bold text-green-400 truncate">GG Tax Services</h1>
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
                href="https://www.instagram.com/ggtaxpreparationservices/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 inline" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61582094297032" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors"
                aria-label="Facebook"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 inline" />
              </a>
              <a 
                href="https://share.google/6EWZ0fv9gCbniIfqF" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors"
                aria-label="Google Review"
              >
                <img src="/icons/google-review.svg" alt="Google Review" className="h-6 w-6 inline" />
              </a>
            </div>

            <p className="text-sm">
              &copy; 2025 GG Tax Preparation Services LLC. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}