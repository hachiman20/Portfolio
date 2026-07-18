"use client";

import { motion } from "framer-motion";
import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const publications = [
  {
    id: "pub1",
    title: "Emergency Department Protocols in Acute Coronary Syndrome",
    journal: "Journal of Emergency Medicine",
    year: 2023,
    summary: "A retrospective analysis of emergency department management protocols and patient outcomes in acute coronary syndrome cases.",
  },
  {
    id: "pub2",
    title: "Trauma Care Outcomes: A Multi-Center Study",
    journal: "Indian Journal of Surgery",
    year: 2022,
    summary: "Multi-center collaborative study examining trauma care protocols and their impact on patient morbidity and mortality rates.",
  },
  {
    id: "pub3",
    title: "Clinical Education: Teaching Methods in Medical Schools",
    journal: "Medical Education Today",
    year: 2021,
    summary: "Systematic review of evidence-based teaching methodologies and their effectiveness in clinical medical education.",
  },
] as const;

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Research</SectionLabel>
        <SectionHeading id="research-heading" className="mt-6">
          Publications & Research
        </SectionHeading>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid grid-cols-1 gap-5 sm:gap-6"
        >
          {publications.map(({ id, title, journal, year, summary }, index) => (
            <motion.li
              key={id}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, delay: index * 0.04 } } }}
              whileHover={{ y: -4, scale: 1.005 }}
            >
              <article className={`${cardBase} p-6 sm:p-8`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {summary}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-accent">{journal}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{year}</p>
                  </div>
                  <a href="#" className="inline-flex text-sm font-medium text-accent transition-colors hover:text-blue-700">
                    Read Publication →
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
