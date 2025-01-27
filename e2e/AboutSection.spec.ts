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
    });

    test("should display content list if available", async ({ page }) => {
        const contentList = page.getByTestId("about-content-list");
        if (await contentList.isVisible()) {
            await expect(
                page.getByTestId("about-content-item").first()
            ).toBeVisible();
        }
    });

    test("should display empty message if no content is available", async ({
        page,
    }) => {
        const contentList = page.getByTestId("about-content-list");
        if (!(await contentList.isVisible())) {
            await expect(page.getByTestId("about-empty-message")).toBeVisible();
            await expect(page.getByTestId("about-empty-message")).toHaveText(
                "No about entries found."
            );
        }
    });
});
