import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Transition />
        <About />
        <Experience />
        <FeaturedWork />
        <Philosophy />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
