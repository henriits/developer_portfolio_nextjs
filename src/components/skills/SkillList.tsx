"use client";
import { fontClasses } from "@/utils/fonts";
import { motion } from "framer-motion";
import React from "react";

const SkillList = () => {
    const SkillsData: Array<{ icon: string; label: string }> = [
        { icon: "ci-js", label: "JavaScript" },
        { icon: "ci-react", label: "React" },
        { icon: "ci-html5", label: "HTML5" },
        { icon: "ci-tailwindcss", label: "Tailwind CSS" },
        { icon: "ci-ts", label: "TypeScript" },
        { icon: "ci-nextjs", label: "Next.js" },
        { icon: "ci-nodejs", label: "Node.js" },
        { icon: "ci-npm", label: "npm" },
        { icon: "ci-framer-motion", label: "Framer Motion" },
        { icon: "ci-git", label: "Git" },
        { icon: "ci-css3", label: "CSS3" },
        { icon: "ci-vscode", label: "VS Code" },
        { icon: "ci-github", label: "GitHub" },
        { icon: "ci-vuejs", label: "Vue.js" },
    ];

    return (
        <div className="w-auto overflow-hidden">
            <motion.div
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
                initial={{ translateX: "0%" }}
                animate={{ translateX: "-50%" }}
                className="flex gap-16 pr-16 w-max"
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {SkillsData.map(({ icon, label }) => (
                            <span
                                key={index + label}
                                className="flex items-center"
                            >
                                <i className={`ci ${icon} ci-2x md:ci-4x`}></i>
                                <p
                                    className={`ml-2 text-4xl ${fontClasses.logo}`}
                                >
                                    {label}
                                </p>
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
export default SkillList;
