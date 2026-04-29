const { test, expect } = require('@playwright/test')

test('locatorElements', async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()

    // await page.getByRole('textbox', {name:'Username:'}).fill("Dry")
    await page.locator('#loginusername').fill("Dry")

    await page.locator('#loginpassword').fill('Dry@7878')

    await page.getByRole('button',{ name:'Log in'}).click()

    // let btn = await page.getByRole('link', { name:'Log out'}).textContent()

    // const xyz = await page.locator('#logout2')
    await expect(await page.locator('#nava')).toHaveText('PRODUCT STORE')

    

    await page.waitForTimeout(5000)


})