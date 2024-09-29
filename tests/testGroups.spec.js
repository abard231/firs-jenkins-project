import { test } from "@playwright/test";

test.describe("Test Group1", async () => {
  test.beforeAll(async () => {
    console.log("BeforeAll executed successfully!");
  });

  test.afterAll(async () => {
    console.log("AfterAll executed successfully!");
  });

  test.beforeEach(async () => {
    console.log("BeforeEach executed successfully!");
  });

  test.afterEach(async () => {
    console.log("AfterEach executed successfully!");
  });

  test("Test Case 1", async ({ page }) => {
    console.log("Test case 1 executed successfully!");
  });

  test("Test Case 2", async ({ page }) => {
    console.log("Test case 1 executed successfully!");
  });

  test("Test Case 3", async ({ page }) => {
    console.log("Test case 1 executed successfully!");
  });
});
