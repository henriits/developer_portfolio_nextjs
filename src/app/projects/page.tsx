import { getProjects } from "@/actions/projectActions";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@prisma/client";

import React from "react";

export default async function ProjectsPage() {
    // under page we are fetching the projects from the database
    let projects: Project[] = [];

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className=" main-font text-5xl font-semibold">
                All projects
                <span className="ml-4 inline-block border-4 rounded-full px-2">
                    <span className="text-[#13DF14]">{projects?.length}</span>
                </span>
            </h1>

            <ul className="flex flex-wrap justify-center gap-5 border-t border-b border-black/10 py-5 w-full max-w-screen-lg mx-auto">
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
        </main>
    );
}
