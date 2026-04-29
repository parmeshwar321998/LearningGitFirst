import { test , expect} from '@playwright/test'
test( 'alert',async({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/')
//alert

/*page.on('dialog',async dialog =>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain("I am an alert box!")
    await dialog.accept();

})
await page.getByRole('button',{type : 'Simple Alert'}).click*/

//conform---->
/*page.on('dialog', async dialog =>{

    expect(dialog.type()).toContain('Confirmation Alert')
    expect(dialog.message()).toContain('Press a button!')
   // dialog.accept()
    dialog.dismiss()

})
await page.getByRole('button',{type : 'Confirmation Alert'}).click*/

//promt---->
page.on('dialog',async dialog =>{

    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('ashwini rathod');
})

    await page.getByRole('button',{ type : "Prompt Alert"}).click
   

 //   await page.waitForTimeout(4000)

})
