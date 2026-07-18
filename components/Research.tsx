import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const publications = [
  {
    id: "pub1",
    title: "Emergency Department Protocols in Acute Coronary Syndrome",
    journal: "Journal of Emergency Medicine",
    year: 2023,
    summary: "A retrospective analysis of emergency department management protocols and patient outcomes in acute coronary syndrome cases.",
  },
  {
    id: "pub2",
    title: "Trauma Care Outcomes: A Multi-Center Study",
    journal: "Indian Journal of Surgery",
    year: 2022,
    summary: "Multi-center collaborative study examining trauma care protocols and their impact on patient morbidity and mortality rates.",
  },
  {
    id: "pub3",
    title: "Clinical Education: Teaching Methods in Medical Schools",
    journal: "Medical Education Today",
    year: 2021,
    summary: "Systematic review of evidence-based teaching methodologies and their effectiveness in clinical medical education.",
  },
] as const;

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Research</SectionLabel>
        <SectionHeading id="research-heading" className="mt-6">
          Publications & Research
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:gap-6">
          {publications.map(({ id, title, journal, year, summary }) => (
            <li key={id}>
              <article className={`${cardBase} p-6 sm:p-8`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {summary}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 pt-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-accent">
                      {journal}
                    </p>
                    <p className="text-xs text-muted">{year}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex text-sm font-medium text-accent hover:text-blue-700 transition-colors"
                  >
                    Read Publication →
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
