import { cardBase, sectionContainer, sectionPadding } from "@/components/SectionHeader";

const highlights = [
  {
    id: "experience",
    title: "8+",
    subtitle: "Years of Clinical Experience",
  },
  {
    id: "students",
    title: "200+",
    subtitle: "Students Mentored",
  },
  {
    id: "publications",
    title: "3+",
    subtitle: "Publications",
  },
  {
    id: "certification",
    title: "ACLS",
    subtitle: "Certified",
  },
] as const;

export default function QuickHighlights() {
  return (
    <section aria-label="Key highlights" className={sectionPadding}>
      <div className={sectionContainer}>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {highlights.map(({ id, title, subtitle }) => (
            <li key={id}>
              <article className={`${cardBase} flex h-full flex-col justify-center p-6 sm:p-8`}>
                <h3 className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  {title}
                </h3>
                <p className="mt-3 text-base font-medium text-muted">
                  {subtitle}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
