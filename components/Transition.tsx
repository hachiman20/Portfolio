export default function Transition() {
  return (
    <section
      aria-labelledby="transition-heading"
      className="relative flex min-h-[35vh] items-center px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="transition-glow pointer-events-none absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center py-20 text-center lg:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Scroll to explore
        </p>

        <h2
          id="transition-heading"
          className="mt-8 max-w-3xl text-3xl font-semibold leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Building software
          <br />
          that scales people,
          <br />
          not just systems.
        </h2>

        <div
          aria-hidden="true"
          className="mt-10 h-px w-[120px] bg-white/20"
        />
      </div>
    </section>
  );
}
