import{ test, expect} from '@playwright/test'
test.beforeAll(async ()=>{
    console.log("beforeall function open")
})

test.afterAll(async ()=>{
    console.log('afterall function')
})

test.beforeEach(async ()=>{
    console.log('beforEach fun is open')
})
test.afterEach(async ()=>{
    console.log('afterEach fun is closed')
})



test.describe.only('group1',()=>{
test('test1',async({page})=>{
    console.log('this is test 1...')
})

// test('test2',async({page})=>{
//     console.log('this is test 2...')
// })

});

test.describe.skip('group2',()=>{
test('test3',async({page})=>{
    console.log('this is test 3...')
})

test('test4',async({page})=>{
    console.log('this is test 4...')
})

})