"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav className="flex items-center ml-auto">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-green-400 text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 text-sm rounded transition-colors"
        >
          Schedule
        </Link>

        <Link
          href="/contact"
          className="text-gray-300 hover:text-green-400 text-sm transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Hamburger Button (Mobile & Tablet) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-green-400 transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-green-400 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-green-400 transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 md:top-20 left-0 right-0 bg-gray-800 border-b border-gray-700 lg:hidden flex flex-col gap-3 p-4 md:p-6 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded transition-colors inline-block"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-green-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
