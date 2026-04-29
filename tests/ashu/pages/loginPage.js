class LoginPage {

  constructor(page) {
    this.page = page;

    this.loginlink = page.locator('#login2');
    this.userName = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginbutton = page.locator("//button[normalize-space()='Log in']");
  }

  async openApp() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async loginForWork(userName, password) {
    await this.loginlink.click();
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginbutton.click();
  }
}
module.exports={LoginPage}



































// export class loginPage{
// //class loginPage{
//     constructor(page){
//         this.page= page;

//         this.loginlink = page.locator('#login2')
//         this.userName = page.locator('#loginusername')
//         this.passwrod = page.locator('#loginpassword')
//         this.loginbutton= page.locator("//button[normalize-space()='Log in']")
//     }
//      async openapp(){
//         await this.page.goto("https://www.demoblaze.com/index.html")
//      }


//      async login(userName,password){
//         await this.loginlink.click()
//         await this.userName.fill(userName)
//         await this.passwrod.fill(password)
//         await this.loginbutton.click()
//     }
// }
