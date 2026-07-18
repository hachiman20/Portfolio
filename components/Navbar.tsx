"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-x-0 top-0 z-50 h-[76px]"
    >
      <motion.nav
        aria-label="Primary"
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)",
          boxShadow: scrolled ? "0 12px 40px -24px rgba(15,23,42,0.24)" : "0 0 0 0 rgba(15,23,42,0)",
        }}
        transition={{ duration: 0.25 }}
        className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200/80 px-6 backdrop-blur-xl lg:px-10"
      >
        <a
          href="#"
          aria-label="Dr. Shubham Patil — home"
          className="flex items-center gap-2 text-[0.95rem] font-semibold tracking-[-0.01em] text-slate-900"
        >
          <span className="text-accent">Dr. Shubham Patil</span>
        </a>

        <ul className="hidden items-center justify-center gap-7 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_12px_35px_-18px_rgba(37,99,235,0.9)] transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
          >
            Download CV
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 md:hidden"
          >
            Menu
          </button>
        </div>
      </motion.nav>

      <div
        id="mobile-menu"
        aria-hidden="true"
        className="hidden border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="block text-sm font-medium text-slate-600 hover:text-slate-900">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-medium text-white">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
