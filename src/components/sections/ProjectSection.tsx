import useFetch from "@/hooks/useFetch";
import { Project } from "@prisma/client";
const ProjectList = () => {
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
        <div>
            <h1 className="text-3xl font-semibold">
                All projects ({projects?.length || 0})
            </h1>

            <ul className="border-t border-b border-black/10 py-5">
                {projects?.map((project) => (
                    <li key={project.id} className="py-2">
                        {project.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
