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
            // Check for specific links in the first card
            const firstCardLinks = page.getByTestId("project-links").first();

            // Get all links first
            const githubLink = firstCardLinks.getByTitle("GitHub Repository");
            const liveLink = firstCardLinks.getByTitle("Live Demo");
            const infoLink = firstCardLinks.getByTitle(/More about/);

            // Wait for all visibility checks to complete
            const [hasGithub, hasLive] = await Promise.all([
                githubLink.count().then((count) => count > 0),
                liveLink.count().then((count) => count > 0),
            ]);

            // Verify the correct number of links
            const expectedLinkCount = 1 + Number(hasGithub) + Number(hasLive); // 1 for info link
            await expect(firstCardLinks.locator("a")).toHaveCount(
                expectedLinkCount
            );
        } else {
            await expect(
                page.getByText("No project entries found.")
            ).toBeVisible();
        }
    });
});
