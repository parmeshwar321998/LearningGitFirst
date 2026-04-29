// ------- Capture the Element Count and Print

import { test, expect } from "@playwright/test"

test('extracting multi element by locator', async({page})=>{
    await page.goto("https://demoblaze.com/")

    let products = page.locator("#tbodyid .card-title a") //9

    await expect(products.first()).toBeVisible()

    //------ For Loop ------
    
    // const count = await products.count()
    // let newArr = []
    // for(let i=0; i<count; i++){
    //     const names = await products.nth(i).innerText();
    //     newArr.push(names) 
    // }
    // console.log(values)
    // await expect(products).toHaveText(newArr)

    // ----- OR -----
    //await page.click("#next2");                         // for move to next page
    let allTexts = await products.allTextContents();
    // console.log(allTexts);
    await expect(allTexts).toContain('Nexus 6')


    // ------Loop on Array--------

    // for(let allText of allTexts){
    //     if(allText.trim().includes('Nexus 6')){
    //         console.log("Is Available",allText)
    //     }
    // }
});

   

