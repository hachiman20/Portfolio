type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ id, children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export const sectionContainer = "mx-auto w-full max-w-7xl";
export const sectionPadding = "px-6 py-20 lg:px-8 lg:py-28";
export const cardBase =
  "rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md hover:border-slate-300";
