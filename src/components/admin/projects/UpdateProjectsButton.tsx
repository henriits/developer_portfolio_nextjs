"use client";

import { updateProject } from "@/actions/projectActions";
import { useState } from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import CustomButton from "@/components/ui/CustomButton";

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
            <CustomButton text="Update" onClick={() => setIsEditing(true)} />
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-neutral-900 p-2 rounded-xl relative w-full max-w-2xl mx-4">
                        <h1 className="p-6">Update Project</h1>
                        <CustomButton
                            className="hover:text-red-600 absolute top-2 right-2"
                            text="X"
                            onClick={() => setIsEditing(false)}
                        />
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
