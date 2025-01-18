"use client";
import { updateExperience } from "@/actions/experienceActions";
import { useState } from "react";
import UpdateExperienceForm from "./UpdateExperienceForm";

type Experience = {
    id: string;
    title: string;
    company: string;
    location: string | null;
    startDate: string | null;
    endDate: string | null;
    description: string;
};

const UpdateButton = ({
    id,
    title,
    company,
    location,
    startDate,
    endDate,
    description,
}: Experience) => {
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
                        <UpdateExperienceForm
                            id={id}
                            title={title}
                            company={company}
                            location={location}
                            startDate={startDate}
                            endDate={endDate}
                            description={description}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateButton;
