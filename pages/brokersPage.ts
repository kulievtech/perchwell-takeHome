import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class BrokersPage extends BasePage {
    readonly bookDemoHeroBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.bookDemoHeroBtn = page.locator('.container-center-hero').getByRole('link');
    }
}
