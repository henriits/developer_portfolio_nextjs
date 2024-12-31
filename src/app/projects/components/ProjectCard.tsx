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
        <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <div className="flex space-x-4">
                <a href={githubLink} target="_blank" className="text-blue-500">
                    GitHub
                </a>
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        className="text-blue-500"
                    >
                        Live
                    </a>
                )}
                <div className="w-36 h-36 overflow-hidden border border-gray-300">
                    <img
                        src={imageUrl}
                        alt="Project Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <Link href={`/projects/${id}`}>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded">
                    See Details
                </button>
            </Link>
        </div>
    );
};

export default ProjectCard;
