"use client";
import { updateProject } from "@/actions/projectActions";
import CustomButton from "@/components/ui/CustomButton";
import { useState } from "react";

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
    const [isUpdated, setIsUpdated] = useState(false);
    return (
        <form
            className="flex flex-col gap-y-2"
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateProject(id, formData);
                setIsUpdated(true);
                setTimeout(() => setIsUpdated(false), 3000);
            }}
        >
            <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={title}
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <textarea
                rows={2}
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <input
                type="text"
                name="githubLink"
                placeholder="Github Link (optional)"
                defaultValue={githubLink ? githubLink : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="liveLink"
                placeholder="Live Link (optional)"
                defaultValue={liveLink ? liveLink : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image Url (optional)"
                defaultValue={imageUrl ? imageUrl : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="technologies"
                placeholder="Technologies"
                defaultValue={technologies.join(", ")}
                className="py-2 px-2 rounded-sm text-black"
                required
            />

            <CustomButton text="Update" type="submit" />

            {isUpdated && (
                <p className="text-green-500 mt-2">Updated successfully!</p>
            )}
        </form>
    );
};

export default UpdateProjectForm;
