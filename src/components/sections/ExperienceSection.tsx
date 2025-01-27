import { fontClasses } from "@/utils/fonts";
import ExperienceList from "../experience/ExperienceList";

const ExperienceSection = () => (
    <section
        id="experience"
        className="min-h-screen w-full text-center px-6 py-12"
    >
        {" "}
        <h2 className={`text-5xl pt-12 mb-6 text-center ${fontClasses.main}`}>
            E<span className="text-[#13DF14]">xp</span>erience
        </h2>
        <ExperienceList />
    </section>
);

export default ExperienceSection;
