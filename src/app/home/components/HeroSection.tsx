import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-neonGreen to-purple-700 text-white px-6 py-12 relative">
        {/* Background Overlay (darkened to make content pop) */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Title */}
        <motion.h1
            className="text-6xl font-extrabold mb-4 text-center font-mono z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            Hi, I'm Henri,
            <br />a Frontend Developer
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
            Let's connect and create something amazing together! Feel free to
            reach out for collaboration.
        </motion.p>

        {/* Social Icons */}
        <motion.div
            className="flex items-center space-x-6 mb-8 z-10 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <motion.a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300"
                whileHover={{ scale: 1.2 }}
            >
                <i className="ci ci-linkedin ci-3x"></i>
            </motion.a>
            <motion.a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300"
                whileHover={{ scale: 1.2 }}
            >
                <i className="ci ci-github-light ci-3x"></i>
            </motion.a>
            <motion.a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300"
                whileHover={{ scale: 1.2 }}
            >
                <i className="ci ci-instagram ci-3x"></i>
            </motion.a>
        </motion.div>

        {/* Contact Button */}
        <Link href="#contact">
            <motion.button
                className="border-2 border-neonGreen text-white py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                    scale: 1.1,
                }}
            >
                Contact Me
            </motion.button>
        </Link>
    </section>
);

export default HeroSection;
