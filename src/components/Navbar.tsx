"use client";

import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold" style={{ color: "#F4C409" }}>
            Tooth Span
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#F4C409] transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-white hover:text-[#F4C409] transition-colors">
              Courses
            </Link>
            <Link href="/mentors" className="text-white hover:text-[#F4C409] transition-colors">
              Mentors
            </Link>
            <Link href="/contact" className="text-white hover:text-[#F4C409] transition-colors">
              Contact
            </Link>
            <button 
              className="px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "#F4C409", color: "#000" }}
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-[#F4C409] transition-colors">
              Home
            </Link>
            <Link href="/courses" className="block text-white hover:text-[#F4C409] transition-colors">
              Courses
            </Link>
            <Link href="/mentors" className="block text-white hover:text-[#F4C409] transition-colors">
              Mentors
            </Link>
            <Link href="/contact" className="block text-white hover:text-[#F4C409] transition-colors">
              Contact
            </Link>
            <button 
              className="w-full px-6 py-2 rounded-full font-semibold"
              style={{ backgroundColor: "#F4C409", color: "#000" }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}