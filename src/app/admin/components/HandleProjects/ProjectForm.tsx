import { useState } from "react";
import { Project } from "@/types/projectTypes";

type ProjectFormProps = {
    project?: Project;
    onSave: (project: Project) => void;
};

const ProjectForm = ({ project, onSave }: ProjectFormProps) => {
    const initialState = {
        title: project?.title || "",
        description: project?.description || "",
        githubLink: project?.githubLink || "",
        liveLink: project?.liveLink || "",
        imageUrl: project?.imageUrl || "",
        technologies: project?.technologies.join(", ") || "",
    };

    const [formState, setFormState] = useState(initialState);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const techArray: string[] = formState.technologies
            .split(",")
            .map((tech) => tech.trim());
        onSave({
            id: project?.id || 0,
            ...formState,
            technologies: techArray,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg"
        >
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">GitHub Link</label>
                <input
                    type="text"
                    name="githubLink"
                    value={formState.githubLink}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Live Link</label>
                <input
                    type="text"
                    name="liveLink"
                    value={formState.liveLink}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formState.imageUrl}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Technologies</label>
                <input
                    type="text"
                    name="technologies"
                    value={formState.technologies}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ProjectForm;
