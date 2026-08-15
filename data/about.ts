import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  eyebrow: "Professional Summary",
  heading: "Patient-Centered Acute Care",
  paragraphs: [
    "Highly motivated Acute Care Clinician dedicated to delivering patient-centered, high-quality medical services within the Australian healthcare system.",
    "Grounded in safe, evidence-based practice and clinical governance, I combine acute trauma and emergency triage experience with a passion for clinical research and medical education.",
  ],
  expertise: [
    { id: "acute-care", title: "Acute & Emergency Care", description: "Acute trauma, emergency triage, stabilization and high-acuity clinical care" },
    { id: "cardiology", title: "Cardiology & Critical Care", description: "ACS, arrhythmias, shock and multidisciplinary cardiac care" },
    { id: "procedures", title: "Clinical Procedures", description: "Suturing, wound debridement, IV cannulation, catheterisation and NG tube insertion" },
    { id: "governance", title: "Clinical Governance", description: "Evidence-based decision-making, records standards and quality improvement" },
    { id: "education", title: "Medical Education", description: "USMLE-aligned content authoring, anatomy tutoring and student mentoring" },
    { id: "research", title: "Clinical Research", description: "Research, publications and evidence-based practice" },
  ],
  highlights: [
    { id: "hours", title: "3+ Years", subtitle: "Clinical experience" },
    { id: "students", title: "200+", subtitle: "Students instructed" },
    { id: "publications", title: "3", subtitle: "Publications" },
    { id: "registration", title: "AMC", subtitle: "MCQ Examination cleared" },
  ],
};
