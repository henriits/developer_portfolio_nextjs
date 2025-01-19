import { prisma } from "@/lib/db";
import ProjectCard from "./ProjectCard";
import ProjectListBase from "./ProjectListBase";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();

    // i want to display only 3 projects
    const limitedProjects = projects?.slice(0, 3);

    return (
        <main className="pt-24 text-center">
            <ProjectListBase projects={projects} limit={3} />
            <a
                href="/projects"
                className="border-2 text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 mt-8 inline-block"
            >
                <span className="mr-2">View All Projects</span>
                <span className="ml-2 inline-block border-2 rounded-full px-2">
                    <span className="text-[#13DF14]">{projects.length}</span>
                </span>
            </a>
        </main>
    );
}
