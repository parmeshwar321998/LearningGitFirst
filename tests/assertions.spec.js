import { test, expect} from '@playwright/test'

test('assertions', async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveURL('https://www.demoblaze.com/')

    await expect(page).toHaveTitle('STORE')

    await expect(await page.locator('#nava')).toBeVisible();

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()
    await expect(page.getByPlaceholder('Enter Name')).toBeEditable()
    await expect(page.getByPlaceholder('Enter Name')).toBeEnabled()

    await expect(page.locator('#male')).toBeVisible()
    await page.locator('#male').click()
    await expect(page.locator('#male')).toBeChecked()

    await expect(page.getByText('Address:')).toHaveText('Address:')
    await expect(page.getByText('Email:')).toContainText('Ema')

    // const county =page.locator('#country') // two ways we can capture the dropdown
    // const countryOption = await county.locator('option')

    const county =page.locator('#country option')

    await expect(county).toHaveCount(10)
   
    const textcountry = await county.allTextContents() // return [] but space ndd unsuffled.

    await expect(textcountry.length).toBe(10)

    let newTextCon = []
    for(let text of textcountry){
        newTextCon.push(text.trim())
    }
    await expect(newTextCon).toContain('India')

    await page.getByPlaceholder('Enter Phone').fill('7756951888')

    await expect(page.getByPlaceholder('Enter Phone')).toHaveValue('7756951888')

    await page.waitForTimeout(5000)
})