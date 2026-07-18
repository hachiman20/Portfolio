import { sectionPadding } from "@/components/SectionHeader";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${sectionPadding} border-t border-white/[0.06]`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-10 text-sm text-muted sm:flex-row">
        <p>&copy; {year} Anurag Giri. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
