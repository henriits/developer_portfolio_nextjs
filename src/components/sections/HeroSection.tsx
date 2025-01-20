"use client";
import { BackgroundBeamsWithCollision } from "@/components/animations/background-beams-with-collision";
import { FlipWords } from "@/components/animations/flip-words";

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
            >
                {/* Title */}
                <h1 className="main-font sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 z-10 text-center leading-tight">
                    Hello, I am a
                    <span className="text-shadow-colored ">
                        <FlipWords words={words} />
                    </span>
                </h1>

                {/* Description */}
                <p className="text-xl mb-6 max-w-lg text-center z-10">
                    Explore my journey, skills, and projects.
                    <br />
                    Let's connect and create something amazing together! Feel
                    free to reach out for collaboration.
                </p>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroSection;
