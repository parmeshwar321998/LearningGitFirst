import {test, expect} from '@playwright/test'
test('builtInLocator',async ({page}) => {

   await page.goto('https://orangehrm.com/')
   
    let logo= await page.getByAltText('company branding')
   await expect(logo).toBeVisible();


 await page.close();
})