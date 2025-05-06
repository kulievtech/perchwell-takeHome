import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

/* 
    This test is intended to test the following flow:
    1. Land to Perchwell.com HomePage
    2. Click on 'For Brokers' Link on the navigation menu
    3. Confirm the BrokersPage is loaded and it is successful
    4. Confirm 'Book a Demo' button is present and has the correct text.
*/

test('Brokers Page', async ({ page }) => {
    // Initialize PageManager class and pass page fixture for BrokersPage to access
    const pm = new PageManager(page);

    // Instantiate BrokersPage which PageManger class returns
    const homePage = pm.getHomePage();
    const brokersPage = pm.getBrokersPage();

    // Navigate to perchwell.com - BrokersPage class has access to these methods from its parent class which is BasePage
    await brokersPage.navigateToPerchwell();

    // Validate homepage is loaded successfully by asserting motto text of perchwell
    const perchwellMotto = homePage.mottoTextLocator;
    await expect(perchwellMotto).toHaveText('The modern data & workflow solution for real estate.');

    // From the homepage of perchwell, click on 'For Brokers' link which navigates to BrokersPage
    await brokersPage.navigateToBrokersPage();

    // Confirm the correct page was shown after the click which includes 'professionals' in the url
    await expect(page).toHaveURL('https://www.perchwell.com/professionals');

    // Check if "Book a Demo" button exists and visible in the DOM
    await expect(brokersPage.bookDemoHeroBtn).toBeVisible();

    // Extract the text of the btn to be used for assertion
    const btnText = await brokersPage.bookDemoHeroBtn.textContent();

    // Check and confirm if the text exists, if not then throw an error
    if (!btnText) {
        throw new Error('Something is wrong, please check your locators.');
    }

    // Verify 'Book a Demo' button element has a correct text
    await expect(brokersPage.bookDemoHeroBtn).toHaveText('Book a Demo');

    // Verify extracted text is equal to the expected text
    expect(btnText.trim()).toEqual('Book a Demo');
});
