"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Import ProjectCard component
import { Project } from "@/types/projectTypes";

interface ProjectsListProps {
    limit?: number; // Optional limit for the number of projects to display
}

const ProjectsList: React.FC<ProjectsListProps> = ({ limit }) => {
    const [projects, setProjects] = useState<Project[]>([]); // State to store projects
    const [loading, setLoading] = useState<boolean>(true); // State to track loading status
    const [error, setError] = useState<string | null>(null); // State for error handling

    // Fetch projects from the API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data = await response.json();
                setProjects(data); // Set projects data to state
            } catch (err: any) {
                setError(err.message); // Set error message if any
            } finally {
                setLoading(false); // Set loading to false once fetch is complete
            }
        };

        fetchProjects(); // Call the fetch function
    }, []);

    if (loading) {
        return <div>Loading projects...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }

    // Determine which projects to display based on the limit prop
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {displayedProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};

export default ProjectsList;
