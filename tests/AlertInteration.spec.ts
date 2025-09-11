import test from '@playwright/test'
test("Alert Ineractions", async ({ page }) => {
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
await page.waitForTimeout(2000);
await page.locator("//div[@id='accept-choices']").click();
await page.waitForTimeout(2000);
//To select a frame by index
//const frames = page.frames();
//const frame = frames[3];//4th iframe is selected as index starts from 0
//To select a frame by attribute
const frame = page.frame({ name: 'iframeResult' });
//Alert Handlers are always added before the code which displays alert to avoid the auto-cancelling of the alert
page.on('dialog',alertType=>{
        // type of alert
        const type=alertType.type()
        console.log(type)
        //alert box what message it has 
        console.log(alertType.message())
        //handle alert 
        alertType.accept()
    })

// Trigger the alert dialog only after the handler is
if (frame) {
  await frame.locator("//button[@onclick='myFunction()']").click();
} else {
  throw new Error("Frame is not found");
}
})