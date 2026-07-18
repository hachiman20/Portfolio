const skills = [
  "Skill One",
  "Skill Two",
  "Skill Three",
  "Skill Four",
  "Skill Five",
  "Skill Six",
  "Skill Seven",
  "Skill Eight",
  "Skill Nine",
  "Skill Ten",
  "Skill Eleven",
  "Skill Twelve",
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-zinc-800 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          Skills
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-center text-sm text-zinc-300">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
