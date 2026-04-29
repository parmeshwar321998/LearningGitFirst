import {test, expect} from '@playwright/test'
test('locator',async({page}) =>{
   
  await page.goto('https://www.demoblaze.com/')

  //loctors---property,xpath,css
  //property--click login button
  //await page.locator("//*[@id='login2']").click()
  await page.click('id=login2')

  //fill the username field
  await page.fill('#loginusername','ashwini')

  //fill the password field
  await page.fill('id=loginpassword','ash@123')

//click to login in 
 await page.click('//*[@id="exampleModal"]/div/div/div[3]/button[2]')

//verify the login in url

 //await page.locator()

  await page.close();
})

//multiple locators

import {test, expect} from '@playwright/test'
test('multipleLocator',async({page}) =>{
    await page.goto('https://www.demoblaze.com/')

     const link= await page.$$('a')
     for(let b of link){
        let c = await b.textContent();
        console.log(c);

     }

    await page.close();
})
