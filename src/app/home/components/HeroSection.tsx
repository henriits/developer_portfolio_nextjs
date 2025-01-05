import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
    const words = ["React", "Web", "Modern", "Frontend"];
    return (
        <BackgroundBeamsWithCollision>
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-800 text-white px-6 py-12">
                {/* Title */}
                <motion.h1
                    className="text-7xl font-extrabold mb-4 z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I'm{" "}
                    <span className="text-shadow-colored">
                        <FlipWords words={words} />
                    </span>{" "}
                    developer
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-xl mb-6 max-w-lg text-center z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Explore my journey, skills, and projects.
                    <br />
                    Let's connect and create something amazing together! Feel
                    free to reach out for collaboration.
                </motion.p>
                {/* Social Icons */}
                <motion.div
                    className="flex items-center space-x-6 mb-8 z-10 pt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Link
                            href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "/"}
                        >
                            <i className="ci ci-linkedin ci-3x"></i>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || "/"}>
                            <i className="ci ci-github-light ci-3x"></i>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Link
                            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}
                        >
                            <i className="ci ci-instagram ci-3x"></i>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Contact Button */}

                <motion.div
                    whileHover={{ scale: 1.3 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Link
                        href="#contact"
                        className="border-2 border-neonGreen text-white py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden"
                    >
                        Contact me!
                    </Link>
                </motion.div>
            </section>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroSection;
