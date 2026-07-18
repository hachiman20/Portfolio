import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  eyebrow: "About",
  heading: "Dedicated to Clinical Excellence",
  paragraphs: [
    "With a strong foundation in emergency medicine and acute care, I am committed to delivering compassionate, evidence-based healthcare. My clinical practice emphasizes patient safety, teamwork, and continuous professional development.",
    "I believe that excellent healthcare requires a combination of clinical expertise, empathy, and a commitment to lifelong learning. I am passionate about mentoring the next generation of healthcare professionals and contributing to medical research.",
  ],
  expertise: [
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
  ],
  highlights: [
    { id: "experience", title: "8+", subtitle: "Years of Clinical Experience" },
    { id: "students", title: "200+", subtitle: "Students Mentored" },
    { id: "publications", title: "3+", subtitle: "Publications" },
    { id: "certification", title: "ACLS", subtitle: "Certified" },
  ],
};
