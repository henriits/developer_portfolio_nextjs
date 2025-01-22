import { Project } from "@prisma/client";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="flex-shrink-0 w-96" data-testid="project-card">
            <div className="relative w-full h-full shadow-lg rounded-xl transition-all duration-300 group bg-stone-900">
                <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14]"></div>
                <div className="relative z-10 bg-transparent border-neutral-700 shadow-md shadow-[#13DF14] bg-neutral-800 rounded-xl">
                    <img
                        data-testid="project-image"
                        alt={`Project ${project.title}`}
                        src={
                            project.imageUrl ||
                            "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
                        }
                        className="rounded-t-xl w-full h-52 object-cover"
                        loading="lazy"
                    />

                    <div className="p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h2
                                className="text-xl font-semibold text-white"
                                data-testid="project-title"
                            >
                                <a href={`/projects/${project.slug}`}>
                                    {project.title}
                                </a>
                            </h2>
                            <div
                                className="flex gap-3 text-xl"
                                data-testid="project-links"
                            >
                                {project.githubLink && (
                                    <a
                                        data-testid="github-link"
                                        href={
                                            project.githubLink.startsWith(
                                                "http"
                                            )
                                                ? project.githubLink
                                                : `https://${project.githubLink}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#13DF14] transition-colors"
                                        title="GitHub Repository"
                                    >
                                        <FaGithub />
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a
                                        data-testid="live-link"
                                        href={
                                            project.liveLink.startsWith("http")
                                                ? project.liveLink
                                                : `https://${project.liveLink}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#13DF14] transition-colors"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                                <a
                                    data-testid="info-link"
                                    href={`/projects/${project.slug}`}
                                    className="hover:text-[#13DF14] transition-colors"
                                    title={`More about ${project.title}`}
                                >
                                    <FaInfoCircle />
                                </a>
                            </div>
                        </div>

                        <div
                            className="flex flex-wrap gap-2 justify-start"
                            data-testid="technologies-list"
                        >
                            {project.technologies ? (
                                project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs text-gray-400"
                                    >
                                        {tech.trim()}
                                    </span>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm">
                                    No technologies specified
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
