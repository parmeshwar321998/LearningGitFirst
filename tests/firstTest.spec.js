import { test, expect } from "@playwright/test"

test('Firstprogram', async({page})=>{
    await page.goto("https://www.demoblaze.com/")

    await page.getByRole('link',{name:'Log in'}).click()

    await page.locator('#loginusername').fill('Dry')

    await page.locator('#loginpassword').fill('Dry@7878')

    await page.locator("//button[normalize-space()='Log in']").click()

    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible()

    await page.getByRole('link',{name:'Log out'}).click()

    await expect(page.getByRole('link',{name:'Log in'})).toBeVisible()




    
})

