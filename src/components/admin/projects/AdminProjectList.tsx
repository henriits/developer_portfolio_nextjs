"use server";
import { prisma } from "@/lib/db";

import UpdateProjectsButton from "./UpdateProjectsButton";
import DeleteButton from "@/components/ui/DeleteButton";
import { deleteProject } from "@/actions/projectActions";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();
    return (
        <div className="w-full text-center px-6 py-12">
            <h2 className="main-font text-5xl font-bold mb-6 z-10">
                <span className="text-[#13DF14]">My </span>Work
            </h2>
            <ul>
                {projects.map((project) => (
                    <div key={project.id} className="border-b p-3">
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
                        <p className="text-sm text-gray-600 mb-5">
                            Image URL:
                            <span className="text-white ml-2">
                                {project.imageUrl || "Not available"}
                            </span>
                        </p>
                        {/* Buttons with spacing */}
                        <div className="flex gap-x-4 items-center justify-center">
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
                ))}
            </ul>
        </div>
    );
}
