"use client";
import { useState } from "react";
import UpdateAboutForm from "./UpdateAboutForm";
import CustomButton from "@/components/ui/CustomButton";
import { AboutProps } from "../../../types/portfolioTypes";

const UpdateButton = ({ id, content }: AboutProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <CustomButton text="Update" onClick={() => setIsEditing(true)} />
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-neutral-900 p-2 rounded-xl relative w-full max-w-2xl mx-4">
                        <h1 className="p-6">Update About</h1>
                        <CustomButton
                            className="border-red-500 hover:bg-red-500 absolute top-2 right-2"
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
