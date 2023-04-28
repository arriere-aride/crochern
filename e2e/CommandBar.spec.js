/**
 * @TODO Have to be tested with another environment than storybook.
 */

// const { test, expect } = require("@playwright/test");

// test("Command bar toggling visibility", async ({ page }) => {
//   await page.goto(
//     "http://localhost:6006/iframe.html?args=&id=crochet-bar-commandbar--default&viewMode=story"
//   );

//   try {
//     // Wait for the element to become visible before taking a screenshot
//     await page.waitForSelector("[data-testid='command-bar']", { state: "hidden", timeout: 5000 });
//     await page.screenshot({ path: "screenshots/command-bar--toggle.png" });

//     // Send the F4 key to toggle the command bar
//     await page.keyboard.press("F4");

//     // Wait for the element to become visible before asserting its visibility
//     await page.waitForSelector("[data-testid='command-bar']", { state: "visible", timeout: 5000 });
//     const barVisible = await page.isVisible("[data-testid='command-bar']");
//     expect(barVisible).toBe(true);
//   } catch (error) {
//     console.error(error);
//     await page.screenshot({ path: "screenshots/command-bar--error.png" });
//   }
// });
