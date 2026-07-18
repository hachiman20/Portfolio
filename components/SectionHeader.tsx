import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ id, children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export const sectionContainer = "mx-auto w-full max-w-7xl";
export const sectionPadding = "px-6 py-20 sm:px-8 lg:px-10 lg:py-28";
export const cardBase =
  "rounded-[1.75rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.34)]";
