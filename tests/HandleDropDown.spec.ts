import {test, chromium } from '@playwright/test'
test("Handle Dropdown", async({page})=>{
    await page.goto("https://www.telerik.com/contact");
    await page.selectOption("#Dropdown-1",{index: 1});//select dropdown by index
    await page.waitForTimeout(3000)
    await page.selectOption("#Dropdown-2",{value: "DevCraft"});//select dropdown by value
    await page.waitForTimeout(3000)
    await page.selectOption("#Country-1",{label: "United States"});//select dropdown by label
    await page.waitForTimeout(3000)
})