import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const skillCategories = [
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
] as const;

export default function ClinicalSkills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Skills</SectionLabel>
        <SectionHeading id="skills-heading" className="mt-6">
          Clinical Competencies
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map(({ id, title, items }) => (
            <li key={id}>
              <article className={`${cardBase} h-full p-6 sm:p-8`}>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
