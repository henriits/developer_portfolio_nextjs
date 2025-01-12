import useFetch from "@/hooks/useFetch";
import { Project } from "@prisma/client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
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

    // i want to display only 3 projects
    const limitedProjects = projects?.slice(0, 3);

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h2 className="text-3xl font-bold mb-6 text-center z-10">
                <span className="text-[#13DF14]">My</span> Work
            </h2>
            <h1 className="text-gray-400">
                {" "}
                All projects ({projects?.length})
            </h1>
            <ul className="flex flex-wrap justify-center gap-5 border-t border-b border-black/10 py-5 w-full max-w-screen-lg mx-auto">
                {limitedProjects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
            <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <a
                    href="/projects"
                    className="border-2 border-neonGreen text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden"
                >
                    View All Projects
                </a>
            </motion.div>
        </main>
    );
};

export default ProjectList;
