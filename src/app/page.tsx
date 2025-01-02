"use client";

import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import ExperienceSection from "./home/ExperienceSection";
import TechStackSection from "./home/TechStackSection";
import ProjectSection from "@/app/home/ProjectSection";
import ContactForm from "./home/ContactForm";
import Footer from "./home/Footer";

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
