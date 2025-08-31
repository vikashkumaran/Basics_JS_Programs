import {test, chromium } from '@playwright/test'
test("Login to salesforce", async()=>{
    const browser = await chromium.launch({headless:false, channel:"msedge"})
    const context = await browser.newContext({ignoreHTTPSErrors: true})
    const page = await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilip@testleaf.com")
    await page.locator("//input[@id='password']").fill("Leaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(8000)
    const title = await page.title()
    console.log(title)
})