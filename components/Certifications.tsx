import { cardBase, sectionContainer, sectionPadding, SectionHeading, SectionLabel } from "@/components/SectionHeader";

const certifications = [
  {
    id: "acls",
    title: "Advanced Cardiac Life Support",
    issuer: "American Heart Association",
    status: "Active",
    year: 2024,
  },
  {
    id: "bls",
    title: "Basic Life Support",
    issuer: "American Heart Association",
    status: "Active",
    year: 2024,
  },
  {
    id: "oet",
    title: "Occupational English Test - Grade B",
    issuer: "OET Global",
    status: "Active",
    year: 2023,
  },
  {
    id: "amc",
    title: "AMC MCQ Examination",
    issuer: "Australian Medical Council",
    status: "Completed",
    year: 2023,
  },
  {
    id: "ahpra",
    title: "AHPRA Eligibility",
    issuer: "Australian Health Practitioner Regulation Agency",
    status: "Eligible",
    year: 2023,
  },
  {
    id: "mbbs",
    title: "Bachelor of Medicine, Bachelor of Surgery",
    issuer: "Medical Institution",
    status: "Completed",
    year: 2021,
  },
] as const;

export default function Certifications() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className={sectionPadding}
    >
      <div className={sectionContainer}>
        <SectionLabel>Credentials</SectionLabel>
        <SectionHeading id="certifications-heading" className="mt-6">
          Certifications & Qualifications
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {certifications.map(({ id, title, issuer, status, year }) => (
            <li key={id}>
              <article className={`${cardBase} h-full p-6 sm:p-7`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {issuer}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {status}
                  </span>
                </div>
                <p className="mt-4 text-xs text-muted border-t border-slate-100 pt-4">
                  {year}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
