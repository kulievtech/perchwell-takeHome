import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly mottoTextLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.mottoTextLocator = page.locator('.limon');
    }
}
