import { test, expect } from "@playwright/test";

test("Landing page is defined", async function ({ page }) {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  const seed = `${formattedToday}-${Math.trunc(Math.random() * 10)}`;
  const pathTestName = "LandingPage-spec-ts/landing-page-defined";

  await page.goto("https://crochern.vercel.app/");
  await page.screenshot({
    path: `screenshots/${pathTestName}/${seed}.png`,
  });

  expect(page).toBeDefined();
});
