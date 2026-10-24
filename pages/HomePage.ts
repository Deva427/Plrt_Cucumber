import { Page } from '@playwright/test'
import { BaseClass } from './BaseClass'

export class HomePage extends BaseClass {

    constructor(page: Page) {
        super(page)
    }

    async openHomePage() {
        await this.navigateTo('/')
    }
}