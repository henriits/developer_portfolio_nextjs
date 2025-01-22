import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExperienceListBase from "./ExperienceListBase"; // Ensure correct import

describe("<ExperienceListBase />", () => {
    const experiences = [
        {
            id: "1",
            title: "Experience Title",
            company: "Company Name",
            location: "Location",
            startDate: "2020-01-01",
            endDate: "2021-01-01",
            description: "Experience Description",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    test("Render Experience Card", () => {
        render(<ExperienceListBase experiences={experiences} />);
    });

    test("Displays experience title", () => {
        render(<ExperienceListBase experiences={experiences} />);
        expect(screen.getByText("Experience Title")).toBeInTheDocument();
    });

    test("Displays company name", () => {
        render(<ExperienceListBase experiences={experiences} />);
        expect(screen.getByText("Company Name")).toBeInTheDocument();
    });

    test("Displays location", () => {
        render(<ExperienceListBase experiences={experiences} />);
        expect(screen.getByText("Location")).toBeInTheDocument();
    });

    test("Displays start and end dates", () => {
        render(<ExperienceListBase experiences={experiences} />);
        expect(screen.getByText("2020-01-01")).toBeInTheDocument();
        expect(screen.getByText("2021-01-01")).toBeInTheDocument();
    });

    test("Displays experience description", () => {
        render(<ExperienceListBase experiences={experiences} />);
        expect(screen.getByText("Experience Description")).toBeInTheDocument();
    });

    test("Displays no experiences message when list is empty", () => {
        render(<ExperienceListBase experiences={[]} />);
        expect(
            screen.getByText("No experience entries found.")
        ).toBeInTheDocument();
    });

    test("Displays admin buttons when isAdmin is true", () => {
        render(<ExperienceListBase experiences={experiences} isAdmin={true} />);
        expect(screen.getByText("Delete")).toBeInTheDocument();
        expect(screen.getByText("Update")).toBeInTheDocument();
    });

    test("Does not display admin buttons when isAdmin is false", () => {
        render(
            <ExperienceListBase experiences={experiences} isAdmin={false} />
        );
        expect(screen.queryByText("Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Update")).not.toBeInTheDocument();
    });
});
