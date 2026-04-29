const { test,expect } = require('@playwright/test')

test('handleFrames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //check how fames in a page return an array of frames

    const frames = await page.frames()
    console.log('there are', frames)   

    // const frame1 = page.frame('name') //if the name of frame available or url of frame
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

    // await frame1.locator("//*[@id='id1']/div/input").fill('param')

    // await page.waitForTimeout(3000)
    

    //second way we can access with frameLocator

    const frame2 = await page.frameLocator("frame[src='frame_2.html']")
    await frame2.locator("//*[@id='id2']/div/input").fill('ashwini')

    await page.waitForTimeout(3000)
})