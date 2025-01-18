import { prisma } from "@/lib/db";

export default async function AboutList() {
    const abouts = await prisma.about.findMany();
    return (
        <div className="border-s-orange-600 pt-10" id="about">
            <section
                id="about"
                className=" w-full flex flex-col items-center justify-center  px-6 py-12"
            >
                <h2 className="main-font text-5xl font-bold mb-6 text-center z-10">
                    About <span className="text-[#13DF14]">Me</span>
                </h2>
                <ul>
                    {abouts?.map((about) => (
                        <li key={about.id}>
                            <div className="text-center max-w-3xl mx-auto ">
                                {about.content}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
