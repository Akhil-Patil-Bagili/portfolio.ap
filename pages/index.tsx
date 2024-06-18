import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { HeroSection } from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import {TopBar} from "../components/TopBar";
import {ProjectsSection} from "../components/ProjectsSection";
import {ContactSection} from "../components/ContactSection";
import {Footer} from "../components/Footer"

export default function Home() {
  return (
   <div className="container-md">
    <TopBar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
   </div>
  );
}
