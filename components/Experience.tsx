import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const experiences = [
  {
    id: "medical-officer-cardio",
    hospital: "U.N. Mehta Institute of Cardiology",
    role: "Medical Officer",
    department: "Department of Cardiology",
    period: "2023 — Present",
    highlights: [
      "Acute coronary syndrome management",
      "Cardiac emergency procedures",
      "Echocardiography interpretation",
      "Clinical research collaboration",
    ],
  },
  {
    id: "medical-officer-trauma",
    hospital: "Civil Hospital Nadiad",
    role: "Medical Officer",
    department: "Emergency & Trauma",
    period: "2022 — 2023",
    highlights: [
      "Multitrauma case management",
      "Emergency interventions",
      "Triage and stabilization",
      "Team leadership",
    ],
  },
  {
    id: "medical-officer-general",
    hospital: "GMERS Hospital",
    role: "Junior Resident",
    department: "General Medicine",
    period: "2021 — 2022",
    highlights: [
      "General clinical practice",
      "Patient management",
      "Ward responsibilities",
      "Clinical rotations",
    ],
  },
] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Experience</SectionLabel>
        <SectionHeading id="experience-heading" className="mt-6">
          Clinical Journey
        </SectionHeading>

        <ol className="relative mt-16 space-y-16 border-l border-slate-200 pl-8 sm:pl-10">
          {experiences.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.125rem] top-2 h-4 w-4 rounded-full border-2 border-white bg-accent sm:-left-[2.625rem]"
              />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {item.hospital}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-accent">{item.role}</p>
                  <p className="mt-1 text-sm text-muted">{item.department}</p>
                </div>
                <p className="text-sm font-medium text-muted">{item.period}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-base leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
