// src/components/ProjectCard.tsx

import { Project } from "@/types/projectTypes";
import Link from "next/link";

const ProjectCard = ({
    id,
    title,
    description,
    githubLink,
    liveLink,
    imageUrl,
}: Project) => {
    return (
        <div className="relative group w-full max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imageUrl}
                    alt="Project Image"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-2xl font-semibold mb-4">
                    {title}
                </h3>
                <p className="text-white text-lg mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="flex justify-between items-center">
                    <div className="space-x-4">
                        <a
                            href={githubLink}
                            target="_blank"
                            className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                            >
                                Live
                            </a>
                        )}
                    </div>
                    <Link href={`/projects/${id}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform group-hover:scale-105 hover:bg-blue-600">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
