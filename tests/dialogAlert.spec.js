import { test, expect} from '@playwright/test'


//-------Alert Dialog---------->

// test('dialogAlerts', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     page.on('dialog', async (dialog) =>{
//         expect(dialog.type()).toContain('alert')
//         expect(dialog.message()).toContain('I am an alert box!')
//         await dialog.accept()
        
//     })
//     await page.locator('#alertBtn').click()
//     await page.waitForTimeout(5000)
// })

//-------Confirm Dialog---------->

// test('dialogAlerts', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     page.on('dialog', async (dialog) =>{
//         expect(dialog.type()).toContain('confirm')
//         expect(dialog.message()).toContain('Press a button!')
//         // await dialog.accept()
//         await dialog.dismiss()
        
//     })
//     await page.locator('#confirmBtn').click()
//     // const display = await page.locator('#demo').innerText()
//     // await expect(display).toHaveText("You pressed OK!")
//     await page.waitForTimeout(5000)
// })

//-------Prompt Dialog---------->


test('dialogAlerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async (dialog) =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept()
        
    })
    await page.locator('#promptBtn').click()
    await page.waitForTimeout(5000)
})