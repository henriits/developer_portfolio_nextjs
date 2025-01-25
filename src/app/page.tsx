import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}
