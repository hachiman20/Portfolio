"use client";

import { motion } from "framer-motion";
import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const expertise = [
  {
    id: "emergency",
    title: "Emergency Medicine",
    description: "Acute care, critical intervention, trauma management",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Cardiovascular assessment, acute coronary syndromes",
  },
  {
    id: "trauma",
    title: "Trauma Care",
    description: "Multitrauma management, emergency procedures",
  },
  {
    id: "education",
    title: "Medical Education",
    description: "Clinical teaching, curriculum development, mentoring",
  },
  {
    id: "research",
    title: "Research",
    description: "Clinical outcomes, evidence-based practice",
  },
  {
    id: "governance",
    title: "Clinical Governance",
    description: "Quality improvement, patient safety initiatives",
  },
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={sectionPadding}>
      <div className={`${sectionContainer} flex flex-col gap-16 lg:gap-20`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex max-w-3xl flex-col">
          <SectionLabel>About</SectionLabel>

          <SectionHeading id="about-heading" className="mt-6">
            Dedicated to Clinical Excellence
          </SectionHeading>

          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-slate-600">
            <p>
              With a strong foundation in emergency medicine and acute care, I am committed to delivering compassionate, evidence-based healthcare. My clinical practice emphasizes patient safety, teamwork, and continuous professional development.
            </p>
            <p>
              I believe that excellent healthcare requires a combination of clinical expertise, empathy, and a commitment to lifelong learning. I am passionate about mentoring the next generation of healthcare professionals and contributing to medical research.
            </p>
          </div>
        </motion.div>

        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">
            Areas of Expertise
          </h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {expertise.map(({ id, title, description }) => (
              <motion.li key={id} variants={cardVariants} whileHover={{ y: -4, scale: 1.01 }} className="h-full">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.28)]">
                  <h4 className="font-semibold tracking-[-0.01em] text-slate-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
