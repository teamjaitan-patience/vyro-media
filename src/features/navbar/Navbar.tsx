"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[800px]"
      >
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-2xl border border-[#e5e5e5] shadow-lg shadow-black/5"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image 
              src="/VYRO_logo.png" 
              alt="VYRO Media" 
              width={200} 
              height={66} 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#737373] hover:text-[#0A0A0A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/#contact"
            className="hidden md:block bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#1a1a1a] transition-colors"
          >
            START PROJECT
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#0A0A0A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl font-bold text-[#111111] hover:text-[#C8A96E] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a 
              href="/#contact" 
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#0A0A0A] text-white px-8 py-4 rounded-full text-center font-sans font-bold text-lg tracking-wide hover:bg-[#1a1a1a] transition-colors"
            >
              Start a Project →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
