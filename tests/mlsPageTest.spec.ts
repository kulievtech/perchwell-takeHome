import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test('MLS Page', async ({ page }) => {
    // MLS Page
    const pm = new PageManager(page);
    const mlsPage = pm.getMLSPage();

    await mlsPage.navigateToPerchwell();
    await mlsPage.navigateToMLSPage();
    await expect(page).toHaveURL('https://www.perchwell.com/mls');
    const btnText = await mlsPage.bookDemoHeroBtn.textContent();

    if (!btnText) {
        throw new Error('Button does not exist, please check your locators.');
    }

    expect(btnText.trim()).toEqual('Book a Demo');
});
