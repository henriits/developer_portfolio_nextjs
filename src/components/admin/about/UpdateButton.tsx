"use client";
import { useState } from "react";

import { updateAbout } from "@/actions/aboutActions";

interface UpdateButtonProps {
    id: string;
    content: string;
}

const UpdateButton = ({ id, content }: UpdateButtonProps) => {
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
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                await updateAbout(id, formData);
                            }}
                        >
                            <textarea
                                rows={2}
                                name="content"
                                placeholder="write about yourself.."
                                defaultValue={content}
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
