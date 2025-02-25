import { prisma } from "@/lib/db";
import ProjectListBase from "./ProjectListBase";
import Link from "next/link";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();

    return (
        <main className=" text-center">
            <div className="w-full px-6 ">
                <ProjectListBase projects={projects} limit={3} />

                {projects.length > 3 && (
                    <Link
                        href="/projects"
                        className="border-2 text-white border-[#13DF14] hover:bg-[#13DF14] py-3 px-8 rounded-lg text-xl font-bold transition duration-300 mt-8 inline-block"
                    >
                        <span className="mr-2">See more!</span>
                    </Link>
                )}
            </div>
        </main>
    );
}
