import test, { chromium } from '@playwright/test'
test('Window Handling',async()=>{
    const browser= await chromium.launch({headless:false,channel:'chrome'});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.leafground.com/window.xhtml");
    const createpromise = context.waitForEvent('page');//step1: create a promise before performing any operation that opens sub page
    await page.locator("//button[@id='j_idt88:new']").click();//step2: click on the button that opens the subpage
    const childpage = await createpromise;//step3:resolve the promise before performing any operations in child page
    await childpage.waitForLoadState('load');//To load until the child page is loaded fully
    console.log(await childpage.title());
    await childpage.close;
    await page.waitForLoadState('load');
    console.log(await page.title());
})