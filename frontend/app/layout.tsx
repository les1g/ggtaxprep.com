import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./menu";
// @ts-ignore - allow side-effect CSS import without type declarations
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
  description: "Professional tax preparation services.",
  keywords: [
    "Tax Preparation",
    "Tax Services",
    "Tax Preparation Services",
    "Someone to do my taxes",
    "Arizona Tax Services",
    "Income Tax Filing",
    "Business Tax Services",
    "Personal Tax Returns",
    "Tax Consultant",
    "Tax Advisor Arizona",
    "Tax Help",
    "Tax Filing Services",
    "Tax Preparation Near Me",
  ],
  authors: [{ name: "GG Tax Services LLC", url: "https://www.ggtaxprep.com" }],
  creator: "GG Tax Services LLC",
  publisher: "GG Tax Services LLC",
  openGraph: {
    title: "GG Tax Services",
    description: "Professional tax preparation services.",
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
        <div className="min-h-screen">
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
          <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
  <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
    
    {/* Brand / About */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">
        GG Tax Services
      </h3>
      <p className="text-sm leading-relaxed max-w-sm">
        Professional tax preparation for individuals and small businesses.
        Simple, clear, and stress-free service.
      </p>
      <p className="text-sm mt-3 italic">By appointment only</p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="text-white font-semibold text-lg mb-3">
        Quick Links
      </h4>
      <ul className="space-y-2 text-sm leading-relaxed">
        <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-green-400 transition">About</Link></li>
        <li><Link href="/services" className="hover:text-green-400 transition">Services</Link></li>
        <li><Link href="/schedule" className="hover:text-green-400 transition">Schedule</Link></li>
        <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
      </ul>
    </div>

    {/* Contact + Social */}
    <div>
      <h4 className="text-white font-semibold mb-3">Contact</h4>

      <p className="text-sm mb-2">
        Email: <a href="mailto:info@ggtaxprep.com" className="hover:text-green-400 transition">info@ggtaxprep.com</a>
      </p>

      <p className="text-sm mb-2">
        Phone: <a href="tel:+14805358927" className="hover:text-green-400 transition">(480) 535-8927</a>
      </p>

      <p className="text-sm mb-4">
        Address: 4102 W Pershing Ave, Phoenix, AZ 85029
      </p>

      <h4 className="text-white font-semibold mb-3 mt-6">Follow Us</h4>

      <div className="flex gap-3">
        <a href="https://www.instagram.com/ggtaxprep_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="hover:text-green-400 transition" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61582094297032" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="hover:text-green-400 transition" />
        </a>

        <a href="https://share.google/6EWZ0fv9gCbniIfqF" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
          <Image src="/icons/google-review.svg" alt="Google Review" width={20} height={20} className="hover:text-green-400 transition" />
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 text-center text-xs py-4 px-6">
    <p>© {new Date().getFullYear()} GG Tax Services, LLC. All rights reserved.</p>
  </div>
</footer>

        </div>
      </body>
    </html>
  );
}
