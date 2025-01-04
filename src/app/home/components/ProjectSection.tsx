import ProjectList from "@/app/projects/components/ProjectList";

const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center bg-gradient-to-r from-black via-blue-800 to-blue-300 text-white px-6 py-12 relative"
        >
            <h2 className="text-4xl font-bold mb-12 text-center p-12 z-10">
                Projects
            </h2>
            <ProjectList />
        </section>
    );
};
export default ProjectSection;
