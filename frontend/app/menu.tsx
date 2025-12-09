"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center ml-auto">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-6">
        <Link href="/" className="text-gray-300 hover:text-green-400 text-sm">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-green-400 text-sm">About</Link>
        <Link href="/services" className="text-gray-300 hover:text-green-400 text-sm">Services</Link>
        <Link href="/newsletter" className="text-gray-300 hover:text-green-400 text-sm">Newsletter</Link>
        <Link href="/pricing" className="text-gray-300 hover:text-green-400 text-sm">Pricing</Link>
        <Link href="/guides" className="text-gray-300 hover:text-green-400 text-sm">Guides</Link>
        <Link href="/resources" className="text-gray-300 hover:text-green-400 text-sm">Resources</Link>
        
        <Link href="/scheduling" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 text-sm rounded">
          Schedule
        </Link>
        
        <Link href="/contact" className="text-gray-300 hover:text-green-400 text-sm">Contact</Link>

        <span className="border-l border-gray-600 h-6"></span>

        <Link href="/login" className="text-gray-300 hover:text-green-400 font-semibold text-sm">Login</Link>
        <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 text-sm rounded">
          Sign Up
        </Link>
      </div>

      {/* Hamburger Button (Mobile & Tablet) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1 focus:outline-none"
      >
        <span className={`block w-6 h-0.5 bg-green-400 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-green-400 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-green-400 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 md:top-20 left-0 right-0 bg-gray-800 border-b border-gray-700 lg:hidden flex flex-col gap-3 p-4 md:p-6">
          <Link href="/" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/newsletter" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Newsletter</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/guides" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Guides</Link>
          <Link href="/resources" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/scheduling" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded inline-block" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link href="/contact" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/login" className="text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded inline-block" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}