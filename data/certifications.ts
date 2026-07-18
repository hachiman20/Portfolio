import type { CertificationItem } from "@/types";

export const certifications: CertificationItem[] = [
  { id: "amc", title: "Australian Medical Council (AMC) MCQ Examination", issuer: "Australian Medical Council", status: "Successfully cleared", year: 2025 },
  { id: "oet", title: "Occupational English Test (OET)", issuer: "OET", status: "Grade B across all sub-tests", year: 2025 },
  { id: "ahpra", title: "AHPRA Standard Pathway", issuer: "Australian Health Practitioner Regulation Agency", status: "Fully eligible for Limited Registration", year: 2025 },
  { id: "acls", title: "ACLS & BLS Recertification", issuer: "American Heart Association standards", status: "25 CPD hours", year: 2026 },
  { id: "mbbs", title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)", issuer: "GMERS Medical College, Himmatnagar", status: "Completed rotating internship", year: 2023 },
];
