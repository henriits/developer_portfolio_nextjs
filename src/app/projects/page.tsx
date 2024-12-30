// src/app/projects/page.tsx

import ProjectCard from "@/components/ProjectCard"; // Make sure this import is correct

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold text-center text-indigo-600">
                My Projects
            </h1>

            {/* Project Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                    title="Project 1"
                    description="A short description of the project goes here."
                    githubUrl="https://github.com/yourusername/project1"
                    liveUrl="https://yourportfolio.com/project1"
                />
                <ProjectCard
                    title="Project 2"
                    description="Another project description."
                    githubUrl="https://github.com/yourusername/project2"
                    liveUrl="https://yourportfolio.com/project2"
                />
                {/* Add more ProjectCard components here */}
            </div>
        </div>
    );
}
