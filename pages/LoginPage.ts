import { Locator, Page } from '@playwright/test'
import { BaseClass } from './BaseClass'

export class LoginPage extends BaseClass {
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        super(page)
        this.username = this.page.locator('input[name="username"]')
        this.password = this.page.locator('input[name="password"]')
        this.loginButton = this.page.locator('button[type="submit"]')
    }

    async openLoginPage() {
        await this.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.waitForDomContentLoaded()
    }

    async enterUsername(username: string) {
        await this.username.fill(username)
    }

    async enterPassword(password: string) {
        await this.password.fill(password)
    }

    async clickLogin() {
        await this.loginButton.click();
    }

}