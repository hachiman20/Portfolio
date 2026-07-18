import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  technology: string[];
  align: "left" | "right";
};

const caseStudies: CaseStudy[] = [
  {
    id: "country-launch",
    title: "Country Launch Automation",
    problem:
      "Launching products across new regions required manual coordination across multiple teams, leading to repeated work and inconsistent execution.",
    solution:
      "Built an automation platform that orchestrates launch workflows, validates prerequisites, and coordinates backend services through event-driven pipelines.",
    impact:
      "Reduced launch preparation time and eliminated repetitive manual steps across engineering teams.",
    technology: ["Java", "AWS Lambda", "DynamoDB", "EventBridge", "SQS"],
    align: "left",
  },
  {
    id: "ai-assistant",
    title: "AI Developer Assistant",
    problem:
      "Engineers spent significant time searching internal documentation and repeating common implementation patterns.",
    solution:
      "Designed an AI-assisted developer tool using retrieval-augmented generation to surface contextual answers and accelerate common engineering tasks.",
    impact:
      "Improved developer productivity by reducing time spent on documentation lookup and boilerplate implementation.",
    technology: ["Bedrock", "LLMs", "RAG", "Java", "React"],
    align: "right",
  },
  {
    id: "knowledge-platform",
    title: "Knowledge Platform",
    problem:
      "Engineering knowledge was fragmented across wikis, documents, and tribal knowledge, making onboarding and cross-team collaboration difficult.",
    solution:
      "Created a centralized knowledge platform with structured content, search, and integrations into existing developer workflows.",
    impact:
      "Made institutional knowledge easier to discover, share, and maintain across the organization.",
    technology: ["Spring Boot", "React", "AWS", "OpenSearch", "CDK"],
    align: "left",
  },
];

function CaseStudyTitle({ study }: { study: CaseStudy }) {
  return (
    <div>
      <h3
        id={`${study.id}-title`}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {study.title}
      </h3>

      <ul className="mt-6 flex flex-wrap gap-2">
        {study.technology.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/[0.06] px-3 py-1 text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyDetails({ study }: { study: CaseStudy }) {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Problem
        </h4>
        <p className="mt-3 text-lg leading-relaxed text-muted">{study.problem}</p>
      </div>
      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Solution
        </h4>
        <p className="mt-3 text-lg leading-relaxed text-muted">{study.solution}</p>
      </div>
      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Impact
        </h4>
        <p className="mt-3 text-lg leading-relaxed text-foreground/90">
          {study.impact}
        </p>
      </div>
    </div>
  );
}

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <article
      aria-labelledby={`${study.id}-title`}
      className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {study.align === "left" ? (
        <>
          <CaseStudyTitle study={study} />
          <CaseStudyDetails study={study} />
        </>
      ) : (
        <>
          <CaseStudyDetails study={study} />
          <CaseStudyTitle study={study} />
        </>
      )}
    </article>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Featured Engineering Work</SectionLabel>
        <SectionHeading id="projects-heading" className="mt-6">
          Systems that move teams forward
        </SectionHeading>

        <div className="mt-20 space-y-28 lg:space-y-36">
          {caseStudies.map((study) => (
            <CaseStudyBlock key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
