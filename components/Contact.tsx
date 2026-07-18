import { sectionContainer, sectionPadding, SectionHeading } from "@/components/SectionHeader";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
  },
  {
    id: "resume",
    label: "Resume",
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
          Let&apos;s build something meaningful
        </SectionHeading>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Open to thoughtful conversations about engineering, product, and
          building systems that make teams more effective.
        </p>

        <ul className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map(({ id, label, value, href }) => (
            <li key={id}>
              <a
                href={href}
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-surface px-6 py-5 text-left transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                {...(id !== "email" && id !== "resume"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {label}
                </span>
                <span className="mt-2 text-base text-foreground group-hover:text-foreground/90">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:your.email@example.com"
          className="mt-12 inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-medium text-white hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
