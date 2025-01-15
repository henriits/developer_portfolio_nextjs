"use client";
import { updateExperience } from "@/actions/experienceActions";
import { useState } from "react";

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
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                defaultValue={company}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                defaultValue={location ? location : "Remote"}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <input
                                type="text"
                                name="startDate"
                                placeholder="Start Date"
                                defaultValue={startDate ? startDate : ""}
                                className="py-2 px-2 rounded-sm  text-black"
                            />

                            <input
                                type="text"
                                name="endDate"
                                placeholder="End Date"
                                defaultValue={endDate ? endDate : ""}
                                className="py-2 px-2 rounded-sm  text-black"
                            />
                            <textarea
                                rows={2}
                                name="description"
                                placeholder="Description"
                                defaultValue={description}
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
