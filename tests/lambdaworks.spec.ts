import { test, expect, type Page } from "@playwright/test";

test(
  "should open LambdaWorks landing page",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    await page.goto("https://www.lambdaworks.io");

    expect(await page.title()).toEqual("LambdaWorks • A Digital Product Agency");
  }
);
