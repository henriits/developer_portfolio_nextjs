import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProjectCard from "../ProjectCard";

describe("<ProjectCard />", () => {
    const project = {
        id: "1",
        title: "Project Title",
        slug: "project-title",
        description: "Project Description",
        imageUrl: "https://example.com/image.png",
        githubLink: "https://github.com",
        liveLink: "https://example.com",
        technologies: ["React", "TypeScript"],
    };

    test("Render Project Card", () => {
        render(<ProjectCard project={project} />);
    });

    test("Displays project title", () => {
        render(<ProjectCard project={project} />);
        expect(screen.getByText("Project Title")).toBeInTheDocument();
    });

    test("Displays project image", () => {
        render(<ProjectCard project={project} />);
        const img = screen.getByAltText(`Project ${project.title}`);
        expect(img).toHaveAttribute("src", project.imageUrl);
    });

    test("Displays GitHub link", () => {
        render(<ProjectCard project={project} />);
        const githubLink = screen.getByTitle("GitHub Repository");
        expect(githubLink).toHaveAttribute("href", project.githubLink);
    });

    test("Displays live demo link", () => {
        render(<ProjectCard project={project} />);
        const liveLink = screen.getByTitle("Live Demo");
        expect(liveLink).toHaveAttribute("href", project.liveLink);
    });
});
