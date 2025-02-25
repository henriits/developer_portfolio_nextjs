"use client";

import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import Slide from "../animations/Slide";
import { ProjectProps } from "../../types/portfolioTypes";
import Image from "next/image"; // Using Next.js Image component
import { SkillsData } from "@/utils/skillData";

export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <li className="flex-shrink-0 w-96" data-testid="project-card">
            <Slide delay={0.5} data-testid="project-slide">
                <div className="relative w-full h-full shadow-lg rounded-xl transition-all duration-300 group bg-stone-900">
                    <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_#13DF14]"></div>
                    <div className="relative z-10 bg-transparent border-neutral-700 shadow-md shadow-[#13DF14] bg-neutral-800 rounded-xl">
                        <Image
                            data-testid="project-image"
                            alt={`Project ${project.title}`}
                            src={
                                project.imageUrl ||
                                "https://ucarecdn.com/b18f07b1-e370-47d5-9c0c-11aec3ffa497/Code_Icon.png"
                            }
                            className="rounded-t-xl w-full h-52 object-cover"
                            width={400}
                            height={0}
                            priority
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
                                                project.liveLink.startsWith(
                                                    "http"
                                                )
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
                                    project.technologies.flatMap(
                                        (tech, index) =>
                                            tech
                                                .split(",")
                                                .map((singleTech, subIndex) => {
                                                    const trimmedTech =
                                                        singleTech.trim();
                                                    const skill =
                                                        SkillsData.find(
                                                            (skill) =>
                                                                skill.label.toLowerCase() ===
                                                                trimmedTech.toLowerCase()
                                                        );

                                                    return skill ? (
                                                        <span
                                                            key={`${index}-${subIndex}`}
                                                            className="flex items-center gap-1"
                                                            title={skill.label}
                                                        >
                                                            <Image
                                                                src={skill.icon}
                                                                alt={
                                                                    skill.label
                                                                }
                                                                width={20}
                                                                height={20}
                                                                className="rounded-md"
                                                            />
                                                        </span>
                                                    ) : (
                                                        <span
                                                            key={`${index}-${subIndex}`}
                                                            className="py-1 text-xs text-gray-400"
                                                            title={trimmedTech}
                                                        >
                                                            {trimmedTech}
                                                        </span>
                                                    );
                                                })
                                    )
                                ) : (
                                    <p className="text-gray-400 text-sm">
                                        No technologies specified
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </li>
    );
}
