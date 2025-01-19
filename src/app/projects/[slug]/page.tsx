import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
        where: { slug },
    });

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-neutral-900 text-white">
            <div className="container mx-auto px-4 py-16 lg:py-24 space-y-12 lg:space-y-20 max-w-screen-xl">
                {/* Hero Section */}
                <section className="flex flex-col items-center gap-8">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <img
                            src={
                                project.imageUrl ||
                                "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
                            }
                            alt={project.title}
                            className="object-cover w-full h-full rounded-xl shadow-lg border-2 border-neutral-700"
                            loading="lazy"
                        />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        {project.title}
                    </h1>

                    {/* Links Section */}
                    <div className="flex gap-4">
                        {project.githubLink && (
                            <a
                                href={
                                    project.githubLink.startsWith("http")
                                        ? project.githubLink
                                        : `https://${project.githubLink}`
                                } // Ensure it's an absolute URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
                            >
                                <FaGithub className="text-xl" />
                                <span>GitHub</span>
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={
                                    project.liveLink.startsWith("http")
                                        ? project.liveLink
                                        : `https://${project.liveLink}`
                                } // Ensure it's an absolute URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center border-2 gap-2 px-6 py-3 rounded-lg hover:bg-neutral-700 hover:text-[#13DF14] transition-colors"
                            >
                                <FaExternalLinkAlt className="text-lg" />
                                <span>Demo</span>
                            </a>
                        )}
                    </div>
                </section>

                {/* Description Section */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                        About this Project
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </section>

                {/* Technologies Section */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies ? (
                            project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors border-2"
                                >
                                    {tech.trim()}
                                </span>
                            ))
                        ) : (
                            <p className="text-gray-400">
                                No technologies specified
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
