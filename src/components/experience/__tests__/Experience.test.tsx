import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ExperienceListBase from "../ExperienceListBase"; // Ensure correct import

const mockExperiences = [
    {
        id: "1",
        title: "Experience Title 1",
        company: "Company Name 1",
        location: "Location 1",
        startDate: "2020",
        endDate: "2021",
        description: "Experience Description 1",
    },
    {
        id: "2",
        title: "Experience Title 2",
        company: "Company Name 2",
        location: "Location 2",
        startDate: "2019",
        endDate: "2020",
        description: "Experience Description 2",
    },
];

describe("<ExperienceListBase />", () => {
    test("renders the experience section", () => {
        render(<ExperienceListBase experiences={mockExperiences} />);
        expect(screen.getByText("Experience Title 1")).toBeInTheDocument();
        expect(screen.getByText("Experience Title 2")).toBeInTheDocument();
    });

    test("displays all experience details", () => {
        render(<ExperienceListBase experiences={mockExperiences} />);
        mockExperiences.forEach((experience) => {
            expect(screen.getByText(experience.title)).toBeInTheDocument();
            expect(screen.getByText(experience.company)).toBeInTheDocument();
            expect(screen.getByText(experience.location)).toBeInTheDocument();

            expect(
                screen.getByText(experience.description)
            ).toBeInTheDocument();
        });
    });

    test("displays no experiences message when list is empty", () => {
        render(<ExperienceListBase experiences={[]} />);
        expect(
            screen.getByText("No experience entries found.")
        ).toBeInTheDocument();
    });

    test("renders admin controls when isAdmin is true", () => {
        render(
            <ExperienceListBase experiences={mockExperiences} isAdmin={true} />
        );
        expect(screen.getAllByText("Delete").length).toBe(
            mockExperiences.length
        );
        expect(screen.getAllByText("Update").length).toBe(
            mockExperiences.length
        );
    });

    test("does not render admin controls when isAdmin is false", () => {
        render(
            <ExperienceListBase experiences={mockExperiences} isAdmin={false} />
        );
        expect(screen.queryByText("Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Update")).not.toBeInTheDocument();
    });

    test("renders Slide component for non-admin view", () => {
        render(
            <ExperienceListBase experiences={mockExperiences} isAdmin={false} />
        );
        mockExperiences.forEach((experience) => {
            expect(screen.getByText(experience.title)).toBeInTheDocument();
        });
    });

    test("renders raw content for admin view", () => {
        render(
            <ExperienceListBase experiences={mockExperiences} isAdmin={true} />
        );
        mockExperiences.forEach((experience) => {
            expect(screen.getByText(experience.title)).toBeInTheDocument();
        });
    });

    test("renders correct number of list items", () => {
        render(<ExperienceListBase experiences={mockExperiences} />);
        expect(screen.getAllByRole("listitem").length).toBe(
            mockExperiences.length
        );
    });
});
