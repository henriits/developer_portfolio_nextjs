import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import CustomButton from "./CustomButton";

describe("<Button />", () => {
    test("renders a button with the Update text", () => {
        render(<CustomButton text="Update" />);
    });
    test("renders a button with the Submit text", () => {
        render(<CustomButton text="Submit" />);
    });
});
