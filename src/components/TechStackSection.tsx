import { motion } from "framer-motion";

const TechStackSection = () => (
    <section id="tech-stack" className="py-16 bg-white overflow-hidden">
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.8/src/app/ci.min.css"
        />

        <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
                { icon: "ci-js", label: "JavaScript" },
                { icon: "ci-react", label: "React" },
                { icon: "ci-html5", label: "HTML5" },
                { icon: "ci-css3", label: "CSS3" },
                { icon: "ci-tailwindcss", label: "Tailwind CSS" },
                { icon: "ci-ts", label: "TypeScript" },
                { icon: "ci-nextjs", label: "Next js" },
                { icon: "ci-nodejs", label: "Node js" },
            ].map((tech, index) => (
                <motion.div
                    key={tech.label}
                    className="text-center"
                    animate={{
                        x: ["-100px", "100px", "0px"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <i className={`ci ${tech.icon} ci-4x`}></i>
                    <p className="mt-2">{tech.label}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default TechStackSection;
