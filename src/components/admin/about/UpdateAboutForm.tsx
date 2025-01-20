"use client";
import { useState } from "react";
import { updateAbout } from "@/actions/aboutActions";
import CustomButton from "@/components/ui/CustomButton";

interface UpdateAboutFormProps {
    id: string;
    content: string;
}

const UpdateAboutForm = ({ id, content }: UpdateAboutFormProps) => {
    const [isUpdated, setIsUpdated] = useState(false);

    return (
        <form
            className="flex flex-col gap-y-2 w-full mx-auto"
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateAbout(id, formData);
                setIsUpdated(true);
                setTimeout(() => setIsUpdated(false), 3000); // Hide message after 3 seconds
            }}
        >
            <textarea
                rows={5}
                name="content"
                placeholder="write about yourself.."
                defaultValue={content}
                className="py-2 px-2 rounded-sm text-black w-full"
            />

            <CustomButton text="Update" type="submit" />

            {isUpdated && (
                <p className="text-green-500 mt-2">Updated successfully!</p>
            )}
        </form>
    );
};

export default UpdateAboutForm;
