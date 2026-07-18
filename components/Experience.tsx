import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const experiences = [
  {
    id: "amazon",
    company: "Amazon",
    role: "Software Development Engineer II",
    period: "2023 — Present",
    highlights: [
      "Designed developer platforms",
      "Built backend services",
      "Improved engineering productivity",
      "Worked on AI-assisted automation",
    ],
  },
  {
    id: "previous",
    company: "Previous Company",
    role: "Software Engineer",
    period: "2021 — 2023",
    highlights: ["Worked on cloud backend systems"],
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
          Where I&apos;ve built
        </SectionHeading>

        <ol className="relative mt-16 space-y-16 border-l border-white/[0.06] pl-8 sm:pl-10">
          {experiences.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.125rem] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent sm:-left-[2.625rem]"
              />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-lg text-foreground/90">{item.role}</p>
                </div>
                <p className="text-sm text-muted">{item.period}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-lg leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan"
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
