"use client";

import { updateProject } from "@/actions/projectActions";
import { useState } from "react";

type Project = {
    id: string;
    title: string;
    description: string;
    githubLink: string | null;
    liveLink: string | null;
    imageUrl: string | null;
    technologies: string[];
};

const UpdateButton = ({
    id,
    title,
    description,
    githubLink,
    liveLink,
    imageUrl,
    technologies,
}: Project) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsEditing(true)}
                className="py-2 px-2 rounded-sm bg-blue-600 ml-2"
            >
                Update
            </button>
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="py-1 px-2 rounded-sm bg-red-600 mb-2"
                        >
                            Close
                        </button>
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
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <textarea
                                rows={2}
                                name="description"
                                placeholder="Description"
                                defaultValue={description}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="githubLink"
                                placeholder="Github Link"
                                defaultValue={githubLink ? githubLink : ""}
                                className="py-2 px-2 rounded-sm  text-black"
                            />

                            <input
                                type="text"
                                name="liveLink"
                                placeholder="Live Link"
                                defaultValue={liveLink ? liveLink : ""}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="imageUrl"
                                placeholder="Image Url"
                                defaultValue={imageUrl ? imageUrl : ""}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="technologies"
                                placeholder="Technologies"
                                defaultValue={technologies.join(", ")}
                                className="py-2 px-2 rounded-sm  text-black"
                            />

                            <button type="submit" className="bg-slate-800">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateButton;
