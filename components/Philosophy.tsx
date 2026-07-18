"use client";
import { motion } from "framer-motion";
import { philosophyContent } from "@/data/philosophy";
import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";
export default function Philosophy() { return <section id="principles" aria-labelledby="principles-heading" className={sectionPadding}><div className={`${sectionContainer} flex flex-col items-center text-center`}><motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}><SectionLabel>{philosophyContent.eyebrow}</SectionLabel><SectionHeading id="principles-heading" className="mt-6 max-w-3xl">{philosophyContent.headline.map((line) => <span key={line} className="block">{line}</span>)}</SectionHeading><p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">{philosophyContent.body}</p></motion.div></div></section>; }
