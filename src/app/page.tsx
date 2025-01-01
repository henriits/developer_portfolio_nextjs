"use client";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import TechStackSection from "../components/TechStackSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ProjectSection from "@/components/ProjectSection";
import { SessionProvider } from "next-auth/react";

export default function Home() {
    return (
        <div>
            <SessionProvider>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <TechStackSection />
                <ProjectSection />
                <ContactForm />
                <Footer />
            </SessionProvider>
        </div>
    );
}
