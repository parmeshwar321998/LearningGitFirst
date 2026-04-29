const { test, expect } = require('@playwright/test')

test('testGenerater', async({page})=>{

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Dry');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Dry@7878');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
    


})