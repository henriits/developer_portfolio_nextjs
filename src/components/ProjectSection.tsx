import ProjectList from "@/app/projects/components/ProjectList";

const ProjectSection = () => {
    return (
        <section id="projects" className="p-12 bg-gray-50">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 p-12">
                Projects
            </h2>
            <ProjectList />
        </section>
    );
};
export default ProjectSection;
