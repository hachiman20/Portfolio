import { profile } from "@/data/profile";
import { sectionPadding } from "@/components/SectionHeader";
export default function Footer() { const year = new Date().getFullYear(); return <footer className={`${sectionPadding} border-t border-slate-200/80 bg-white/50 backdrop-blur-sm`}><div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-10 text-sm text-slate-500 sm:flex-row"><p>© {year} {profile.name}. All rights reserved.</p><p>{profile.footerNote}</p></div></footer>; }
