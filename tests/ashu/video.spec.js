import{test,expect} from '@playwright/test'
test('videoRecord',async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

await page.getByRole('link',{name:'Log in'}).click()
await page.locator('#loginusername').fill('Dry')
await page.locator('#loginpassword').fill('Dry@7878')
await page.getByRole('button',{name:'Log in'}).click()
await expect(page.locator('#logout2')).toBeVisible();



//
await page.locator('#tbodyid').screenshot({path:'tests/ashu/Screenshot/' + 'elemntCapture.png'})
})