import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test('Brokers Page', async ({ page }) => {
    // Brokers Page
    const pm = new PageManager(page);
    const brokersPage = pm.getBrokersPage();

    await brokersPage.navigateToPerchwell();
    await brokersPage.navigateToBrokersPage();
    await expect(page).toHaveURL('https://www.perchwell.com/professionals');
    const btnText = await brokersPage.bookDemoHeroBtn.textContent();

    if (!btnText) {
        throw new Error('Button does not exist, please check your locators.');
    }

    expect(btnText.trim()).toEqual('Book a Demo');
});
