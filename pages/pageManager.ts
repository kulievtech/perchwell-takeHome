import { Page } from '@playwright/test';
import { BrokersPage } from './brokersPage';
import { MLSPage } from './mlsPage';
import { HomePage } from './homePage';

export class PageManager {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly brokersPage: BrokersPage;
    private readonly mlsPage: MLSPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.brokersPage = new BrokersPage(this.page);
        this.mlsPage = new MLSPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getBrokersPage() {
        return this.brokersPage;
    }

    getMLSPage() {
        return this.mlsPage;
    }
}
