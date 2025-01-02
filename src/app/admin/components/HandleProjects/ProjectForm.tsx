import { useState, useEffect } from "react";
import { Project } from "@/types/projectTypes";

type ProjectFormProps = {
    project?: Project;
    onSave: (project: Project) => void;
};

const ProjectForm = ({ project, onSave }: ProjectFormProps) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        githubLink: "",
        liveLink: "",
        imageUrl: "",
        technologies: "",
    });

    useEffect(() => {
        if (project) {
            setFormData({
                title: project.title,
                description: project.description,
                githubLink: project.githubLink || "",
                liveLink: project.liveLink || "",
                imageUrl: project.imageUrl || "",
                technologies: project.technologies.join(", ") || "",
            });
        }
    }, [project]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare the project data to pass to onSave.
        const projectData: Project = {
            ...formData,
            id: project?.id ?? Date.now(), // Assign a unique id for a new project (use current timestamp as fallback)
            technologies: formData.technologies
                .split(",")
                .map((tech) => tech.trim()),
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
                <textarea
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
            <div>
                <label className="block text-lg font-medium">Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-lg font-medium">
                    Technologies
                </label>
                <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default ProjectForm;
