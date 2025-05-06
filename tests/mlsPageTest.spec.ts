import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

/* 
    This test is intended to test the following flow:
    1. Land to Perchwell.com HomePage
    2. Click on 'For MLS' Link on the navigation menu
    3. Confirm the MLSPage is loaded and it is successful
    4. Confirm 'Book a Demo' button is present and has the correct text.
*/

test('MLS Page', async ({ page }) => {
    // Initialize PageManager class and pass page fixture for MLSPage to access it
    const pm = new PageManager(page);

    // Instantiate HomePage and MLSPage which PageManger class returns
    const homePage = pm.getHomePage();
    const mlsPage = pm.getMLSPage();

    // Navigate to perchwell.com - MLSPage class has access to these methods from its parent class which is BasePage
    await mlsPage.navigateToPerchwell();

    // Validate homepage is loaded successfully by asserting motto text of perchwell
    const perchwellMotto = homePage.mottoTextLocator;
    await expect(perchwellMotto).toHaveText('The modern data & workflow solution for real estate.');

    // From the homepage of perchwell, click on 'For MLS' link which navigates to MLSPage
    await mlsPage.navigateToMLSPage();

    // Confirm the correct page was shown after the click which includes 'mls' in the url
    await expect(page).toHaveURL('https://www.perchwell.com/mls');

    // Check if "Book a Demo" button exists and visible in the DOM
    await expect(mlsPage.bookDemoHeroBtn).toBeVisible();

    // Extract the text of the btn to be used for assertion
    const btnText = await mlsPage.bookDemoHeroBtn.textContent();

    // Check and confirm if the text exists, if not then throw an error
    if (!btnText) {
        throw new Error('Something is wrong, please check your locators.');
    }

    // Verify 'Book a Demo' button element has a correct text
    await expect(mlsPage.bookDemoHeroBtn).toHaveText('Book a Demo');

    // Verify extracted text is equal to the expected text
    expect(btnText.trim()).toEqual('Book a Demo');
});
