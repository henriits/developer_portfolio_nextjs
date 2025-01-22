import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutListBase from "../AboutListBase";

describe("<AboutListBase />", () => {
    const abouts = [
        {
            id: "1",
            content: "About content",
        },
    ];

    test("Render About List", () => {
        render(<AboutListBase abouts={abouts} />);
    });

    test("Displays about content", () => {
        render(<AboutListBase abouts={abouts} />);
        expect(screen.getByText("About content")).toBeInTheDocument();
    });

    test("Displays no about entries found.", () => {
        render(<AboutListBase abouts={[]} />);
        expect(screen.getByText("No about entries found.")).toBeInTheDocument();
    });

    test("Displays admin buttons when isAdmin is true", () => {
        render(<AboutListBase abouts={abouts} isAdmin={true} />);
        expect(screen.getByText("Delete")).toBeInTheDocument();
        expect(screen.getByText("Update")).toBeInTheDocument();
    });

    test("Does not display admin buttons when isAdmin is false", () => {
        render(<AboutListBase abouts={abouts} />);
        expect(screen.queryByText("Delete")).not.toBeInTheDocument();
        expect(screen.queryByText("Update")).not.toBeInTheDocument();
    });
});
