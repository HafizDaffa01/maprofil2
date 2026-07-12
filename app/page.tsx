import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SulfurShowcase from "@/components/sections/SulfurShowcase";
import TechStack from "@/components/sections/TechStack";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Timeline from "@/components/sections/Timeline";
import TinkersCorner from "@/components/sections/TinkersCorner";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SulfurShowcase />
        <TechStack />
        <InfrastructureSection />
        <ProjectsSection />
        <Timeline />
        <TinkersCorner />
        <Footer />
      </main>
    </>
  );
}
