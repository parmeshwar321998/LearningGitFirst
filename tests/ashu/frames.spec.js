import{ test ,expect } from '@playwright/test'
test('frames', async({page}) =>{

await page.goto("https://ui.vision/demo/webtest/frames/")

const allFrames= await page.frames()
console.log( "total no of frames is = ",allFrames.length)

let frame1= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'})
frame1.locator('[name="mytext1"]').fill('hello')

//using frame locator
let inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
await inputbox.fill('hello')


let frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})
frame3.locator('[name="mytext3"]').fill('ashwini')


//nested frames
let chieldframes = await frame3.childFrames()
await chieldframes[0].locator('//*[@id="i6"]/div[3]/div').click
await page.waitForTimeout(4000)
})