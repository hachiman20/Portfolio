"use client";

import { motion } from "framer-motion";
import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const skillCategories = [
  {
    id: "emergency",
    title: "Emergency Medicine",
    items: ["Acute stabilization", "Advanced life support", "Trauma triage", "Emergency procedures"],
  },
  {
    id: "cardiology",
    title: "Cardiology",
    items: ["Electrocardiography", "Echocardiography", "Arrhythmia management", "ACS protocols"],
  },
  {
    id: "critical",
    title: "Critical Care",
    items: ["Ventilation support", "Hemodynamic monitoring", "Sepsis management", "Multi-organ support"],
  },
  {
    id: "procedures",
    title: "Clinical Procedures",
    items: ["Intubation", "Central line placement", "Chest tube insertion", "Lumbar puncture"],
  },
  {
    id: "documentation",
    title: "Medical Documentation",
    items: ["Clinical notes", "Procedure reports", "Case summaries", "Medical records management"],
  },
  {
    id: "digital",
    title: "Digital Healthcare",
    items: ["EHR systems", "Clinical databases", "Telemedicine", "Health IT compliance"],
  },
] as const;

export default function ClinicalSkills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Skills</SectionLabel>
        <SectionHeading id="skills-heading" className="mt-6">
          Clinical Competencies
        </SectionHeading>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {skillCategories.map(({ id, title, items }) => (
            <motion.li
              key={id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <article className={`${cardBase} h-full p-6 sm:p-8`}>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-900">
                  {title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
