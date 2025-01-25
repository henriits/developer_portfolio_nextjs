"use client";

import { addProject } from "@/actions/projectActions";
import CustomButton from "@/components/ui/CustomButton";
import { useActionState, useEffect, useState } from "react";

const ProjectForm = () => {
    const [error, action, isPending] = useActionState(addProject, null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <form
                    action={action}
                    className="flex mx-auto max-w-screen-md flex-col gap-y-2 pb-12"
                >
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="py-2 px-2 rounded-sm text-black"
                        required
                    />
                    <textarea
                        name="description"
                        rows={2}
                        placeholder="Description"
                        className="py-2 px-2 rounded-sm text-black"
                        required
                    />
                    <input
                        type="text"
                        name="githubLink"
                        placeholder="GitHub Link (optional)"
                        className="py-2 px-2 rounded-sm text-black"
                    />
                    <input
                        type="text"
                        name="liveLink"
                        placeholder="Live Link (optional)"
                        className="py-2 px-2 rounded-sm text-black"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL (optional)"
                        className="py-2 px-2 rounded-sm text-black"
                    />
                    <input
                        type="text"
                        name="technologies"
                        placeholder="Technologies (comma-separated) js,react,tailwindcss,ts"
                        className="py-2 px-2 rounded-sm text-black"
                        required
                    />
                    <p className="text-gray-400">
                        Look for possible icons at:{" "}
                        <a
                            href="https://colored-icons.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#13DF14]"
                        >
                            Colored icons
                        </a>
                    </p>
                    <CustomButton
                        text="Add Project"
                        type="submit"
                        disabled={isPending}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    {isPending && <p>Loading...</p>}
                </form>
            )}
        </>
    );
};

export default ProjectForm;
