"use client";
import { updateExperience } from "@/actions/experienceActions";
import CustomButton from "@/components/ui/CustomButton";
import { useState } from "react";
import { ExperienceProps } from "../../../../types/portfolioTypes";

const UpdateExperienceForm = ({
    id,
    title,
    company,
    location,
    startDate,
    endDate,
    description,
}: ExperienceProps) => {
    const [isUpdated, setIsUpdated] = useState(false);
    return (
        <form
            className="flex flex-col  w-full mx-auto gap-y-2"
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateExperience(id, formData);
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
            <input
                type="text"
                name="company"
                placeholder="Company"
                defaultValue={company}
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location (optional)"
                defaultValue={location ? location : "Remote"}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="startDate"
                placeholder="Start Date (optional)"
                defaultValue={startDate ? startDate : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="endDate"
                placeholder="End Date (optional)"
                defaultValue={endDate ? endDate : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <textarea
                rows={4}
                name="description"
                placeholder="Description"
                defaultValue={description}
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

export default UpdateExperienceForm;
