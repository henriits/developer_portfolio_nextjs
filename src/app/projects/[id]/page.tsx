// src/app/projects/[id]/page.tsx

import { projects } from "@/data/projects"; // Import the projects data
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

export default async function ProjectPage({ params }: ProjectPageProps) {
    // Await params to access its properties correctly
    const { id } = await params; // Access the id after awaiting it

    // Simulate async operation (e.g., fetching from an API or database)
    const fetchProjectById = async (
        id: string
    ): Promise<Project | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const project = projects.find((project) => project.id === id);
                resolve(project);
            }, 100); // Simulate a slight delay
        });
    };

    // Await the project data
    const project = await fetchProjectById(id);

    // If project is not found, show the 404 page
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
