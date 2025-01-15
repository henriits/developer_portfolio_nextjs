"use client";

interface DeleteButtonProps {
    id: string;
    deleteAction: (id: string) => Promise<void>; // Accept a delete function as a prop
    label: string; // Optional label for the button text
}

const DeleteButton = ({ id, deleteAction, label }: DeleteButtonProps) => {
    return (
        <button
            onClick={() => {
                deleteAction(id);
            }}
            className="bg-red-500 px-1 py-1 rounded-md"
        >
            {label}
        </button>
    );
};

export default DeleteButton;
