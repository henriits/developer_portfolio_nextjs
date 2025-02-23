"use client";
import { motion } from "framer-motion";
import React from "react";
import Icon from "@/components/icon/Icon";
import { SkillsData } from "@/utils/skillData";

const SkillList = () => {
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
