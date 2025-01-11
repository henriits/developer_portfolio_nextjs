import { addProject, getProjects } from "@/actions/projectActions";
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
        <ul className="border-t border-b border-black/10 py-5">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <li>
            <div className="relative w-full shadow-lg rounded-xl transition-all duration-300 group">
                {/* Neon Shadow Effect */}
                <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14] "></div>
                {/* Neon Shadow Effect */}
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
                                src={project.imageUrl ?? "/default-image.png"}
                                className="rounded-lg shadow-md"
                                width={300}
                                height={200}
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
                        <div className="flex justify-between items-center space-x-4">
                            <a
                                href={project.githubLink ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#13DF14] transition-colors duration-200"
                            >
                                GitHub
                            </a>
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
