import {test, expect} from '@playwright/test'
test('datepicker',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/#")

//await page.fill('#datepicker','06/13/2001')

// second apporch

const year= '2026'
const month= 'June'
const date ='13'

await page.click('#datepicker')

while(true){
    const curryear= await page.locator('.ui-datepicker-year').textContent()
    const currmonth= await page.locator('.ui-datepicker-month').textContent()

    if(curryear==year && currmonth==month){
        break;
    }
    await page.getByTitle('Next').click()   //next 
}
 //await page.locator('[title="Prev"]').click     //privious

 


 await page.waitForTimeout(4000)

})