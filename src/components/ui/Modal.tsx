import { ReactNode } from "react";
import CustomButton from "./CustomButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, onConfirm, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-stone-900 p-6 rounded-md">
                {children}
                <div className="mt-4 flex justify-end space-x-2">
                    <CustomButton
                        text="Cancel"
                        onClick={onClose}
                        className="hover:text-green-600"
                    />

                    <CustomButton
                        text="Confirm"
                        onClick={onConfirm}
                        className="hover:text-red-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
