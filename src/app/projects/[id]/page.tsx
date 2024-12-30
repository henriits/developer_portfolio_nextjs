// src/app/projects/[id]/page.tsx

import { projects } from "@/data/projects"; // Import the projects data

const ProjectPage = ({ params }: { params: { id: string } }) => {
    // Find the project with the matching id
    const project = projects.find((project) => project.id === params.id);

    if (!project) {
        return <div>Project not found</div>; // If no project is found, show an error
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="mb-4">{project.description}</p>
            <p>
                <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-blue-500"
                >
                    GitHub Repo
                </a>
            </p>
            {project.liveLink && (
                <p>
                    <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-blue-500"
                    >
                        Live Project
                    </a>
                </p>
            )}
        </div>
    );
};

export default ProjectPage;
