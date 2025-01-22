import { test, expect } from "@playwright/test";

test.describe("Hero Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
    });

    test("should display hero section with main elements", async ({ page }) => {
        // Check hero section and its elements
        await expect(page.getByTestId("hero-section")).toBeVisible();
        await expect(page.getByTestId("hero-title")).toBeVisible();
        await expect(page.getByTestId("hero-description")).toBeVisible();

        // Check specific content
        const heroSection = page.getByTestId("hero-section");
        await expect(heroSection.getByText("Hello, I am a")).toBeVisible();
        await expect(heroSection.getByText(/Explore my journey/)).toBeVisible();

        // Verify flip words container exists
        await expect(page.getByTestId("hero-flip-words")).toBeVisible();
    });
});
