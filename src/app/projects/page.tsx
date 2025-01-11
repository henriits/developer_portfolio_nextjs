import { getProjects } from "@/actions/projectActions";
import { Project } from "@/types";
import Link from "next/link";
import React from "react";

export default async function ProjectsPage() {
    let projects: Project[] = [];

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">
                All projects ({projects.length})
            </h1>
            <ProjectList projects={projects} />
        </main>
    );
}

function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <ul className="flex flex-wrap justify-center gap-5 border-t border-b border-black/10 py-5 w-full max-w-screen-lg mx-auto">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="flex-shrink-0 w-80">
            <div className="relative w-full h-full shadow-lg rounded-xl transition-all duration-300 group">
                {/* Neon Shadow Effect */}
                <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14]"></div>
                <div className="relative z-10 bg-transparent border-neutral-700 bg-neutral-800 rounded-xl flex flex-col h-full">
                    <div className="p-6 flex flex-col items-start gap-2">
                        <h2 className="text-xl font-semibold text-white">
                            <Link href={`/projects/${project.slug}`}>
                                {project.title}
                            </Link>
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {project.description}
                        </p>
                        <div className="relative flex justify-center items-center transition-all duration-300 ease-in-out">
                            <img
                                alt={`Project ${project.title}`}
                                // Only render image if imageUrl is available
                                src={
                                    project.imageUrl ||
                                    "https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain"
                                }
                                className="rounded-lg shadow-md object-cover"
                                width={300}
                                height={200}
                                style={{ width: "300px", height: "200px" }}
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, id) => (
                                <span
                                    key={id}
                                    className="text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-4 mt-auto">
                        {/* Conditional Links */}
                        <div className="flex justify-between items-center space-x-4">
                            {/* GitHub link */}
                            {project.githubLink && (
                                <a
                                    href={
                                        project.githubLink.startsWith("http")
                                            ? project.githubLink
                                            : `https://${project.githubLink}`
                                    } // Ensure it's an absolute URL
                                    target="_blank" // Open in new tab
                                    rel="noopener noreferrer" // Security
                                    className="text-gray-400 hover:text-[#13DF14] transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            )}
                            {/* Live Demo link */}
                            {project.liveLink && (
                                <a
                                    href={
                                        project.liveLink.startsWith("http")
                                            ? project.liveLink
                                            : `https://${project.liveLink}`
                                    } // Ensure it's an absolute URL
                                    target="_blank" // Open in new tab
                                    rel="noopener noreferrer" // Security
                                    aria-label={`View ${project.title} Live`}
                                    className="text-gray-400 hover:text-[#13DF14] transition-colors duration-200"
                                >
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
