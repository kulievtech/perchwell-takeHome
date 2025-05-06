import { Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly brokersPageLink: Locator;
    readonly mlsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brokersPageLink = page
            .getByRole('navigation')
            .getByRole('link', { name: 'For Brokers' });
        this.mlsPageLink = page.getByRole('navigation').getByRole('link', { name: 'For MLS' });
    }

    async navigateToPerchwell() {
        await this.page.goto('https://www.perchwell.com/');
    }

    async navigateToBrokersPage() {
        await this.brokersPageLink.click();
    }

    async navigateToMLSPage() {
        await this.mlsPageLink.click();
    }
}
