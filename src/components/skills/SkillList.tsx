"use client";
import { motion } from "framer-motion";
import React from "react";
import Icon from "@/components/icon/Icon";

// Import SVGs
import CSS from "@/../public/img/icons/css.svg";
import Express from "@/../public/img/icons/express.svg";
import FramerMotion from "@/../public/img/icons/framermotion.svg";
import Git from "@/../public/img/icons/git.svg";
import Github from "@/../public/img/icons/github.svg";
import HTML from "@/../public/img/icons/html.svg";
import JS from "@/../public/img/icons/javascript.svg";
import NextJs from "@/../public/img/icons/nextjs.svg";
import Node from "@/../public/img/icons/node.svg";
import NPM from "@/../public/img/icons/npm.svg";
import Postgres from "@/../public/img/icons/postgres.svg";
import Prisma from "@/../public/img/icons/prisma.svg";
import ReactIcon from "@/../public/img/icons/react.svg";
import Tailwindcss from "@/../public/img/icons/tailwindcss.svg";
import TypeScript from "@/../public/img/icons/typescript.svg";
import VScode from "@/../public/img/icons/vscode.svg";
import Vue from "@/../public/img/icons/vue.svg";

const SkillList = () => {
    const SkillsData: Array<{ icon: any; label: string }> = [
        { icon: JS, label: "JavaScript" },
        { icon: ReactIcon, label: "React" },
        { icon: HTML, label: "HTML5" },
        { icon: Tailwindcss, label: "Tailwind CSS" },
        { icon: TypeScript, label: "TypeScript" },
        { icon: NextJs, label: "Next.js" },
        { icon: Node, label: "Node.js" },
        { icon: NPM, label: "npm" },
        { icon: FramerMotion, label: "Framer Motion" },
        { icon: Git, label: "Git" },
        { icon: CSS, label: "CSS3" },
        { icon: VScode, label: "VS Code" },
        { icon: Github, label: "GitHub" },
        { icon: Vue, label: "Vue.js" },
        { icon: Prisma, label: "Prisma" },
        { icon: Postgres, label: "Postgres" },
        { icon: Express, label: "Express" },
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
                            <Icon key={label} icon={icon} label={label} />
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillList;
