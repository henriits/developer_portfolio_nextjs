// components/ProjectForm.tsx
import { useState, useEffect } from "react";

// Define the project type
type Project = {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
};

type ProjectFormProps = {
    project?: Project; // Allow project to be undefined
    onSave: (project: Project) => void;
};

const ProjectForm = ({ project, onSave }: ProjectFormProps) => {
    const [formData, setFormData] = useState<Project>({
        id: "",
        title: "",
        description: "",
        githubLink: "",
        liveLink: "",
    });

    useEffect(() => {
        if (project) {
            setFormData({ ...project });
        }
    }, [project]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData); // Call the onSave function with the form data
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-lg font-medium">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
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
