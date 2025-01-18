"use server";

import { deleteAbout } from "@/actions/aboutActions";
import DeleteButton from "@/components/ui/DeleteButton";
import { prisma } from "@/lib/db";
import UpdateButton from "./UpdateAboutButton";

export default async function AdminAboutList() {
    const abouts = await prisma.about.findMany();

    return (
        <div className="border-s-orange-600">
            <section
                id="about"
                className="w-full flex flex-col items-center justify-center px-6 py-12"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">
                    About <span className="text-[#13DF14]">Me</span>
                </h2>
                <ul>
                    {abouts?.map((about) => (
                        <li key={about.id}>
                            <div className="text-center max-w-3xl mx-auto">
                                {about.content}
                                <DeleteButton
                                    id={about.id}
                                    deleteAction={deleteAbout}
                                    label="Delete About"
                                />
                                <UpdateButton
                                    id={about.id}
                                    content={about.content}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
