const LoginPage = require("../pageobjects/officeworksLogin.page");

describe.skip("Officeworks login page", () => {
    it("should not login with invalid credentials", async () => {
        await LoginPage.openloginPage();
        await LoginPage.enterLoginDetails("tinaK@gmail.com", "23242432");
        expect(
            await $('div[data-ref="login-panel-error-toast"]').getText()
        ).toBe(
            "Sorry, your details were incorrect and we could not log you in. Please try again."
        );
    });
    it("should login with valid credentials", async () => {
        await LoginPage.openloginPage();
        await LoginPage.enterLoginDetails(
            process.env.OFFICEWORKS_USERNAME,
            process.env.OFFICEWORKS_PASSWORD
        );

        // await browser.pause(5000);
        // await $('[data-ref="home-login-panel"] h3').waitForDisplayed({timeout:15000});
        // wait for element to change text
        await browser.waitUntil(
            async () =>
                (await $('[data-ref="home-login-panel"] h3').getText()) ===
                "Hello Tanu",
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be "Hello Tanu"',
            }
        );
        expect(await $('[data-ref="home-login-panel"] h3').getText()).toBe(
            "Hello Tanu"
        );
    });
});
