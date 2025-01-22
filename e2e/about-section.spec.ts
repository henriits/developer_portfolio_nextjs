import { test, expect } from "@playwright/test";

test.describe("About Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
    });

    test("should display about section with main elements", async ({
        page,
    }) => {
        // Check main section and title
        await expect(page.getByTestId("about-section")).toBeVisible();
        await expect(page.getByTestId("about-title")).toBeVisible();

        // Check for content or empty state
        const contentList = page.getByTestId("about-content-list");

        if (await contentList.isVisible()) {
            // If content exists, check first item
            await expect(
                page.getByTestId("about-content-item").first()
            ).toBeVisible();
        } else {
            // If no content, check for empty message
            await expect(page.getByTestId("about-empty-message")).toBeVisible();
            await expect(page.getByTestId("about-empty-message")).toHaveText(
                "No about entries found."
            );
        }
    });
});
