const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav
        aria-label="Primary"
        className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8"
      >
        <a
          href="#"
          aria-label="Dr. Shubham Patil — home"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="text-accent">Dr. Shubham Patil</span>
        </a>

        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
          >
            Download CV
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden="true"
        className="hidden border-t border-slate-200 px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="block text-sm font-medium text-muted hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
