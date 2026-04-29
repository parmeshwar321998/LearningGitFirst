// import{test,expect} from '@playwright/test'
// test('practice',async({page})=>{

// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.getByRole('textbox',{name:"username"}).fill('Admin')
// await page.getByRole('textbox',{name :'password'}).fill('admin123')
// await page.getByRole('button',{name:' Login'}).click()
// await page.getByRole('link',{name:'My Info'}).click()
//await page.getByPlaceholder('First Name').fill('Ashwini')
// await page.getByRole('textbox',{name:'middleName'}).fill('parmeshwar')
// await page.getByRole('textbox',{name:'lastName'}).fill('rathod')
//await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/input').fill('962398')
//await page.getByRole('textbox',{name:'Female'}).check()
// await page.waitForSelector(".oxd-file-button")
// await page.getByRole('button',{name:'Add'}).click()


// await page.locator(".oxd-file-button").click()
// await page.setInputFiles('Ashwini chavan .docx')




//})
const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload file in OrangeHRM', async ({ page }) => {

  // 1. Open website
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // 2. Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // 3. Navigate to PIM
  await page.locator('//span[text()="PIM"]').click();

  // Wait for page load
  await page.waitForLoadState('networkidle');

  // 4. Open any employee (or directly use your URL)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

  // 5. Click Add (Attachment section)
  await page.locator('//button[contains(.,"Add")]').click();

  // 6. Upload file
  const filePath = path.join(__dirname, 'testfile.pdf'); // keep file in project folder

  await page.setInputFiles('input[type="file"]', filePath);

  // 7. Save
  await page.locator('//button[contains(.,"Save")]').click();

});




























// import{ test, expect} from '@playwright/test'
// test('practice',async({page}) => {
//     await page.goto('https://testautomationpractice.blogspot.com/')

// page.on('dialog',async (dialog) => {
//     expect(dialog.type()).toContain('alert')
//     expect(dialog.message()).toContain('I am an alert box!')
//     await dialog.accept()

// });

// await page.getByText('Simple Alert').click();
// await page.waitForTimeout(3000)



// const allframe = await page.frames()
// console.log(allframe.length)


    //  page.goto('https://www.demoblaze.com/')
//     page.goto('https://www.google.com/')
//    // await page.getByRole('button',{name: 'Log in'}).click()
//    await page.getByPlaceholder('Search').fill('ja');
   
//    await page.getByText('java').click();



// await page.waitForTimeout(4000);
// await page.close()



// import {test, expect} from '@playwright/test'
// test('practice',async({page}) =>{
//     await page.goto('https://www.demoblaze.com/index.html')
//     await page.locator("id=login2").click();

//     await page.locator("id=loginusername").fill('Dry');

//     await page.locator("id=loginpassword").fill('Dry@7878');

//     await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click()

//     let final = await page.locator("//*[@id='logout2']")
//     await expect(final).toBeVisible();
//     await page.close();


//    let links = await page.$$('a');
//     for(let link of links){
//         let linktext = await link.textContent()
//         console.log(linktext);

//     }



   // await page.goto('https://testautomationpractice.blogspot.com/')

    // await expect(page).toHaveTitle('Automation Testing Practice') ;
    // let Title = await page.title();
    // console.log('page title is=',Title);
 

    // ASSERTION //

    // import{test,expect} from '@playwright/test'
    // test('assertion',async({page}) =>{
    //     await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //      //to check url
    //     await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //     // to check title
    //     await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //     // to check tobevisible(logo)
    //      const logo = await page.locator(".header-logo")
    //      await expect(logo).toBeVisible();

    //     //  to check toBeEnabled() 
    //      const searchbox = await page.locator("#small-searchterms")
    //      await expect(searchbox).toBeEnabled();

    //     // to check toBeChecked
    //       const female = await page.locator('#gender-female');
    //         await female.click();
    //     await expect(female).toBeChecked();

    //       const newset = await page.locator('#NewsLetterSubscriptions_0__IsActive')  
    //     await expect(newset).toBeChecked(); 

    //     // to check toHaveAttribute 
    //      const regbutton = await page.locator('#register-button') 
    //     await expect(regbutton).toHaveAttribute('type','submit');

    //     //to check tocontaintext
    //     await expect(await page.locator('.page-title')).toHaveText('Register')
    //     await expect(await page.locator("//*[@id='main']/div/section/div/div[2]/form/section[1]/h2")).toHaveText('Your Personal Details');

    //     //to check tocontaintxt
    //      await expect(await page.locator('.page-title')).toContainText('Register')

    //      //to check tohavevalue
    //     const email=  await page.locator("//*[@id='Email']");
    //     await email.fill('ash@123.com');
    //     await expect(email).toHaveValue('ash@123.com');

    //     await page.locator("//*[@id='FirstName']").fill('Ashwini');
    //     await page.locator("//*[@id='LastName']").fill('Rathod');
        
       


    //     await page.waitForTimeout(5000);
    //     await page.close();
    // })
    
// import{test,expect} from '@playwright/test'
// test('practice',async({page}) =>{
//  await page.goto('https://testautomationpractice.blogspot.com/')

//  //how to handle dropdown
// await page.click("#country")
//  await page.locator("#country").selectOption({index : 1})
// await page.waitForTimeout(5000);


// import { test , expect} from '@playwright/test'
// test ('practice',async({page}) => {

// await page.goto(' ')
 
// await page.getByText('Log in').click()

// await page.getByPlaceholder('Search').fill('playwright');
// await page.locator('').click()
// await page.locator('#usrname').fill('ashwini')

//     await page.close();
// })