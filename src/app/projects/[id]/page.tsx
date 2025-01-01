// src/app/projects/[id]/page.tsx

import { notFound } from "next/navigation"; // Import notFound for handling errors
import Link from "next/link"; // Import Link for navigation
import { Project } from "@/types/projectTypes";

type ProjectPageProps = {
    params: { id: string };
};

// Fetch project data from an API or database based on id
const fetchProjectById = async (id: string): Promise<Project | undefined> => {
    try {
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
    const { id } = await params; // Extract the id

    // Fetch the project data from API
    const project = await fetchProjectById(id);

    // If project is not found, trigger 404
    if (!project) {
        console.log("Project not found with id:", id);
        notFound(); // Trigger 404 error page
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            {/* Project Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                {project.title}
            </h1>

            {/* Project Image */}
            <div className="w-full h-72 mb-8 overflow-hidden rounded-lg shadow-md">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Project Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {project.description}
            </p>

            {/* Links Section */}
            <div className="flex space-x-6 mb-6">
                <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-all duration-200"
                >
                    GitHub Repo
                </a>

                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-all duration-200"
                    >
                        Live Project
                    </a>
                )}
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
                <Link href="/projects">
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-200">
                        Back to Projects
                    </button>
                </Link>
            </div>
        </div>
    );
}
