"use client";

import { addProject } from "@/actions/projectActions";
import { useActionState } from "react";

const ProjectForm = () => {
    const [error, action, isPending] = useActionState(addProject, null);
    return (
        <form action={action} className="flex flex-col gap-y-2">
            <input
                type="text"
                name="title"
                placeholder="Title"
                className="py-2 px-2 rounded-sm text-black"
            />
            <textarea
                name="description"
                rows={2}
                placeholder="Description"
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="githubLink"
                placeholder="GitHub Link"
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="liveLink"
                placeholder="Live Link"
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="technologies"
                placeholder="Technologies (comma-separated)"
                className="py-2 px-2 rounded-sm text-black"
            />
            <button type="submit" className="bg-blue-500 py-2 rounded-sm">
                Create Project
            </button>
            {isPending && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default ProjectForm;
