// src/app/projects/page.tsx

import { projects } from "@/data/projects"; // Import project data
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                    /* Using rest operator to get remainigng props */
                ))}
            </div>
        </div>
    );
};

export default Projects;
