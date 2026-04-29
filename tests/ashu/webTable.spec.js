import {test , expect} from '@playwright/test'

test('webTable',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    let table = await page.locator('#productTable')
   
    // total no of colums and rows
   const row= await table.locator('tbody tr')
   console.log( 'total no of row = ',await row.count());
   expect(await row.count()).toBe(5)

   const colum =await table.locator('thead tr th')
   console.log( 'total no of colums = ',await colum.count());
   expect(await colum.count()).toBe(4)


   //select checkbox for product


  const matchrow = row.filter({
    has : page.locator('td'),
    hasText :'Product 4'
   })
   await matchrow.locator('input').check

  // await page.waitForTimeout(4000)
})

