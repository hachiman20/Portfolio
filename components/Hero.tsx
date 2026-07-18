"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative aspect-square w-full max-w-lg overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)] lg:max-w-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_40%)]" />
      <Image
        src="/portrait.jpg"
        alt="Dr. Shubham Patil - Professional Portrait"
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-300/80 p-1.5">
        <div className="scroll-indicator-wheel h-1.5 w-1 rounded-full bg-slate-400" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative flex min-h-screen items-center px-6 pt-[76px] sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 py-20 md:grid-cols-2 md:gap-12 lg:gap-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-blue-50/80 px-4 py-2 text-sm font-medium text-accent shadow-sm">
            <span aria-hidden="true">●</span>
            MBBS • Acute Care Clinician
          </span>

          <h1 id="hero-heading" className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-slate-900 sm:text-6xl lg:text-[4.4rem]">
            Dr. Shubham Patil
          </h1>

          <p className="mt-6 text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl">
            Delivering compassionate, evidence-based healthcare while contributing to clinical excellence, education and research.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Experienced Medical Officer with expertise in emergency medicine, trauma care, cardiology and medical education. Passionate about improving patient outcomes through evidence-based practice, teamwork and continuous learning.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white shadow-[0_14px_40px_-18px_rgba(37,99,235,0.9)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Experience
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 text-sm font-medium text-slate-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download CV
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-white/80 p-3 text-sm text-slate-600 shadow-sm">
            <span className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5">
              <span aria-hidden="true">📍</span> Ahmedabad, Gujarat
            </span>
            <span className="rounded-full bg-slate-50 px-3 py-1.5">Medical Officer</span>
            <span className="rounded-full bg-slate-50 px-3 py-1.5">Open to International Opportunities</span>
          </div>
        </motion.div>

        <div className="flex items-center justify-center md:justify-end">
          <HeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
