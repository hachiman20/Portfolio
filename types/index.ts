export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationContent {
  ariaLabel: string;
  homeAriaLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  menuLabel: string;
  downloadLabel: string;
  items: NavigationItem[];
}

export interface ProfileContent {
  name: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  heroSupportText: string;
  location: string;
  role: string;
  availability: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  imageAlt: string;
  cvHref: string;
  footerNote: string;
  footerAttribution: string;
  heroSectionLabel: string;
  highlightsAriaLabel: string;
  transitionEyebrow: string;
  transitionHeadline: string[];
}

export interface AboutHighlight {
  id: string;
  title: string;
  subtitle: string;
}

export interface AboutExpertiseItem {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  expertise: AboutExpertiseItem[];
  highlights: AboutHighlight[];
}

export interface ExperienceItem {
  id: string;
  hospital: string;
  role: string;
  department: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  description: string;
  period: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  year: number;
  summary: string;
  href: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  year: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface PhilosophyContent {
  eyebrow: string;
  headline: string[];
  body: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface ContactContent {
  heading: string;
  description: string;
  links: ContactLink[];
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
}
