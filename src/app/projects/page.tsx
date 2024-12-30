// src/app/page.tsx

import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    const projects = [
        {
            title: "Project 1",
            description: "This is a description of Project 1.",
            githubLink: "https://github.com/username/project1",
            liveLink: "https://live-project1.com",
        },
        {
            title: "Project 2",
            description: "This is a description of Project 2.",
            githubLink: "https://github.com/username/project2",
            liveLink: "", // No live link for this one
        },
        // Add more projects as needed
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </div>
    );
}
