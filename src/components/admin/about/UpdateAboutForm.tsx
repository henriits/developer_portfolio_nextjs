"use client";
import { updateAbout } from "@/actions/aboutActions";

interface UpdateAboutFormProps {
    id: string;
    content: string;
}

const UpdateAboutForm = ({ id, content }: UpdateAboutFormProps) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await updateAbout(id, formData);
            }}
        >
            <textarea
                rows={2}
                name="content"
                placeholder="write about yourself.."
                defaultValue={content}
                className="py-2 px-2 rounded-sm  text-black"
            />
            <button type="submit" className="bg-slate-800">
                Update
            </button>
        </form>
    );
};

export default UpdateAboutForm;
