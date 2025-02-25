"use client";
import { BackgroundBeamsWithCollision } from "@/components/animations/BackgroundBeamsWithCollision";
import { FlipWords } from "@/components/animations/FlipWords";
import { fontClasses } from "@/utils/fonts";

const HeroSection = () => {
    const words = process.env.NEXT_PUBLIC_WORDS?.split(",") || [
        "React Developer",
        "Web Developer",
        "Modern Developer",
        "Frontend Developer",
    ];
    return (
        <BackgroundBeamsWithCollision>
            <section
                id="home"
                className=" min-h-screen  flex flex-col items-center justify-center  text-white px-6 py-12"
                data-testid="hero-section"
            >
                {/* Title */}
                <h1
                    className={` text-3xl md:text-5xl lg:text-7xl mb-4 z-10 text-center leading-tight ${fontClasses.main}`}
                    data-testid="hero-title"
                >
                    Hello, I am a
                    <span
                        className="text-shadow-colored"
                        data-testid="hero-flip-words"
                    >
                        <FlipWords words={words} />
                    </span>
                </h1>

                {/* Description */}
                <p
                    className="text-xl mb-6 max-w-lg text-center z-10"
                    data-testid="hero-description"
                >
                    Explore my journey, skills, and projects.
                    <br />
                    Let&rsquo;s connect and create something amazing together!
                    Feel free to reach out for collaboration.
                </p>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroSection;
