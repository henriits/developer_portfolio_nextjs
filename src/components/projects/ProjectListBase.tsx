import { deleteProject } from "@/actions/projectActions";
import DeleteButton from "@/components/ui/DeleteButton";
import Image from "next/image";
import UpdateProjectsButton from "../admin/projects/UpdateProjectsButton";
import ProjectCard from "./ProjectCard";

export interface ProjectItem {
    id: string;
    title: string;
    slug: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
    createdAt: Date;
    updatedAt: Date;
}

type ProjectListBaseProps = {
    projects: ProjectItem[];
    isAdmin?: boolean;
    limit?: number;
};

export default function ProjectListBase({
    projects,
    isAdmin = false,
    limit,
}: ProjectListBaseProps) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="w-full text-center px-6 py-12">
            <h2 className="main-font text-5xl font-bold mb-6 z-10">
                <span className="text-[#13DF14]">My </span>Work
            </h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {displayedProjects.map((project) =>
                    isAdmin ? (
                        // Admin view
                        <div
                            key={project.id}
                            className="border-2 rounded-md p-3 w-full max-w-md"
                        >
                            <p className="text-sm text-gray-600">
                                Title:
                                <span className="text-white ml-2">
                                    {project.title}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Description:
                                <span className="text-white ml-2">
                                    {project.description}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Technologies:
                                <span className="text-white ml-2">
                                    {project.technologies.join(", ")}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                GitHub Link:
                                <span className="text-white ml-2">
                                    {project.githubLink || "Not available"}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Live Link:
                                <span className="text-white ml-2">
                                    {project.liveLink || "Not available"}
                                </span>
                            </p>
                            {project.imageUrl && (
                                <img
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
                                    label="Delete Project"
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
                    ) : (
                        // Non-admin view (render as a card)
                        <ProjectCard key={project.id} project={project} />
                    )
                )}
            </ul>
        </div>
    );
}
