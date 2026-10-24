import {Given,When,Then} from '@cucumber/cucumber'
import { PageObjectManager } from '../pages/PageObjectManager';

Given('I open the OrangeHrm login page', async function () {
      this.pageObjectManager = new PageObjectManager(this.page);
      await this.pageObjectManager.loginPage.openLoginPage()
});

When('I enter the username {string}', async function (username:string) {
    await this.pageObjectManager.loginPage.enterUsername(username)
});

When('I enter the password {string}',async function (password:string) {
    await this.pageObjectManager.loginPage.enterPassword(password)
});

When('I click the login button', async function () {
     await this.pageObjectManager.loginPage.clickLogin()
});

Then('I should see the dashboard',async function () {
    await this.pageObjectManager.baseClass.verifyUrl(/dashboard/)
});
