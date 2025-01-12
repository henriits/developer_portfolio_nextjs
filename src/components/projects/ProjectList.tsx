import useFetch from "@/hooks/useFetch";
import { Project } from "@prisma/client";
import ProjectCard from "./ProjectCard";
const ProjectList = () => {
    // here we are fetching the projects to the client side from the server
    const {
        data: projects,
        loading,
        error,
        refetch,
    } = useFetch<Project[]>("/api/projects");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
                <button
                    onClick={refetch}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">
                All projects ({projects?.length})
            </h1>

            <ul className="flex flex-wrap justify-center gap-5 border-t border-b border-black/10 py-5 w-full max-w-screen-lg mx-auto">
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
        </main>
    );
};

export default ProjectList;
