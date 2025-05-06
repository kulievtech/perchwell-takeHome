import { Locator, Page } from '@playwright/test';

export class BasePage {
    private readonly page: Page;
    private readonly brokersPageLink: Locator;
    private readonly mlsPageLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brokersPageLink = page
            .getByRole('navigation')
            .getByRole('link', { name: 'For Brokers' });
        this.mlsPageLink = page.getByRole('navigation').getByRole('link', { name: 'For MLS' });
    }

    /** This method Navigates to https://www.perchwell.com/ Home Page of Perchwell*/

    async navigateToPerchwell() {
        await this.page.goto('https://www.perchwell.com/');
    }

    /** This method Navigates to https://www.perchwell.com/professionals. This page describes the business of perchwell for Real Estate Brokers*/

    async navigateToBrokersPage() {
        await this.brokersPageLink.click();
    }

    /** This method Navigates to https://www.perchwell.com/mls. This page describes the business of perchwell and how perchwell works with MLS*/

    async navigateToMLSPage() {
        await this.mlsPageLink.click();
    }
}
