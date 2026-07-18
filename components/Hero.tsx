import Image from "next/image";

function HeroImage() {
  return (
    <div
      aria-hidden="false"
      className="relative aspect-square w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-lg hover:shadow-xl transition-all duration-500 lg:max-w-none"
    >
      <Image
        src="/portrait.jpg"
        alt="Dr. Shubham Patil - Professional Portrait"
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-300 p-1.5">
        <div className="scroll-indicator-wheel h-1.5 w-1 rounded-full bg-slate-400" />
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
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-blue-50 px-4 py-2 text-sm font-medium text-accent">
            <span aria-hidden="true">📋</span>
            MBBS • Acute Care Clinician
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-6xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          >
            Dr. Shubham Patil
          </h1>

          <p className="mt-6 text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
            Delivering compassionate, evidence-based healthcare while contributing to clinical excellence, education and research.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Experienced Medical Officer with expertise in emergency medicine, trauma care, cardiology and medical education. Passionate about improving patient outcomes through evidence-based practice, teamwork and continuous learning.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-white hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Experience
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 px-6 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download CV
            </a>
          </div>

          <p className="mt-10 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-4">
            <span className="flex items-center gap-2">
              <span aria-hidden="true">📍</span> Ahmedabad, Gujarat
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              •
            </span>
            <span>Medical Officer</span>
            <span aria-hidden="true" className="hidden sm:inline">
              •
            </span>
            <span>Open to International Opportunities</span>
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <HeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
