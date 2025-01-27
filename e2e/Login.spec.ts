import { test, expect } from "@playwright/test";

test("Log in with wrong password", async ({ page }) => {
    await page.goto("http://localhost:3000/admin/login");
    await page.getByLabel("Username").fill("wadwa");
    await page.getByLabel("Password").fill("dwad");
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page.getByText("Wrong username or password")).toBeVisible();
});
