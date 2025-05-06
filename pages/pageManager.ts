import { Page } from '@playwright/test';
import { BrokersPage } from './brokersPage';
import { MLSPage } from './mlsPage';

export class PageManager {
    readonly page: Page;
    readonly brokersPage: BrokersPage;
    readonly mlsPage: MLSPage;

    constructor(page: Page) {
        this.page = page;
        this.brokersPage = new BrokersPage(this.page);
        this.mlsPage = new MLSPage(this.page);
    }

    getBrokersPage() {
        return this.brokersPage;
    }

    getMLSPage() {
        return this.mlsPage;
    }
}
