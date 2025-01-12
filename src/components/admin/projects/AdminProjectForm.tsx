import { Project } from "@prisma/client";
import React from "react";

type ProjectFormProps = {
    selectedProject: Project | null;
    onSubmit: (formData: FormData) => void;
    onCancel: () => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
    selectedProject,
    onSubmit,
    onCancel,
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        onSubmit(formData);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5 w-96 text-black mb-6"
        >
            <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={selectedProject?.title || ""}
                required
            />
            <textarea
                name="description"
                rows={2}
                placeholder="Description"
                defaultValue={selectedProject?.description || ""}
                required
            />
            <input
                type="text"
                name="githubLink"
                placeholder="GitHub Link"
                defaultValue={selectedProject?.githubLink || ""}
            />
            <input
                type="text"
                name="liveLink"
                placeholder="Live Link"
                defaultValue={selectedProject?.liveLink || ""}
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                defaultValue={selectedProject?.imageUrl || ""}
            />
            <input
                type="text"
                name="technologies"
                placeholder="Technologies (comma-separated)"
                defaultValue={selectedProject?.technologies.join(", ") || ""}
            />
            <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                {selectedProject ? "Update Project" : "Create Project"}
            </button>
            {selectedProject && (
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-400 py-2 rounded-sm"
                >
                    Cancel Update
                </button>
            )}
        </form>
    );
};

export default ProjectForm;
