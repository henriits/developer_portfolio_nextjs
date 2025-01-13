"use client";
import { addAbout } from "@/actions/aboutActions";
import { useActionState } from "react";

const AboutForm = () => {
    const [error, action, isPending] = useActionState(addAbout, null);
    return (
        <form action={action} className="flex flex-col gap-y-2">
            <textarea
                rows={2}
                name="content"
                placeholder="write about yourself.."
                className="py-2 px-2 rounded-sm  text-black"
            />
            <button type="submit" className="py-2 px-2 rounded-sm bg-slate-600">
                Add About
            </button>
            {isPending && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};
export default AboutForm;
