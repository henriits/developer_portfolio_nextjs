import { ProjectListProps } from "@/types/projectTypes";

const ProjectList = ({
    projects,
    onEdit,
    onDelete,
    editingProjectId,
}: ProjectListProps) => {
    return (
        <div className="mt-4">
            <ul>
                {projects.map((project) => {
                    const isEditing = editingProjectId === project.id;
                    return (
                        <li
                            key={project.id}
                            className={`mb-4 p-4 border rounded ${
                                isEditing
                                    ? "bg-yellow-100 border-yellow-500"
                                    : ""
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                    <p>{project.description}</p>
                                    {isEditing && (
                                        <span className="text-yellow-800 font-medium text-sm">
                                            (Editing)
                                        </span>
                                    )}
                                </div>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => onEdit(project)}
                                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(project.id)}
                                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProjectList;
