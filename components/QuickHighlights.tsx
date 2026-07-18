import { aboutContent } from "@/data/about";
import { profile } from "@/data/profile";
import { cardBase, sectionContainer, sectionPadding } from "@/components/SectionHeader";
export default function QuickHighlights() { return <section aria-label={profile.highlightsAriaLabel} className={sectionPadding}><div className={sectionContainer}><ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{aboutContent.highlights.map(({ id, title, subtitle }) => <li key={id}><article className={`${cardBase} flex h-full flex-col justify-center p-6 sm:p-8`}><h3 className="text-4xl font-bold tracking-tight text-accent sm:text-5xl">{title}</h3><p className="mt-3 text-base font-medium text-muted">{subtitle}</p></article></li>)}</ul></div></section>; }
