"use client";
import { deleteAbout } from "@/actions/aboutActions";

const DeleteButton = ({ id }: { id: string }) => {
    return (
        <button
            onClick={() => {
                deleteAbout(id);
            }}
            className="bg-red-500 px-1 py-1 rounded-md"
        >
            x
        </button>
    );
};
export default DeleteButton;
