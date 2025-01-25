import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactForm from "../components/sections/ContactForm";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectSection />
            <ContactForm />
        </div>
    );
}
