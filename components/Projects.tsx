const projects = [
  {
    id: "project-1",
    title: "Project Title",
    description:
      "Placeholder description for a project. Summarize the problem, your approach, and the outcome.",
  },
  {
    id: "project-2",
    title: "Project Title",
    description:
      "Placeholder description for a project. Summarize the problem, your approach, and the outcome.",
  },
  {
    id: "project-3",
    title: "Project Title",
    description:
      "Placeholder description for a project. Summarize the problem, your approach, and the outcome.",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-zinc-800 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Projects
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-zinc-50">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
