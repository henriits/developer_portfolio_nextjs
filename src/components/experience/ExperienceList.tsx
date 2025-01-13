import { prisma } from "@/lib/db";

export default async function ExperienceList() {
    const experiences = await prisma.experience.findMany();
    return (
        <section id="experience" className="w-full text-center px-6 py-12">
            <h2 className="text-3xl font-bold mb-6 text-center z-10">
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
                                <li key={id}>
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
