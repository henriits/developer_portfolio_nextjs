import { useState, useEffect } from "react";
import { Project } from "@/types/projectTypes";

type ProjectFormProps = {
    project?: Project; // If editing, this will be the existing project
    onSave: (project: Project) => void; // The onSave function should accept a Project as an argument
};

const ProjectForm = ({ project, onSave }: ProjectFormProps) => {
    const [formData, setFormData] = useState({
        title: project?.title || "",
        description: project?.description || "",
        githubLink: project?.githubLink || "",
        liveLink: project?.liveLink || "",
    });

    useEffect(() => {
        if (project) {
            setFormData({
                title: project.title,
                description: project.description,
                githubLink: project.githubLink || "",
                liveLink: project.liveLink || "",
            });
        }
    }, [project]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare the project data to pass to onSave.
        // If we're editing a project, the id is provided.
        const projectData: Project = {
            ...formData,
            id: project?.id ?? Date.now(), // Assign a unique id for a new project (use current timestamp as fallback)
        };

        onSave(projectData); // Pass the project data to onSave
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-lg font-medium">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-lg font-medium">Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-lg font-medium">GitHub Link</label>
                <input
                    type="text"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-lg font-medium">Live Link</label>
                <input
                    type="text"
                    name="liveLink"
                    value={formData.liveLink}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Save Project
            </button>
        </form>
    );
};

export default ProjectForm;
