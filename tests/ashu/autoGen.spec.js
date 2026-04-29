import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('D');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Dry');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('D');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('Dry@7878');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});