import type { ContactContent } from "@/types";

export const contactContent: ContactContent = {
  heading: "Let's Connect",
  description:
    "Open to opportunities in clinical practice, medical education, research collaboration, and healthcare leadership. Feel free to reach out.",
  links: [
    { id: "email", label: "Email", value: "dr.shubham@example.com", href: "mailto:dr.shubham@example.com" },
    { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/dr-shubham-patil", href: "https://linkedin.com/in/dr-shubham-patil" },
    { id: "location", label: "Location", value: "Ahmedabad, Gujarat", href: "#" },
    { id: "cv", label: "CV", value: "Download PDF", href: "#" },
  ],
};
