import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const metrics = [
  {
    id: "years",
    title: "4+",
    subtitle: "Years Building Software",
  },
  {
    id: "features",
    title: "20+",
    subtitle: "Engineering Features Delivered",
  },
  {
    id: "focus",
    title: "Backend • AI • Cloud",
    subtitle: "Primary Focus",
  },
  {
    id: "learning",
    title: "Always Learning",
    subtitle: "Building every week",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={sectionPadding}
    >
      <div className={`${sectionContainer} grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-12 lg:gap-20`}>
        <div className="flex flex-col">
          <SectionLabel>About</SectionLabel>

          <SectionHeading id="about-heading" className="mt-6">
            Engineering with curiosity,
            <br />
            building with purpose.
          </SectionHeading>

          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted">
            <p>
              I enjoy building backend platforms, developer tools, and
              AI-assisted workflows that remove repetitive engineering effort
              and help teams move faster.
            </p>
            <p>
              My experience spans distributed systems, cloud infrastructure,
              automation platforms, AI, and modern web technologies.
            </p>
            <p>
              I believe software should be simple to understand, easy to evolve,
              and enjoyable to maintain.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {metrics.map(({ id, title, subtitle }) => (
            <li key={id}>
              <article className={`${cardBase} flex h-full flex-col p-6 sm:p-8`}>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
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
