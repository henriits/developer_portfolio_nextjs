"use client";
import { updateProject } from "@/actions/projectActions";

type ProjectFormProps = {
    id: string;
    title: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
};

const UpdateProjectForm = ({
    id,
    title,
    description,
    githubLink,
    liveLink,
    imageUrl,
    technologies,
}: ProjectFormProps) => {
    return (
        <form
            className="flex flex-col gap-y-2"
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateProject(id, formData);
            }}
        >
            <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={title}
                className="py-2 px-2 rounded-sm text-black"
            />
            <textarea
                rows={2}
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="githubLink"
                placeholder="Github Link"
                defaultValue={githubLink ? githubLink : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="liveLink"
                placeholder="Live Link"
                defaultValue={liveLink ? liveLink : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image Url"
                defaultValue={imageUrl ? imageUrl : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="technologies"
                placeholder="Technologies"
                defaultValue={technologies.join(", ")}
                className="py-2 px-2 rounded-sm text-black"
            />
            <button type="submit" className="bg-slate-800">
                Update
            </button>
        </form>
    );
};

export default UpdateProjectForm;
