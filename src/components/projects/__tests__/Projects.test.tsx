import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectListBase from "../ProjectListBase";

describe("<ProjectListBase />", () => {
    test("Displays no projects found", () => {
        render(<ProjectListBase projects={[]} />);
        expect(
            screen.getByText("No project entries found.")
        ).toBeInTheDocument();
    });
});
