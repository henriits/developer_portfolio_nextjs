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
            <section className=" min-h-screen  flex flex-col items-center justify-center  text-white px-6 py-12">
                {/* Title */}
                <h1 className="main-font sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 z-10 text-center leading-tight">
                    Hello, I am A
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
                {/* Social Icons */}
                <div className="flex items-center space-x-6 mb-8 z-10 pt-12">
                    <div>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "/"}>
                            <i className="ci ci-linkedin ci-3x"></i>
                        </a>
                    </div>
                    <div>
                        <a href={process.env.NEXT_PUBLIC_GITHUB_URL || "/"}>
                            <i className="ci ci-github-light ci-3x"></i>
                        </a>
                    </div>
                    <div>
                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}>
                            <i className="ci ci-instagram ci-3x"></i>
                        </a>
                    </div>
                </div>

                {/* Contact Button */}

                <div>
                    <a
                        href="#contact"
                        className="border-2 text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden"
                    >
                        Contact me!
                    </a>
                </div>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroSection;
