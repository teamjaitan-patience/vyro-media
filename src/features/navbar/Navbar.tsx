"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
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
              ? theme === "dark"
                ? "bg-[#0A0A0A]/85 backdrop-blur-2xl border border-zinc-800 shadow-lg shadow-black/40 text-white"
                : "bg-white/80 backdrop-blur-2xl border border-[#e5e5e5] shadow-lg shadow-black/5 text-[#0A0A0A]"
              : theme === "dark"
                ? "bg-transparent border border-transparent text-white"
                : "bg-transparent border border-transparent text-[#0A0A0A]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={theme === "dark" ? "/VYRO_logo_white.png" : "/VYRO_logo.png"} 
              alt="VYRO Media" 
              width={200} 
              height={66} 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-[#a3a3a3] hover:text-[#FFFFFF]"
                    : "text-[#737373] hover:text-[#0A0A0A]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            data-cal-link="jaitanpuri/vyromedia"
            data-cal-namespace="vyromedia"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className={`hidden md:block px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
              theme === "dark"
                ? "bg-[#F5F0E8] text-[#0A0A0A] hover:bg-[#e5dfd6]"
                : "bg-[#0A0A0A] text-white hover:bg-[#1a1a1a]"
            }`}
          >
            START PROJECT
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${theme === "dark" ? "text-white" : "text-[#0A0A0A]"}`}
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
            className={`fixed inset-0 z-40 backdrop-blur-xl pt-24 px-6 flex flex-col ${
              theme === "dark" ? "bg-[#0A0A0A]/98 text-white" : "bg-white/98 text-[#0A0A0A]"
            }`}
          >
            <nav className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-4xl font-bold transition-colors duration-200 ${
                    theme === "dark"
                      ? "text-white hover:text-[#F5F0E8]"
                      : "text-[#111111] hover:text-[#C8A96E]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => setMenuOpen(false)}
              data-cal-link="jaitanpuri/vyromedia"
              data-cal-namespace="vyromedia"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className={`mt-4 px-8 py-4 rounded-full text-center font-sans font-bold text-lg tracking-wide transition-colors cursor-pointer w-full ${
                theme === "dark"
                  ? "bg-[#F5F0E8] text-[#0A0A0A] hover:bg-[#e5dfd6]"
                  : "bg-[#0A0A0A] text-white hover:bg-[#1a1a1a]"
              }`}
            >
              Start a Project →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
