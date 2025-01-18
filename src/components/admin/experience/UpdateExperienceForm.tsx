"use client";
import { updateExperience } from "@/actions/experienceActions";

type ExperienceFormProps = {
    id: string;
    title: string;
    company: string;
    location: string | null;
    startDate: string | null;
    endDate: string | null;
    description: string;
};

const UpdateExperienceForm = ({
    id,
    title,
    company,
    location,
    startDate,
    endDate,
    description,
}: ExperienceFormProps) => {
    return (
        <form
            className="flex flex-col gap-y-2"
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateExperience(id, formData);
            }}
        >
            <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={title}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="company"
                placeholder="Company"
                defaultValue={company}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={location ? location : "Remote"}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                defaultValue={startDate ? startDate : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="endDate"
                placeholder="End Date"
                defaultValue={endDate ? endDate : ""}
                className="py-2 px-2 rounded-sm text-black"
            />
            <textarea
                rows={2}
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="py-2 px-2 rounded-sm text-black"
            />
            <button type="submit" className="bg-slate-800">
                Update
            </button>
        </form>
    );
};

export default UpdateExperienceForm;
