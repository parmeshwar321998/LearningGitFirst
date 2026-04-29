import{test,expect} from '@playwright/test'

test('mouseHover',async({page}) =>{

await page.goto("https://testautomationpractice.blogspot.com/")
// mouse hover

// let desktop= await page.getByRole('button',{type : 'Point Me'}).click

// await desktop.hover

//right click action context alick action
 

const c1= await page.locator('.ui-widget-content ui-draggable ui-draggable-handle')
const c2= await page.locator('.ui-widget-header ui-droppable')

await c1.hover()
await page.mouse.down()

await c2.hover()
await page.mouse.up()

await page.waitForTimeout(3000)


})