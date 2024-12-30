// components/ProjectList.tsx
import { Project, ProjectListProps } from "@/types/projectTypes";
import ProjectActions from "./ProjectActions";

const ProjectList = ({
    projects,
    onEdit,
    onDelete,
    editingProjectId,
}: ProjectListProps) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="space-y-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`p-4 border border-gray-300 rounded-lg shadow-sm ${
                            editingProjectId === project.id
                                ? "bg-yellow-50 border-yellow-300"
                                : ""
                        }`}
                    >
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>
                        <p>{project.description}</p>
                        <ProjectActions
                            onEdit={() => onEdit(project)}
                            onDelete={() => onDelete(project.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
