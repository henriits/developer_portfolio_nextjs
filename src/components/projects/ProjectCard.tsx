import { Project } from "@prisma/client";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <li className="flex-shrink-0 w-80">
            <div className="relative w-full h-full shadow-lg rounded-xl transition-all duration-300 group bg-stone-950">
                {/* Neon Shadow Effect */}
                <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14]"></div>
                <div className="relative z-10 bg-transparent border-neutral-700 shadow-md shadow-[#13DF14] bg-neutral-800 rounded-xl flex flex-col h-full">
                    <div className="p-6 flex flex-col items-start gap-2">
                        <h2 className="text-xl font-semibold text-white">
                            <a href={`/projects/${project.slug}`}>
                                {project.title}
                            </a>
                        </h2>
                        <div className="relative flex justify-center items-center transition-all duration-300 ease-in-out">
                            <img
                                alt={`Project ${project.title}`}
                                // Only render image if imageUrl is available
                                src={
                                    project.imageUrl ||
                                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
                                }
                                className="rounded-lg shadow-md object-cover"
                                width={300}
                                height={300}
                                loading="lazy"
                                style={{ width: "300px", height: "200px" }}
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 border-2 rounded-full">
                            {project.technologies ? (
                                project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors"
                                    >
                                        {tech.trim()}
                                    </span>
                                ))
                            ) : (
                                <p className="text-gray-400">
                                    No technologies specified
                                </p>
                            )}
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>GitHub</span>
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                    <span>Demo</span>
                                </a>
                            )}
                        </div>

                        <div className="flex justify-between items-center mx-auto">
                            <a
                                href={`/projects/${project.slug}`}
                                className="flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
                            >
                                <FaInfoCircle className="text-lg" />
                                <span>See More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
