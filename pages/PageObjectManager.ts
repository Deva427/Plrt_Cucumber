import { Page } from '@playwright/test'
import { BaseClass } from './BaseClass'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'

export class PageObjectManager {
    readonly baseClass: BaseClass
    readonly loginPage: LoginPage
    readonly homePage: HomePage

    constructor(page: Page) {
        this.baseClass = new BaseClass(page)
        this.loginPage = new LoginPage(page)
        this.homePage = new HomePage(page)
    }
}