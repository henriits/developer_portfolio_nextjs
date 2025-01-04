"use client";

import HeroSection from "./home/components/HeroSection";
import AboutSection from "./home/components/AboutSection";
import ExperienceSection from "./home/components/ExperienceSection";
import TechStackSection from "./home/components/TechStackSection";
import ProjectSection from "@/app/home/components/ProjectSection";
import ContactForm from "./home/components/ContactForm";
import Footer from "./home/components/Footer";

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
