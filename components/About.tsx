import { sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const expertise = [
  {
    id: "emergency",
    title: "Emergency Medicine",
    description: "Acute care, critical intervention, trauma management",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Cardiovascular assessment, acute coronary syndromes",
  },
  {
    id: "trauma",
    title: "Trauma Care",
    description: "Multitrauma management, emergency procedures",
  },
  {
    id: "education",
    title: "Medical Education",
    description: "Clinical teaching, curriculum development, mentoring",
  },
  {
    id: "research",
    title: "Research",
    description: "Clinical outcomes, evidence-based practice",
  },
  {
    id: "governance",
    title: "Clinical Governance",
    description: "Quality improvement, patient safety initiatives",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={sectionPadding}
    >
      <div className={`${sectionContainer} flex flex-col gap-16 lg:gap-20`}>
        <div className="flex flex-col max-w-3xl">
          <SectionLabel>About</SectionLabel>

          <SectionHeading id="about-heading" className="mt-6">
            Dedicated to Clinical Excellence
          </SectionHeading>

          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted">
            <p>
              With a strong foundation in emergency medicine and acute care, I am committed to delivering compassionate, evidence-based healthcare. My clinical practice emphasizes patient safety, teamwork, and continuous professional development.
            </p>
            <p>
              I believe that excellent healthcare requires a combination of clinical expertise, empathy, and a commitment to lifelong learning. I am passionate about mentoring the next generation of healthcare professionals and contributing to medical research.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Areas of Expertise
          </h3>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map(({ id, title, description }) => (
              <li key={id}>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
