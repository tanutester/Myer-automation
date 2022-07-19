const LoginPage = require('../pageobjects/login.page');

describe('Target login page', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openloginPage();
        await LoginPage.enterLoginDetails();

        await browser.pause(15000);


       /* await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');*/
    });
});


