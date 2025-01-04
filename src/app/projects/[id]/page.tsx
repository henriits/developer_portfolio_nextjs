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
        <div className="min-h-screen flex flex-col  bg-gradient-to-r from-black via-blue-800 to-blue-300 text-white px-6 py-12 relative">
            <div>
                {/* Project Title */}
                <h1 className="text-4xl font-bold text-white mb-6 mt-12">
                    {project.title}
                </h1>

                {/* Project Image */}
                <div className="w-1200 mb-8 overflow-hidden rounded-lg shadow-md">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className=" object-cover rounded-lg"
                    />
                </div>

                {/* Project Description */}
                <p className="text-lg text-white mb-6 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index} // Use index as key since IDs are not provided
                            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                            {tech.trim()} {/* Trim whitespace */}
                        </span>
                    ))}
                </div>

                {/* Links Section */}
                <div className="flex space-x-6 mb-6">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-neonGreen hover:text-blue-500 font-semibold transition-all duration-200"
                    >
                        GitHub Repo
                    </a>

                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            className="text-neonGreen hover:text-blue-500 font-semibold transition-all duration-200"
                        >
                            Live Project
                        </a>
                    )}
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link href="/projects">
                        <button className="border-2 border-neonGreen text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-neonGreen hover:text-black transition-all duration-200">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
