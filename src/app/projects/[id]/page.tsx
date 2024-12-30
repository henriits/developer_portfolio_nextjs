// src/app/projects/[id]/page.tsx

import { notFound } from "next/navigation"; // Import notFound for handling errors
import Link from "next/link"; // Import Link for navigation

// Define the Project type
interface Project {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
}

type ProjectPageProps = {
    params: { id: string };
};

// Fetch project data from an API or database based on id
const fetchProjectById = async (id: string): Promise<Project | undefined> => {
    try {
        // Ensure to use the full URL for the API request
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`
        );
        if (!response.ok) {
            throw new Error("Project not found");
        }
        const project = await response.json();
        return project;
    } catch (error) {
        console.error("Error fetching project:", error);
        return undefined;
    }
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    // Extract the id from params
    const { id } = params;

    // Fetch the project data from API
    const project = await fetchProjectById(id);

    // If project is not found, trigger 404
    if (!project) {
        console.log("Project not found with id:", id);
        notFound(); // Trigger 404 error page
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
            <div className="mt-6">
                <Link href="/projects">
                    <button className="bg-gray-500 text-white p-2 rounded">
                        Back to Projects
                    </button>
                </Link>
            </div>
        </div>
    );
}
