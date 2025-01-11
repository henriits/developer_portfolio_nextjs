import React from "react";
import { Project } from "@/types";

type ProjectListProps = {
    projects: Project[];
    selectedProject: Project | null;
    onEdit: (project: Project) => void;
    onDelete: (id: string) => void;
};

const ProjectList: React.FC<ProjectListProps> = ({
    projects,
    selectedProject,
    onEdit,
    onDelete,
}) => {
    return (
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    className={`py-4 border-b ${
                        selectedProject?.id === project.id ? "bg-gray-100" : ""
                    }`}
                >
                    <h2 className="font-semibold">{project.title}</h2>
                    <p>{project.description}</p>
                    <p className="text-sm text-gray-600">
                        Technologies: {project.technologies.join(", ")}
                    </p>
                    <p className="text-sm text-gray-600">
                        GitHub Link: {project.githubLink || "Not available"}
                    </p>
                    <p className="text-sm text-gray-600">
                        Live Link: {project.liveLink || "Not available"}
                    </p>
                    {project.imageUrl && (
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-24 h-24 object-cover rounded-md mt-2"
                        />
                    )}
                    <p className="text-sm text-gray-600">
                        Image URL: {project.imageUrl || "Not available"}
                    </p>

                    <div className="flex space-x-2 mt-2">
                        <button
                            onClick={() => onEdit(project)}
                            className="text-blue-500 hover:underline"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => onDelete(project.id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;
