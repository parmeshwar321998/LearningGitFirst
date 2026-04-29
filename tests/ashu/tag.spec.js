import{test,expect} from'@playwright/test'
test('test1@sanity',async({page})=>{

console.log('this is my test1 in sanity....')

})
test('test2@sanity',async({page})=>{

console.log('this is my test2 in sanity....')

})
test('test3@regrassive',async({page})=>{

console.log('this is my test3 in regressive....')

})
test('test4@regrassive',async({page})=>{

console.log('this is my test4 in regrassive....')

})
test('test5@sanity@regrassive',async({page})=>{

console.log('this is my test1 in sanity and regrassive....')

})