import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  { id: "core-emergency", title: "Core & Emergency Skills", items: ["Advanced Cardiac Life Support (ACLS)", "Basic Life Support (Adult & Paediatric)", "Triage", "Surgical suturing", "Wound debridement", "IV cannulation (adult)", "Urinary catheterisation", "NG tube insertion"] },
  { id: "assisted", title: "Specialised / Assisted Skills", items: ["Neonatal resuscitation", "Burns management", "Endotracheal intubation", "Central line insertion", "Intercostal catheter (ICD) insertion", "Labour management", "Peritoneal drain management", "Autopsies under senior supervision"] },
  { id: "administrative", title: "Administrative Skills", items: ["iEMR", "AI applications", "Word processing", "Clinical record standards", "Medico-legal documentation"] },
];
