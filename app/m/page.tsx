import MobileHeroSection from "@/components/sections/mobile/MobileHeroSection";
import MobileAboutSection from "@/components/sections/mobile/MobileAboutSection";
import MobileExperienceSection from "@/components/sections/mobile/MobileExperienceSection";
import MobileSulfurShowcase from "@/components/sections/mobile/MobileSulfurShowcase";
import MobileTechStack from "@/components/sections/mobile/MobileTechStack";
import MobileInfrastructureSection from "@/components/sections/mobile/MobileInfrastructureSection";
import MobileProjectsSection from "@/components/sections/mobile/MobileProjectsSection";
import MobileTimeline from "@/components/sections/mobile/MobileTimeline";
import MobileTinkersCorner from "@/components/sections/mobile/MobileTinkersCorner";
import { Navbar } from "@/components/layout/Navbar";

export default function MobilePage() {
  return (
    <div className="mobile-page min-h-screen">
      <Navbar />
      <main>
        <MobileHeroSection />
        <MobileAboutSection />
        <MobileExperienceSection />
        <MobileSulfurShowcase />
        <MobileTechStack />
        <MobileInfrastructureSection />
        <MobileProjectsSection />
        <MobileTimeline />
        <MobileTinkersCorner />
      </main>
    </div>
  );
}