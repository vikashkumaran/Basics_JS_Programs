import test from '@playwright/test'
test.use({ storageState: "utils/LeafTapsLogin.json" });
test('Use Storage State', async ({ page }) => {
    await page.goto("http://leaftaps.com/crmsfa/control/contactsMain");
    await page.locator('//a[text()="Contacts"]').click();
    await page.locator("//a[text()='Create Contact']").click();
  });