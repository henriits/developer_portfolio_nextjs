import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectListBase from "../ProjectListBase";
import { ProjectProps } from "@/types/portfolioTypes";

describe("<ProjectListBase />", () => {
    const projects: ProjectProps[] = [
        {
            id: "1",
            title: "Project One",
            slug: "project-one",
            description: "This is project one",
            technologies: ["React", "Node.js"],
            githubLink: "https://github.com/project-one",
            liveLink: "https://live-project-one.com",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: "2",
            title: "Project Two",
            slug: "project-two",
            description: "This is project two",
            technologies: ["Vue", "Express"],
            githubLink: "",
            liveLink: "",
            imageUrl: "",
        },
    ];

    test("Displays no projects message when list is empty", () => {
        render(<ProjectListBase projects={[]} />);
        expect(
            screen.getByText("No project entries found.")
        ).toBeInTheDocument();
    });

    test("Renders all projects in the list", () => {
        render(<ProjectListBase projects={projects} />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
    });

    test("Displays admin controls when isAdmin is true", () => {
        render(<ProjectListBase projects={projects} isAdmin={true} />);
        expect(screen.getAllByText("Delete").length).toBe(2);
        expect(screen.getAllByText("Update").length).toBe(2);
    });

    test("Does not display admin controls when isAdmin is false", () => {
        render(<ProjectListBase projects={projects} isAdmin={false} />);
        expect(screen.queryByText("Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Update")).not.toBeInTheDocument();
    });

    test("Renders project card for non-admin view", () => {
        render(<ProjectListBase projects={projects} isAdmin={false} />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
    });

    test("Limits the number of displayed projects when limit is provided", () => {
        render(<ProjectListBase projects={projects} limit={1} />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.queryByText("Project Two")).not.toBeInTheDocument();
    });

    test("Displays project details in admin view", () => {
        render(<ProjectListBase projects={projects} isAdmin={true} />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("This is project one")).toBeInTheDocument();
    });

    test("Displays GitHub and Live Links when available", () => {
        render(<ProjectListBase projects={projects} isAdmin={true} />);
        expect(
            screen.getByText("https://github.com/project-one")
        ).toBeInTheDocument();
        expect(
            screen.getByText("https://live-project-one.com")
        ).toBeInTheDocument();
    });

    test("Displays images when provided", () => {
        render(<ProjectListBase projects={projects} isAdmin={true} />);
        const img = screen.getByAltText("Project One");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "https://via.placeholder.com/150");
    });

    test("Handles missing images gracefully", () => {
        render(<ProjectListBase projects={[projects[1]]} isAdmin={true} />);
        expect(screen.queryByAltText("Project Two")).not.toBeInTheDocument();
    });
});
