"use client";
import { addExperience } from "@/actions/experienceActions";
import { useActionState } from "react";

const ExperienceForm = () => {
    const [error, action, isPending] = useActionState(addExperience, null);
    return (
        <form
            action={action}
            className="flex flex-col mx-auto max-w-screen-md gap-y-2"
        >
            <input
                type="text"
                name="title"
                placeholder="enter job title"
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <input
                type="text"
                name="company"
                placeholder="enter company name"
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <input
                type="text"
                name="location"
                placeholder="enter location / remote (optional) "
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="startDate"
                placeholder="enter year from (optional)"
                className="py-2 px-2 rounded-sm text-black"
            />
            <input
                type="text"
                name="endDate"
                placeholder="enter year until (optional)"
                className="py-2 px-2 rounded-sm text-black"
            />
            <textarea
                name="description"
                rows={2}
                placeholder="description..."
                className="py-2 px-2 rounded-sm text-black"
                required
            />
            <button
                type="submit"
                className="py-2 px-2 rounded-sm bg-slate-600"
                disabled={isPending}
            >
                Add experience
            </button>
            {isPending && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};
export default ExperienceForm;
