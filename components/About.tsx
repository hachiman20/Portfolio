"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/about";
import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const cardVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function About() {
  return <section id="about" aria-labelledby="about-heading" className={sectionPadding}><div className={`${sectionContainer} flex flex-col gap-16 lg:gap-20`}>
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex max-w-3xl flex-col">
      <SectionLabel>{aboutContent.eyebrow}</SectionLabel><SectionHeading id="about-heading" className="mt-6">{aboutContent.heading}</SectionHeading>
      <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-slate-600">{aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </motion.div>
    <div><h3 className="text-2xl font-semibold tracking-[-0.01em] text-slate-900">Areas of Expertise</h3><motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {aboutContent.expertise.map(({ id, title, description }) => <motion.li key={id} variants={cardVariants} whileHover={{ y: -4, scale: 1.01 }} className="h-full"><div className="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.28)]"><h4 className="font-semibold tracking-[-0.01em] text-slate-900">{title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div></motion.li>)}
    </motion.ul></div>
  </div></section>;
}
