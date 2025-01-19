"use server";
import { prisma } from "@/lib/db";

import UpdateExperienceButton from "./UpdateExperienceButton";
import DeleteButton from "@/components/ui/DeleteButton";
import { deleteExperience } from "@/actions/experienceActions";

export default async function AdminExperienceList() {
    const experiences = await prisma.experience.findMany();
    return (
        <section id="experience" className="w-full text-center px-6 py-12">
            <h2 className="main-font text-5xl font-bold mb-6 text-center z-10">
                E<span className="text-[#13DF14]">xp</span>erience
            </h2>

            <div className="flex flex-col justify-center items-center p-2">
                <div className="overflow-hidden">
                    <ul>
                        {experiences?.map(
                            ({
                                id,
                                title,
                                company,
                                location,
                                startDate,
                                endDate,
                                description,
                            }) => (
                                <li key={id} className="mb-3 p-3">
                                    <h3 className="text-xl font-bold">
                                        {title}
                                    </h3>
                                    <p>{company}</p>
                                    <p>{location}</p>
                                    <p>
                                        <span>{startDate}</span>
                                        <span>-</span>
                                        <span>{endDate}</span>
                                    </p>

                                    <p>{description}</p>
                                    <div className="pt-4 flex gap-x-4 items-center justify-center">
                                        <DeleteButton
                                            id={id}
                                            deleteAction={deleteExperience}
                                            label="Delete Experience"
                                        />
                                        <UpdateExperienceButton
                                            id={id}
                                            title={title}
                                            company={company}
                                            location={location}
                                            startDate={startDate}
                                            endDate={endDate}
                                            description={description}
                                        />
                                    </div>
                                    <br />
                                    <span className="text-[#13DF14]">|</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    );
}
