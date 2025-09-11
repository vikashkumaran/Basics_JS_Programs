import { test, expect } from '@playwright/test';
//To handle prompt alert
test.only("handle the prompt alert",async({page})=>{
    page.once('dialog',alertType=>{
        const type=alertType.type();//to identify the type of alert
        console.log(type);
        const alertMessage=alertType.message();//to identify the alert message
        console.log(alertMessage);
        alertType.accept('Vikash');// value vikash is passed inside the popup
    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(4).click()
    await page.waitForTimeout(3000)
})