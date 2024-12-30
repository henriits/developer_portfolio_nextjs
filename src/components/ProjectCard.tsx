// src/components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string; // Live URL is optional
}

export default function ProjectCard({
    title,
    description,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold text-indigo-600">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>

            <div className="mt-4 flex justify-between">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    GitHub Repo
                </a>
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}
