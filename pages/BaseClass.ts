import { expect, Page } from '@playwright/test'

export class BaseClass {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigateTo(url: string) {
        await this.page.goto(url)
    }

    async waitForDomContentLoaded() {
        await this.page.waitForLoadState('domcontentloaded')
    }

    async verifyUrl(expectedUrl: RegExp) {
        await expect(this.page).toHaveURL(expectedUrl)
    }
}