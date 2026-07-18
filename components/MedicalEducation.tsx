import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const educationItems = [
  {
    id: "teaching",
    title: "Teaching Anatomy",
    institution: "Kaplan International",
    description: "Lectures and practical demonstrations in human anatomy for medical students. Developed curriculum materials and assessment methods.",
    period: "2022 — 2023",
  },
  {
    id: "mentoring",
    title: "Clinical Mentoring",
    institution: "Multiple Institutions",
    description: "Mentored 200+ medical students and junior residents in clinical practice, emergency care protocols, and professional development.",
    period: "2021 — Present",
  },
  {
    id: "consultant",
    title: "Independent Medical Consultant",
    institution: "Various Organizations",
    description: "Provided clinical expertise and consultation services for medical education programs and healthcare organizations.",
    period: "2020 — Present",
  },
] as const;

export default function MedicalEducation() {
  return (
    <section
      aria-labelledby="education-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Education</SectionLabel>
        <SectionHeading id="education-heading" className="mt-6">
          Medical Education & Leadership
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:gap-6">
          {educationItems.map(({ id, title, institution, description, period }) => (
            <li key={id}>
              <article className={`${cardBase} p-6 sm:p-8`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {institution}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {description}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted border-t border-slate-100 pt-5">
                  {period}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
