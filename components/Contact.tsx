import { sectionContainer, sectionPadding, SectionHeading } from "@/components/SectionHeader";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "dr.shubham@example.com",
    href: "mailto:dr.shubham@example.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/dr-shubham-patil",
    href: "https://linkedin.com/in/dr-shubham-patil",
  },
  {
    id: "location",
    label: "Location",
    value: "Ahmedabad, Gujarat",
    href: "#",
  },
  {
    id: "cv",
    label: "CV",
    value: "Download PDF",
    href: "#",
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={sectionPadding}
    >
      <div className={`${sectionContainer} flex flex-col items-center text-center`}>
        <SectionHeading id="contact-heading">
          Let&apos;s Connect
        </SectionHeading>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Open to opportunities in clinical practice, medical education, research collaboration, and healthcare leadership. Feel free to reach out.
        </p>

        <ul className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map(({ id, label, value, href }) => (
            <li key={id}>
              <a
                href={href}
                className="inline-flex h-full w-full flex-col items-start rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {value}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
