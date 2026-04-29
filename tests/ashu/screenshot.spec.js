import{ test, expect} from '@playwright/test'
//test('pageScreenshot',async({page})=>{
// by default screenshot
// await page.goto("https://testautomationpractice.blogspot.com/")

// await page.screenshot({path:'tests/ashu/Screenshot/' + 'Homepage.png'})
// })

//full page
// test('Fullpage',async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")

// await page.screenshot({path:'tests/ashu/Screenshot/' + 'Fullpage.png',fullPage:true})

// })

//specific element capture

test('elementsc',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#productTable').screenshot({path:'tests/ashu/Screenshot/' + 'elemntCapture.png'})
})