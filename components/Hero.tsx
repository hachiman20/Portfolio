function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.06] bg-surface lg:max-w-none"
    >
      <div className="hero-grid absolute inset-0" />

      <div className="hero-orb-blue absolute -right-16 -top-16 h-72 w-72 rounded-full blur-3xl" />
      <div className="hero-orb-cyan absolute -bottom-20 -left-12 h-64 w-64 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-ring relative h-48 w-48 rounded-full p-[1px] sm:h-56 sm:w-56">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-surface">
            <div className="h-24 w-24 rounded-full border border-white/10 bg-gradient-to-br from-accent/20 to-accent-cyan/10 sm:h-28 sm:w-28" />
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-accent" />
      <div className="absolute bottom-12 right-10 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
      <div className="absolute right-16 top-1/3 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-1/3 left-12 h-px w-16 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
        <div className="scroll-indicator-wheel h-1.5 w-1 rounded-full bg-muted" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center px-6 pt-[72px] lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 py-20 md:grid-cols-2 md:gap-12 lg:gap-20 lg:py-28">
        <div className="flex flex-col">
          <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-muted">
            <span aria-hidden="true">👋</span>
            Hello, I&apos;m
          </span>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Anurag Giri
          </h1>

          <p className="mt-6 text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl">
            Software Development Engineer II
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Building AI-powered developer tools, backend platforms, and
            automation systems that simplify complex engineering workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-white hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 px-6 text-sm font-medium text-foreground hover:border-white/20 hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-10 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-3">
            <span>
              <span aria-hidden="true">📍</span> Hyderabad, India
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              •
            </span>
            <span>Available for collaboration</span>
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
