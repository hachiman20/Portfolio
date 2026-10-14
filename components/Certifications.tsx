"use client";
import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";
export default function Certifications() {
  const governanceItems = [
    "Antimicrobial Stewardship (AMS): Served as Lead Organizer for 'World Antimicrobial Resistance (AMR) Awareness Week' (2025) at GMERS Himmatnagar, delivering targeted educational workshops to clinical and ward staff on rational prescribing practices.",
    "Clinical Mentorship: Facilitated ongoing clinical skills seminars for junior staff and auxiliary medical personnel, focusing on sterile technique, maternal emergency protocols, and vaccine cold chain management.",
    "Community Leadership: Led the 'Family Adoption Program' for the underserved rural population in Ahmedabad."
  ];

  return <section aria-labelledby="certifications-heading" className={sectionPadding}><div className={sectionContainer}><SectionLabel>Credentials</SectionLabel><SectionHeading id="certifications-heading" className="mt-6">Certifications & Qualifications</SectionHeading><motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">{certifications.map(({ id, title, issuer, status, year }) => <motion.li key={id} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }} whileHover={{ y: -4, scale: 1.01 }}><article className={`${cardBase} h-full p-6 sm:p-7`}><div className="flex items-start justify-between gap-3"><div className="flex-1"><h3 className="font-semibold tracking-[-0.01em] text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-600">{issuer}</p></div><span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{status}</span></div><p className="mt-4 border-t border-slate-100 pt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{year}</p></article></motion.li>)}</motion.ul>

        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">Clinical Governance & Quality Improvement</h3>
          </div>
          <ul className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)]">
            {governanceItems.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-600">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div></section>;
}
