import { motion } from "framer-motion";
import React from "react";

const TechStackData: Array<{ icon: string; label: string }> = [
    { icon: "ci-js", label: "JavaScript" },
    { icon: "ci-react", label: "React" },
    { icon: "ci-html5", label: "HTML5" },
    { icon: "ci-css3", label: "CSS3" },
    { icon: "ci-tailwindcss", label: "Tailwind CSS" },
    { icon: "ci-ts", label: "TypeScript" },
    { icon: "ci-nextjs", label: "Next.js" },
    { icon: "ci-nodejs", label: "Node.js" },
];

const TechStackSection = () => {
    return (
        <div className="w-full p-5 bg-neutral-800 text-white overflow-hidden">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.8/src/app/ci.min.css"
            />
            <h2 className="text-center text-3xl font-bold mb-6">
                Technology I mostly use
            </h2>
            <div className="w-full overflow-hidden">
                <motion.div
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    initial={{ translateX: "0%" }}
                    animate={{ translateX: "-50%" }}
                    className="flex gap-16 pr-16 w-max"
                >
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {TechStackData.map(({ icon, label }) => (
                                <div
                                    key={label}
                                    className="text-center flex-none"
                                >
                                    <i className={`ci ${icon} ci-4x`}></i>
                                    <p className="mt-2">{label}</p>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechStackSection;
