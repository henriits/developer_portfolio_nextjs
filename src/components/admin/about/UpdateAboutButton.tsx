"use client";
import { useState } from "react";
import UpdateAboutForm from "./UpdateAboutForm";
import CustomButton from "@/components/ui/CustomButton";

interface UpdateButtonProps {
    id: string;
    content: string;
}

const UpdateButton = ({ id, content }: UpdateButtonProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <CustomButton text="Update" onClick={() => setIsEditing(true)} />
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-neutral-900 p-2 rounded w-1/2 relative">
                        <h1 className="p-6">Update About</h1>
                        <CustomButton
                            className="hover:text-red-600 absolute top-2 right-2"
                            text="X"
                            onClick={() => setIsEditing(false)}
                        />
                        <UpdateAboutForm id={id} content={content} />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateButton;
