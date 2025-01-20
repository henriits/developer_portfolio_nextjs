"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

interface DeleteButtonProps {
    id: string;
    deleteAction: (id: string) => Promise<void>; // Accept a delete function as a prop
    label: string; // Optional label for the button text
}

const DeleteButton = ({ id, deleteAction, label }: DeleteButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        await deleteAction(id);
        setIsModalOpen(false);
    };

    return (
        <>
            <CustomButton
                text={label || "Delete"}
                onClick={() => setIsModalOpen(true)}
                className="hover:bg-red-500 text-white border-red-500 px-1 py-1 rounded-md"
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
            >
                <p>Are you sure you want to delete this item?</p>
            </Modal>
        </>
    );
};

export default DeleteButton;
