"use client";

import { ComputerSvg } from "../ui/ComputerSvg/ComputerSvg";
import SkillList from "../skills/SkillList";

const SkillsSection = () => {
    return (
        <div className="w-full p-5  overflow-hidden">
            <div className="flex justify-center items-center w-full mt-8">
                <div className="w-96">
                    <ComputerSvg />
                </div>
            </div>
            <h2 className="text-center main-font text-5xl font-bold mb-6 p-12">
                Sk<span className="text-[#13DF14]">i</span>lls
            </h2>
            <SkillList />
        </div>
    );
};

export default SkillsSection;
