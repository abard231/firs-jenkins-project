import { test } from "@playwright/test";

test("Youtube Search", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  // await page.waitForTimeout(3000);
  let searchBox = page.locator("//input[@id='search']");
  await searchBox.click();
  await searchBox.fill("Cydeo");
  await searchBox.press("Enter");
  // await page.waitForTimeout(3000);
  let firstResult = page.locator("(//a[@id='video-title'])[1]");
  firstResult.click();

  await page.waitForTimeout(2000);


  

});
