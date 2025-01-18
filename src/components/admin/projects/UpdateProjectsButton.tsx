"use client";

import { updateProject } from "@/actions/projectActions";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";

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
                        <UpdateProjectForm
                            id={id}
                            title={title}
                            description={description}
                            githubLink={githubLink}
                            liveLink={liveLink}
                            imageUrl={imageUrl}
                            technologies={technologies}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateButton;
