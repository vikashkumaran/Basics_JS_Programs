import test from '@playwright/test'
test.describe.serial('Storage State Handling', () => {
  test('Create Storage State', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("DemoSalesManager");
    await page.locator('[name=PASSWORD]').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator(`text='CRM/SFA'`).click();
    await page.context().storageState({ path: "utils/LeafTapsLogin.json" });
  });

  test.use({ storageState: "utils/LeafTapsLogin.json" });
  test('Use Storage State', async ({ page }) => {
    await page.goto("http://leaftaps.com/crmsfa/control/contactsMain");
    await page.locator('//a[text()="Contacts"]').click();
    await page.locator("//a[text()='Create Contact']").click();
  });
});