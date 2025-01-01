// src/app/projects/page.tsx
"use client";

import ProjectsList from "./components/ProjectList";

const Projects = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <ProjectsList />
        </div>
    );
};

export default Projects;
