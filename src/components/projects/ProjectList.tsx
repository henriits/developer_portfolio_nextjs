import { prisma } from "@/lib/db";
import ProjectCard from "./ProjectCard";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();

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
            <div>
                <a
                    href="/projects"
                    className="border-2 border-neonGreen text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 z-10 relative overflow-hidden"
                >
                    View All Projects
                </a>
            </div>
        </main>
    );
}
