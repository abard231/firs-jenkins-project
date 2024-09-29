import { test, expect } from "@playwright/test";

test.describe("@Test Group", () => {
  test.beforeAll(async () => {
    console.log("BeforeAll executed successfully!");
  });

  test.afterAll(async () => {
    console.log("AfterAll executed successfully!");
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    console.log("BeforeEach executed successfully!");
  });

  test.afterEach(async () => {
    // await page.waitForTimeout(3000);
    console.log("AfterEach executed successfully!");
  });

  test("Getting the title of the page", async ({ page }) => {
    const pageTitle = await page.title();
    console.log(`Page title: ${pageTitle}`);
    expect(pageTitle).toBe("Practice");
    // await page.waitForTimeout(3000);
  });

  test("Getting the current URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let currentURL = page.url();
    console.log(`Current URL: ${currentURL}`);
    // await page.waitForTimeout(3000);
  });

  test("Set the  window size", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    //   await page.goto("https://practice.cydeo.com/");
    // await page.waitForTimeout(3000);
  });
});
