// src/app/page.tsx

import { projects } from "@/data/projects"; // Import the data
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="mb-8">
                Explore my projects, learn about me, and get in touch.
            </p>

            <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
