"use client";

import { motion } from "framer-motion";
import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const educationItems = [
  {
    id: "teaching",
    title: "Teaching Anatomy",
    institution: "Kaplan International",
    description: "Lectures and practical demonstrations in human anatomy for medical students. Developed curriculum materials and assessment methods.",
    period: "2022 — 2023",
  },
  {
    id: "mentoring",
    title: "Clinical Mentoring",
    institution: "Multiple Institutions",
    description: "Mentored 200+ medical students and junior residents in clinical practice, emergency care protocols, and professional development.",
    period: "2021 — Present",
  },
  {
    id: "consultant",
    title: "Independent Medical Consultant",
    institution: "Various Organizations",
    description: "Provided clinical expertise and consultation services for medical education programs and healthcare organizations.",
    period: "2020 — Present",
  },
] as const;

export default function MedicalEducation() {
  return (
    <section
      aria-labelledby="education-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Education</SectionLabel>
        <SectionHeading id="education-heading" className="mt-6">
          Medical Education & Leadership
        </SectionHeading>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid grid-cols-1 gap-5 sm:gap-6"
        >
          {educationItems.map(({ id, title, institution, description, period }) => (
            <motion.li
              key={id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
              whileHover={{ y: -4, scale: 1.005 }}
            >
              <article className={`${cardBase} p-6 sm:p-8`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{institution}</p>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
                  </div>
                </div>
                <p className="mt-5 border-t border-slate-100 pt-5 text-sm text-slate-500">{period}</p>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
