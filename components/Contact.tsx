"use client";

import { motion } from "framer-motion";
import { sectionContainer, sectionPadding, SectionHeading } from "@/components/SectionHeader";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "dr.shubham@example.com",
    href: "mailto:dr.shubham@example.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/dr-shubham-patil",
    href: "https://linkedin.com/in/dr-shubham-patil",
  },
  {
    id: "location",
    label: "Location",
    value: "Ahmedabad, Gujarat",
    href: "#",
  },
  {
    id: "cv",
    label: "CV",
    value: "Download PDF",
    href: "#",
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={sectionPadding}
    >
      <div className={`${sectionContainer} flex flex-col items-center text-center`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
          <SectionHeading id="contact-heading">Let&apos;s Connect</SectionHeading>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Open to opportunities in clinical practice, medical education, research collaboration, and healthcare leadership. Feel free to reach out.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {contactLinks.map(({ id, label, value, href }) => (
            <motion.li
              key={id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <a href={href} className="inline-flex h-full w-full flex-col items-start rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.25)] transition-all duration-200 hover:border-slate-300">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
