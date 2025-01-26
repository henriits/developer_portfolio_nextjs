import { test, expect } from "@playwright/test";

test.describe("Contact Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
    });

    test("should display contact section with all components", async ({
        page,
    }) => {
        // Check main section and title
        await expect(page.getByTestId("contact-section")).toBeVisible();
        await expect(page.getByTestId("contact-title")).toBeVisible();

        // Check contact info section
        await expect(page.getByTestId("contact-info")).toBeVisible();
        await expect(page.getByTestId("email-container")).toBeVisible();
        await expect(page.getByTestId("location-container")).toBeVisible();
        await expect(page.getByTestId("social-links")).toBeVisible();

        // Check contact form
        await expect(page.getByTestId("contact-form")).toBeVisible();
        await expect(page.getByTestId("email-input")).toBeVisible();
        await expect(page.getByTestId("message-input")).toBeVisible();
    });

    test("contact form should have required fields", async ({ page }) => {
        const emailInput = page.getByTestId("email-input");
        const messageInput = page.getByTestId("message-input");

        // Check for required attribute
        await expect(emailInput).toHaveAttribute("required", "");
        await expect(messageInput).toHaveAttribute("required", "");
    });
});
