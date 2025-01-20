import ProjectList from "../projects/ProjectList";

const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="w-full flex flex-col items-center justify-center px-6 py-12"
        >
            <ProjectList />
        </section>
    );
};
export default ProjectSection;
