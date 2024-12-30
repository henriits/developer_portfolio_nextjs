// src/components/ProjectCard.tsx

import Link from "next/link";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    description,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="border p-4 rounded-lg">
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
