import type { NavigationContent } from "@/types";

export const navigation: NavigationContent = {
  ariaLabel: "Primary",
  homeAriaLabel: "Dr. Shubham Patil — home",
  menuOpenLabel: "Open navigation menu",
  menuCloseLabel: "Close navigation menu",
  menuLabel: "Menu",
  downloadLabel: "Download CV",
  items: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
