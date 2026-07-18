import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const techCategories = [
  {
    id: "backend",
    title: "Backend",
    items: ["Java", "Spring Boot", "AWS", "Lambda", "DynamoDB"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: ["SQS", "SNS", "EventBridge", "CDK"],
  },
  {
    id: "ai",
    title: "AI",
    items: ["Bedrock", "LLMs", "RAG", "Prompt Engineering"],
  },
] as const;

export default function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Technology Stack</SectionLabel>
        <SectionHeading id="tech-heading" className="mt-6">
          Tools I work with
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {techCategories.map(({ id, title, items }) => (
            <li key={id}>
              <article className={`${cardBase} h-full p-6 sm:p-8`}>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-base leading-relaxed text-muted"
                    >
                      {item}
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
