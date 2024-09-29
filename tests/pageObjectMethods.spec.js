import { expect, test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // gotto "https://practice.cydeo.com/"
  await page.goto("https://practice.cydeo.com/");
  //get the page title
  const pageTitle = await page.title();
  console.log(`Page title: ${pageTitle}`);
  expect(pageTitle).toBe("Practice");
  // await page.waitForTimeout(3000);
});

test("Getting the current URL of the page", async ({ page }) => {
  // gotto "https://practice.cydeo.com/"
  await page.goto("https://practice.cydeo.com/");
  let currentURL = page.url();
  console.log(`Current URL: ${currentURL}`);
  // await page.waitForTimeout(3000);
});

test("Set the  window size", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("https://practice.cydeo.com/");
  // await page.waitForTimeout(3000);
  
});
