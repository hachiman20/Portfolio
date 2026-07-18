import About from "@/components/About";
import Certifications from "@/components/Certifications";
import ClinicalSkills from "@/components/ClinicalSkills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MedicalEducation from "@/components/MedicalEducation";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import QuickHighlights from "@/components/QuickHighlights";
import Research from "@/components/Research";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickHighlights />
        <Transition />
        <About />
        <Experience />
        <ClinicalSkills />
        <Research />
        <MedicalEducation />
        <Certifications />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
