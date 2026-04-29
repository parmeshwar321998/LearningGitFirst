import { test, expect, chromium} from "@playwright/test"

test("handlePagesWindow", async()=>{
    const browser = await chromium.launch()

    const context = await browser.newContext()

    //------ Two Diff Pages we open ------>

    // const page1 = await context.newPage()
    // const page2 = await context.newPage()

    // const allPages = await context.pages()
    // console.log(allPages.length)

    // await page1.goto('https://www.demoblaze.com/')
    // await expect(page1).toHaveTitle('STORE')

    // await page1.waitForTimeout(5000)

    // await page2.goto('https://testautomationpractice.blogspot.com/')
    // await expect(page2).toHaveURL('https://testautomationpractice.blogspot.com/')
    
    // await page2.waitForTimeout(3000)
    // await browser.close()


    //------ open one page navigate from one to another ------>

    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page')
    await page1.getByRole('link',{name: 'OrangeHRM, Inc'}).click()
    const page2 = await pagePromise
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses ')

    await page2.waitForTimeout(3000)
    await browser.close()
})