import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutListBase from "../AboutListBase";

const mockAbouts = [
    {
        id: "1",
        content: "About content 1",
    },
    {
        id: "2",
        content: "About content 2",
    },
];

describe("<AboutListBase />", () => {
    test("renders the about section", () => {
        render(<AboutListBase abouts={mockAbouts} />);
        expect(screen.getByTestId("about-section")).toBeInTheDocument();
    });

    test("displays all about content items", () => {
        render(<AboutListBase abouts={mockAbouts} />);
        mockAbouts.forEach((about) => {
            expect(screen.getByText(about.content)).toBeInTheDocument();
        });
        expect(screen.getAllByTestId("about-content-item").length).toBe(
            mockAbouts.length
        );
    });

    test("displays a message when no about entries are found", () => {
        render(<AboutListBase abouts={[]} />);
        expect(screen.getByText("No about entries found.")).toBeInTheDocument();
    });

    test("renders admin controls when isAdmin is true", () => {
        render(<AboutListBase abouts={mockAbouts} isAdmin={true} />);
        expect(screen.getAllByTestId("about-admin-controls").length).toBe(
            mockAbouts.length
        );
        expect(screen.getAllByText("Delete").length).toBe(mockAbouts.length);
        expect(screen.getAllByText("Update").length).toBe(mockAbouts.length);
    });

    test("does not render admin controls when isAdmin is false", () => {
        render(<AboutListBase abouts={mockAbouts} isAdmin={false} />);
        expect(
            screen.queryByTestId("about-admin-controls")
        ).not.toBeInTheDocument();
        expect(screen.queryByText("Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Update")).not.toBeInTheDocument();
    });

    test("renders Slide component for non-admin view", () => {
        render(<AboutListBase abouts={mockAbouts} isAdmin={false} />);
        mockAbouts.forEach((about) => {
            expect(screen.getByText(about.content)).toBeInTheDocument();
        });
    });

    test("renders raw content for admin view", () => {
        render(<AboutListBase abouts={mockAbouts} isAdmin={true} />);
        mockAbouts.forEach((about) => {
            expect(screen.getByText(about.content)).toBeInTheDocument();
        });
    });

    test("renders correct number of list items", () => {
        render(<AboutListBase abouts={mockAbouts} />);
        expect(screen.getAllByRole("listitem").length).toBe(mockAbouts.length);
    });
});
