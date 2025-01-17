import { prisma } from "@/lib/db";

import UpdateAboutButton from "./UpdateAboutButton";
import DeleteButton from "@/components/ui/DeleteButton";
import { deleteAbout } from "@/actions/aboutActions";

export default async function AdminAboutList() {
    const abouts = await prisma.about.findMany();
    return (
        <div className="border-s-orange-600">
            <section
                id="about"
                className=" w-full flex flex-col items-center justify-center  px-6 py-12"
            >
                <h2 className="text-3xl font-bold mb-6 text-center z-10">
                    About <span className="text-[#13DF14]">Me</span>
                </h2>
                <ul>
                    {/* We can later separate this part, and use only this in admin about list.. rest of the code would go in general file */}
                    {abouts?.map((about) => (
                        <li key={about.id}>
                            <div className="text-center max-w-3xl mx-auto ">
                                {about.content}
                                <DeleteButton
                                    id={about.id}
                                    deleteAction={deleteAbout}
                                    label="Delete About"
                                />
                                <UpdateAboutButton
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
