import { deleteProject } from "@/actions/projectActions";
import DeleteButton from "@/components/ui/DeleteButton";
import UpdateProjectsButton from "../admin/projects/UpdateProjectsButton";
import ProjectCard from "./ProjectCard";
import { ProjectListProps, ProjectProps } from "../../types/portfolioTypes";

import { SkillsData } from "@/utils/skillData";
import { Img } from "@react-email/components";
import Image from "next/image";

function ProjectDetail({
    label,
    value,
}: {
    label: string;
    value: string | null | undefined;
}) {
    return (
        <p className="text-sm text-gray-600">
            {label}:
            <span className="text-white ml-2">{value || "Not available"}</span>
        </p>
    );
}

function ProjectTechnologies({ technologies }: { technologies?: string[] }) {
    if (!technologies)
        return (
            <p className="text-gray-400 text-sm">No technologies specified</p>
        );

    return (
        <p className="text-sm text-gray-600">
            Technologies:
            <span className="text-white ml-2 flex flex-wrap gap-2">
                {technologies.flatMap((tech, index) =>
                    tech.split(",").map((singleTech, subIndex) => {
                        const trimmedTech = singleTech.trim();
                        const skill = SkillsData.find(
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
                                    alt={skill.label}
                                    width={20}
                                    height={20}
                                    className="rounded-md"
                                />
                            </span>
                        ) : (
                            <span
                                key={`${index}-${subIndex}`}
                                className="py-1 text-xs text-gray-400"
                            >
                                {trimmedTech}
                            </span>
                        );
                    })
                )}
            </span>
        </p>
    );
}

function AdminProjectView({ project }: { project: ProjectProps }) {
    return (
        <div className="border-2 rounded-md p-3 w-full max-w-md">
            <ProjectDetail label="Title" value={project.title} />
            <ProjectDetail label="Description" value={project.description} />
            <ProjectTechnologies technologies={project.technologies} />
            <ProjectDetail label="GitHub Link" value={project.githubLink} />
            <ProjectDetail label="Live Link" value={project.liveLink} />
            <p className="text-sm text-gray-600 break-words">
                Image Url: {project.imageUrl}
            </p>
            {project.imageUrl && (
                <Img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover rounded-md mt-2"
                    width={50}
                    height={50}
                    loading="lazy"
                />
            )}
            <div className="flex gap-x-4 items-center justify-center mt-4">
                <DeleteButton
                    id={project.id}
                    deleteAction={deleteProject}
                    label="Delete"
                />
                <UpdateProjectsButton
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                    imageUrl={project.imageUrl}
                />
            </div>
        </div>
    );
}

export default function ProjectListBase({
    projects,
    isAdmin = false,
    limit,
}: ProjectListProps) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <>
            {projects && projects.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-5">
                    {displayedProjects.map((project) =>
                        isAdmin ? (
                            <AdminProjectView
                                key={project.id}
                                project={project}
                            />
                        ) : (
                            <ProjectCard key={project.id} project={project} />
                        )
                    )}
                </ul>
            ) : (
                <p className="text-center text-gray-400">
                    No project entries found.
                </p>
            )}
        </>
    );
}
