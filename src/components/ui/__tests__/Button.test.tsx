import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CustomButton from "../CustomButton";
import { screen } from "@testing-library/react";

describe("<CustomButton />", () => {
    test("renders a button with the provided text", () => {
        render(<CustomButton text="Update" />);
        expect(screen.getByText("Update")).toBeInTheDocument();
        expect(screen.getByText("Update").tagName).toBe("BUTTON");
    });

    test("renders a button with the specified type", () => {
        render(<CustomButton text="Submit" type="submit" />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("type", "submit");
    });

    test("renders an anchor tag when href is provided", () => {
        render(<CustomButton text="Go to Link" href="/home" />);
        const link = screen.getByText("Go to Link");
        expect(link).toBeInTheDocument();
        expect(link.tagName).toBe("A");
        expect(link).toHaveAttribute("href", "/home");
    });

    test("calls the onClick handler when clicked", () => {
        const handleClick = vi.fn();
        render(<CustomButton text="Click Me" onClick={handleClick} />);
        const button = screen.getByText("Click Me");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("applies the provided className", () => {
        render(<CustomButton text="Styled Button" className="custom-class" />);
        const button = screen.getByText("Styled Button");
        expect(button).toHaveClass("custom-class");
    });

    test("renders a disabled button when disabled is true", () => {
        render(<CustomButton text="Disabled" disabled={true} />);
        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
    });

    test("applies common and custom styles correctly", () => {
        render(<CustomButton text="Styled Button" className="extra-styles" />);
        const button = screen.getByText("Styled Button");
        expect(button).toHaveClass(
            "border-2",
            "text-white",
            "border-[#13DF14]",
            "hover:bg-[#13DF14]",
            "py-3",
            "px-8",
            "rounded-lg",
            "text-xl",
            "font-bold",
            "transition",
            "duration-300",
            "extra-styles"
        );
    });
});
