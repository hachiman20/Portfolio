"use client";

import { motion } from "framer-motion";
import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

export default function Philosophy() {
  return (
    <section id="principles" aria-labelledby="principles-heading" className={sectionPadding}>
      <div className={`${sectionContainer} flex flex-col items-center text-center`}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
          <SectionLabel>Philosophy</SectionLabel>

          <SectionHeading id="principles-heading" className="mt-6 max-w-3xl">
            <span className="block">Compassion.</span>
            <span className="block">Evidence.</span>
            <span className="block">Continuous Learning.</span>
          </SectionHeading>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
            My approach to healthcare is founded on ethical practice, patient-centered care, and a commitment to lifelong learning. I believe that the most effective medical care combines scientific evidence with genuine compassion for patients. Through collaboration with colleagues, engagement with the latest research, and a dedication to continuous improvement, I strive to deliver excellence in every clinical encounter and contribute meaningfully to the healthcare profession.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
