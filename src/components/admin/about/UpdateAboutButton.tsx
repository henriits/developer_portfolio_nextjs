"use client";
import { useState } from "react";
import UpdateAboutForm from "./UpdateAboutForm";

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
                        <UpdateAboutForm id={id} content={content} />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateButton;
