import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import TechStackSection from "../components/sections/TechStackSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/sections/Footer";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechStackSection />
            <ProjectSection />
            <ContactForm />
            <Footer />
        </div>
    );
}
