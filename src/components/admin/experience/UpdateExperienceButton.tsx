"use client";
import { useState } from "react";
import UpdateExperienceForm from "./UpdateExperienceForm";
import CustomButton from "@/components/ui/CustomButton";
import { ExperienceProps } from "../../../../types/portfolioTypes";

const UpdateButton = ({
    id,
    title,
    company,
    location,
    startDate,
    endDate,
    description,
}: ExperienceProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <CustomButton text="Update" onClick={() => setIsEditing(true)} />
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-neutral-900 p-2 rounded-xl relative w-full max-w-2xl mx-4">
                        <h1 className="p-6">Update Experience</h1>
                        <CustomButton
                            className="border-red-500 hover:bg-red-500 absolute top-2 right-2"
                            text="X"
                            onClick={() => setIsEditing(false)}
                        />
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
