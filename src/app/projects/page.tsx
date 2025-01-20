import { getProjects } from "@/actions/projectActions";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

export default async function ProjectsPage() {
    // under page we are fetching the projects from the database
    let projects: Project[] = [];

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center  pb-12">
            <ul className="flex flex-wrap justify-center gap-5">
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
            <Link
                href="/"
                className=" inline-flex items-center gap-2 px-4 py-2 border-2 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
            >
                <FaHome className="text-lg" />
                <span>Home</span>
            </Link>
        </main>
    );
}
