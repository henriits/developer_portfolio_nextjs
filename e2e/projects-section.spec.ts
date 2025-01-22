import { test, expect } from "@playwright/test";

test.describe("Projects Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
    });

    test("should display projects section appropriately", async ({ page }) => {
        // Check section title
        const sectionTitle = page.getByRole("heading", { name: /My Work/i });
        await expect(sectionTitle).toBeVisible();

        // Check for projects list
        const projectCard = page.getByTestId("project-card").first();

        if (await projectCard.isVisible()) {
            // Check project card elements
            await expect(page.getByTestId("project-image")).toBeVisible();
            await expect(page.getByTestId("project-title")).toBeVisible();
            await expect(page.getByTestId("project-links")).toBeVisible();
            await expect(page.getByTestId("technologies-list")).toBeVisible();

            // Verify all links are present
            const links = page.getByTestId("project-links").locator("a");
            await expect(links).toHaveCount(3);
        } else {
            await expect(
                page.getByText("No project entries found.")
            ).toBeVisible();
        }
    });
});
