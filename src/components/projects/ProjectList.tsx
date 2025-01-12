import { Project } from "@prisma/client"; // Assuming you're using Prisma and have this type
import { useEffect, useState } from "react";

const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data: Project[] = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-semibold">
                All projects ({projects.length})
            </h1>

            <ul className="border-t border-b border-black/10 py-5">
                {projects.map((project) => (
                    <li key={project.id} className="py-2">
                        {project.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
