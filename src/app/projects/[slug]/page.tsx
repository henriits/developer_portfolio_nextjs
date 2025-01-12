import { prisma } from "@/lib/db";

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
        where: {
            slug: slug,
        },
    });
    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <main className="flex flex-col items-center gap-y-16 pt-24 px-4 lg:px-32 text-center text-white bg-neutral-900 min-h-screen">
                {/* Hero Section */}
                <section className="w-full flex flex-col items-center gap-y-6">
                    <img
                        src={
                            project?.imageUrl ||
                            "https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain"
                        }
                        alt={project?.title ?? "Default title"}
                        className="lg:h-96 object-cover rounded-xl shadow-lg border-4 "
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                    <h1 className="text-4xl lg:text-6xl font-bold ">
                        {project?.title ?? "No title available"}
                    </h1>
                </section>

                {/* Description Section */}
                <section className="w-full max-w-4xl">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        Description
                    </h2>
                    <p className="text-lg text-gray-300">
                        {project?.description ?? "No description available"}
                    </p>
                </section>

                {/* Technologies Section */}
                <section className="w-full max-w-4xl">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        Technologies
                    </h2>
                    <ul className="flex flex-wrap gap-2 justify-center">
                        {project?.technologies.map((tech) => (
                            <li
                                key={tech}
                                className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Links Section */}
                {(project?.githubLink || project?.liveLink) && (
                    <section className="w-full max-w-4xl">
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                            Project Links
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
                            {project?.githubLink && (
                                <a
                                    href={
                                        project.githubLink.startsWith("http")
                                            ? project.githubLink
                                            : `https://${project.githubLink}`
                                    }
                                    className="border-2  text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-lg font-bold transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            )}
                            {project?.liveLink && (
                                <a
                                    href={
                                        project.liveLink.startsWith("http")
                                            ? project.liveLink
                                            : `https://${project.liveLink}`
                                    }
                                    className="border-2  text-white hover:text-[#13DF14] py-3 px-8 rounded-lg text-lg font-bold transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </section>
                )}
            </main>
        </main>
    );
}
