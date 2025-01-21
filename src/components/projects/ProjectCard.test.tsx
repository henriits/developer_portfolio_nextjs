import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import ProjectCard from "./ProjectCard";

describe("<ProjectCard />", () => {
    const project = {
        id: "1",
        title: "Project Title",
        slug: "project-title",
        description: "Project Description",
        imageUrl: "https://example.com/image.png",
        githubLink: "https://github.com",
        liveLink: "https://example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        technologies: ["React", "TypeScript"],
    };
    test("Render Project Card", () => {
        render(<ProjectCard project={project} />);
    });
});
