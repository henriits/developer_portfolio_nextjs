import { fontClasses } from "@/utils/fonts";
import ProjectList from "../projects/ProjectList";

const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12"
        >
            <h2 className={`text-5xl mb-12 ${fontClasses.main}`}>
                <span className="text-[#13DF14]">My </span>Work
            </h2>
            <ProjectList />
        </section>
    );
};
export default ProjectSection;
