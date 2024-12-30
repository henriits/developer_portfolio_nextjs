import { Project } from "@/types/projectTypes";

type ProjectListProps = {
    projects: Project[];
    onEdit: (project: Project) => void;
    onDelete: (id: string) => void;
    editingProjectId?: string;
};

const ProjectList: React.FC<ProjectListProps> = ({
    projects,
    onEdit,
    onDelete,
    editingProjectId,
}) => {
    return (
        <div className="mt-4">
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className="mb-4 p-4 border rounded">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p>{project.description}</p>
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
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
