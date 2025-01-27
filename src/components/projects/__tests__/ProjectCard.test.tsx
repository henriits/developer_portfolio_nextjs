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

    const projectWithoutLinks = {
        ...project,
        githubLink: "",
        liveLink: "",
    };

    const projectWithoutImage = {
        ...project,
        imageUrl: "",
    };

    test("Renders Project Card without crashing", () => {
        render(<ProjectCard project={project} />);
        expect(screen.getByTestId("project-card")).toBeInTheDocument();
    });

    test("Displays project title as a link", () => {
        render(<ProjectCard project={project} />);
        const titleLink = screen.getByText("Project Title").closest("a");
        expect(titleLink).toHaveAttribute("href", `/projects/${project.slug}`);
    });

    test("Displays project image", () => {
        render(<ProjectCard project={project} />);
        const img = screen.getByAltText(`Project ${project.title}`);
        expect(img).toHaveAttribute("src", project.imageUrl);
    });

    test("Uses fallback image if imageUrl is not provided", () => {
        render(<ProjectCard project={projectWithoutImage} />);
        const img = screen.getByAltText(`Project ${project.title}`);
        expect(img).toHaveAttribute(
            "src",
            "https://upload.wikimedia.org/wikipedia/commons/6/63/Code_Icon.PNG?20141006223220"
        );
    });

    test("Displays GitHub link if available", () => {
        render(<ProjectCard project={project} />);
        const githubLink = screen.getByTitle("GitHub Repository");
        expect(githubLink).toHaveAttribute("href", project.githubLink);
    });

    test("Does not display GitHub link if not available", () => {
        render(<ProjectCard project={projectWithoutLinks} />);
        expect(
            screen.queryByTitle("GitHub Repository")
        ).not.toBeInTheDocument();
    });

    test("Displays live demo link if available", () => {
        render(<ProjectCard project={project} />);
        const liveLink = screen.getByTitle("Live Demo");
        expect(liveLink).toHaveAttribute("href", project.liveLink);
    });

    test("Does not display live demo link if not available", () => {
        render(<ProjectCard project={projectWithoutLinks} />);
        expect(screen.queryByTitle("Live Demo")).not.toBeInTheDocument();
    });

    test("Displays info link", () => {
        render(<ProjectCard project={project} />);
        const infoLink = screen.getByTitle(`More about ${project.title}`);
        expect(infoLink).toHaveAttribute("href", `/projects/${project.slug}`);
    });

    test("Displays technologies as icons if provided", () => {
        render(<ProjectCard project={project} />);
        const techList = screen.getByTestId("technologies-list");
        expect(techList).toBeInTheDocument();
        expect(screen.getAllByTitle("React").length).toBeGreaterThan(0);
        expect(screen.getAllByTitle("TypeScript").length).toBeGreaterThan(0);
    });
});
