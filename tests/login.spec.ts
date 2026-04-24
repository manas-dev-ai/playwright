import { test, expect } from "@playwright/test"
const login_url = "https://practicetestautomation.com/practice-test-login/";

test('Positive LogIn test', async ({page})=>{
    await page.goto(login_url);
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123")
    await page.locator("#submit").click();
    //validate login success
    //await page.locator(".post-title").waitFor();
    await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});

test(' Negative username test', async ({page})=>{
    await page.goto(login_url);
    await page.locator("#username").fill("student123");
    await page.locator("#password").fill("Password123")
    await page.locator("#submit").click();
    //validate user name invalid
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});

test('Negative password test',async ({page})=>{
    await page.goto(login_url);
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password1234")
    await page.locator("#submit").click();
    //validate password invalid
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});