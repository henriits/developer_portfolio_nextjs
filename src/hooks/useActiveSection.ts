import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>("");
    const pathname = usePathname();

    useEffect(() => {
        // Only set up observers if we're on the home page
        if (pathname !== "/") {
            return;
        }

        const observers = new Map();

        const sections = ["home", "about", "experience", "projects", "contact"];

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            threshold: 0.5,
        };

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const observer = new IntersectionObserver(
                    observerCallback,
                    observerOptions
                );
                observer.observe(element);
                observers.set(section, observer);
            }
        });

        // Cleanup function
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [pathname]); // Re-run when pathname changes

    return activeSection;
};
