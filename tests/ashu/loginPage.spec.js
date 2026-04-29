// import { test,expect } from '@playwright/test';
// const {loginpage}= require('../ashu/pages/loginPage')

// test('login test', async ({ page }) => {

//   const login = new loginpage(page);

//   await login.openApp();
//   await login.login('Dry', 'Dry@7878');
//  await expect(page).toHaveTitle('STORE')
// });





















//module export = {loginpage};

import{test,expect}from '@playwright/test'
import {LoginPage} from '../ashu/pages/loginPage.js'

test('test',async({page})=>{

    const login= new LoginPage(page)
    await login.openApp()
    await login.loginForWork('Dry','Dry@7878')

    await expect(page).toHaveTitle('STORE')

})