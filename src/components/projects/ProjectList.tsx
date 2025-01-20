import { prisma } from "@/lib/db";
import ProjectListBase from "./ProjectListBase";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();

    return (
        <main className="pt-24 text-center">
            <ProjectListBase projects={projects} limit={3} />

            {projects.length > 3 && (
                <a
                    href="/projects"
                    className="border-2 text-white border-[#13DF14] hover:bg-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 mt-8 inline-block"
                >
                    <span className="mr-2">See more!</span>
                </a>
            )}
        </main>
    );
}
