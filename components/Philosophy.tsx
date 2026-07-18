import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const principles = [
  {
    id: "automate",
    title: "Automate repetitive work",
    description:
      "Engineering time is most valuable when spent on problems that require judgment, not repetition.",
  },
  {
    id: "simplicity",
    title: "Prefer simplicity",
    description:
      "The best systems are easy to reason about, change confidently, and explain to others.",
  },
  {
    id: "impact",
    title: "Measure impact",
    description:
      "Good engineering decisions are grounded in outcomes, not activity or complexity.",
  },
  {
    id: "maintainability",
    title: "Design for maintainability",
    description:
      "Software outlives its first implementation. It should remain clear long after it ships.",
  },
] as const;

export default function Philosophy() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Engineering Philosophy</SectionLabel>
        <SectionHeading id="principles-heading" className="mt-6 max-w-3xl">
          Principles that guide how I build
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {principles.map(({ id, title, description }) => (
            <li key={id}>
              <article className={`${cardBase} h-full p-8 lg:p-10`}>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
