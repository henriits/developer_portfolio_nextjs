import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaArrowLeft,
    FaHome,
} from "react-icons/fa";
import Link from "next/link";
import { Img } from "@react-email/components";

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
            <div className="container mx-auto px-4 py-8 lg:py-12 max-w-screen-xl">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-12">
                    {/* Left Column - Image and Technologies */}
                    <div className="flex flex-col gap-2 md:items-end sm:pr-8 md:pr-8">
                        <div className="relative w-full max-w-[400px] aspect-square mx-auto md:mx-0">
                            <Img
                                src={
                                    project.imageUrl ||
                                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
                                }
                                alt={project.title}
                                className=" w-full h-full rounded-xl shadow-lg border-2 border-neutral-700"
                                loading="lazy"
                            />
                            <a
                                href={
                                    project.imageUrl ||
                                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0"
                                aria-label="View full size image"
                            ></a>
                        </div>
                        <div className="w-full max-w-[400px] mx-auto md:mx-0">
                            <h2 className="text-xl lg:text-2xl font-semibold mt-4 mb-4">
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies ? (
                                    project.technologies.flatMap(
                                        (tech, index) =>
                                            tech
                                                .split(",")
                                                .map((singleTech, subIndex) => (
                                                    <span
                                                        key={`${index}-${subIndex}`}
                                                        className="py-1 text-xs text-gray-400"
                                                        title={singleTech.trim()} // Display the text on hover
                                                    >
                                                        <i
                                                            className={`ci ci-${singleTech.trim()} ci-2x rounded-md`}
                                                        ></i>
                                                    </span>
                                                ))
                                    )
                                ) : (
                                    <p className="text-gray-400 text-sm">
                                        No technologies specified
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Title, Description, and Links */}
                    <div className="flex flex-col gap-6 md:pl-8">
                        <h1 className="text-3xl lg:text-4xl font-bold">
                            <span className="text-gray-400">Title: </span>
                            {project.title}
                        </h1>

                        <div className="flex-grow">
                            <p className="text-gray-300 leading-relaxed">
                                <span className="text-gray-400 border-b-2 border-[#13DF14] mb-3">
                                    Description
                                </span>
                                <br />
                                {project.description}
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="flex flex-wrap gap-4 mt-auto">
                            {project.githubLink && (
                                <a
                                    href={
                                        project.githubLink.startsWith("http")
                                            ? project.githubLink
                                            : `https://${project.githubLink}`
                                    } // Ensure it's an absolute URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg border-[#13DF14] hover:bg-[#13DF14] transition-colors"
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
                                    className="flex items-center border-2 gap-2 px-4 py-2 rounded-lg border-[#13DF14] hover:bg-[#13DF14] transition-colors"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                    <span>Demo</span>
                                </a>
                            )}

                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-4 py-2 border-2 rounded-lg border-[#13DF14] hover:bg-[#13DF14] transition-colors"
                            >
                                <FaArrowLeft className="text-lg" />
                                <span>Back to Projects</span>
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-4 py-2 border-2 rounded-lg border-[#13DF14] hover:bg-[#13DF14] transition-colors"
                            >
                                <FaHome className="text-lg" />
                                <span>Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
