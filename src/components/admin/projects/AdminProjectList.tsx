"use server";
import { prisma } from "@/lib/db";

import UpdateProjectsButton from "./UpdateProjectsButton";
import DeleteButton from "@/components/ui/DeleteButton";
import { deleteProject } from "@/actions/projectActions";

export default async function ProjectList() {
    const projects = await prisma.project.findMany();
    return (
        <div>
            <h2 className="main-font text-5xl font-bold mb-6 text-center z-10">
                <span className="text-[#13DF14]">My </span>Work
            </h2>
            <ul>
                {projects.map((project) => (
                    <div key={project.id} className="border-b p-3">
                        <h2 className="text-sm text-gray-600">
                            Title:
                            <span className="text-white">{project.title}</span>
                        </h2>
                        <p className="text-sm text-gray-600">
                            Description:
                            <span className="text-white">
                                {project.description}
                            </span>
                        </p>
                        <p className="text-sm text-gray-600">
                            Technologies:
                            <span className="text-white">
                                {project.technologies.join(", ")}
                            </span>
                        </p>
                        <p className="text-sm text-gray-600">
                            GitHub Link:
                            <span className="text-white">
                                {project.githubLink || "Not available"}
                            </span>
                        </p>
                        <p className="text-sm text-gray-600">
                            Live Link:
                            <span className="text-white">
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
                            <span className="text-white">
                                {project.imageUrl || "Not available"}
                            </span>
                        </p>
                        <DeleteButton
                            id={project.id} // Pass the id
                            deleteAction={deleteProject} // Pass the delete action function
                            label="Delete Project" // Customize the label
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
                ))}
            </ul>
        </div>
    );
}
