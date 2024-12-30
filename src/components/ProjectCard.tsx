// src/components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
}

const ProjectCard = ({
    title,
    description,
    githubLink,
    liveLink,
}: ProjectCardProps) => {
    return (
        <div className="project-card border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-2">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        GitHub Repository
                    </a>
                )}
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 ml-4"
                    >
                        Live Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
