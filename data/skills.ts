import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
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
];
