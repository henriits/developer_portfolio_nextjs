"use client";
import { addAbout } from "@/actions/aboutActions";
import CustomButton from "@/components/ui/CustomButton";
import { useActionState } from "react";

const AboutForm = () => {
    const [error, action, isPending] = useActionState(addAbout, null);
    return (
        <form
            action={action}
            className="flex flex-col max-w-screen-md mx-auto gap-y-2"
        >
            <textarea
                rows={2}
                name="content"
                placeholder="write about yourself.. (you can submit multiple sentences)"
                className="py-2 px-2 rounded-sm  text-black"
                required
            />
            <CustomButton text="Add About" type="submit" disabled={isPending} />
            {isPending && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};
export default AboutForm;
