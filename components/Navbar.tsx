const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] bg-transparent">
      <nav
        aria-label="Primary"
        className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8"
      >
        <a
          href="#"
          aria-label="Anurag Giri — home"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] text-sm font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          AG
        </a>

        <ul className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            className="inline-flex items-center justify-center rounded-lg border border-white/[0.06] px-4 py-2 text-sm font-medium text-foreground md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden="true"
        className="hidden border-t border-white/[0.06] px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="block text-sm text-muted">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
