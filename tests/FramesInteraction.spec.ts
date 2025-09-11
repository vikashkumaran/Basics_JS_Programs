import test, { expect } from '@playwright/test'
import { AssertionError } from 'node:assert';
test("Frames Interaction", async ({ page }) => {
    await page.goto("https://leafground.com/frame.xhtml");
    await page.waitForTimeout(2000);
    const frames = page.frames();
    let frame = frames[1];
    if (frame) {
        const button = frame.locator("//button[@id='Click']").nth(0);
        await button.click();
        await expect.soft(button).toHaveText('Hurray! You Clicked Me.'); //To Assert the changed text
    } else {
        throw new Error("Frame is not found");
    }
    //To print the frames count
    console.log(`Frames Count : ` + frames.length);
    //To switch to nested frames
    const outerframe = frames[3];
    if (outerframe) {
        const nestedFrames = outerframe.childFrames();
        if (nestedFrames.length > 0) {
            const innerNestedFrame = nestedFrames[0];
            const button = innerNestedFrame.locator("//button[@id='Click']");
            await button.click();
            await expect.soft(button).toHaveText('Hurray! You Clicked Me.');
        } else {
            throw new Error("Inner Frame is not found");
        }
    } else {
        throw new Error("Frame is not found");
    }
})