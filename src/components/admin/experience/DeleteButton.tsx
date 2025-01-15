"use client";

import { deleteExperience } from "@/actions/experienceActions";

const DeleteButton = ({ id }: { id: string }) => {
    return (
        <button
            onClick={() => {
                deleteExperience(id);
            }}
            className="bg-red-500 px-1 py-1 rounded-md"
        >
            Delete
        </button>
    );
};
export default DeleteButton;
