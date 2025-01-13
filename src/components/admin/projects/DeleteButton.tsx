"use client";

import { deleteProject } from "@/actions/projectActions";

const DeleteButton = ({ id }: { id: string }) => {
    return (
        <button
            onClick={() => {
                deleteProject(id);
            }}
            className="bg-red-500 px-1 py-1 rounded-md"
        >
            x
        </button>
    );
};
export default DeleteButton;
