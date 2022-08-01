const LoginPage = require("../pageobjects/login.page");

describe("Officeworks login page", () => {
    it.skip("should not login with invalid credentials", async () => {
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

    it("set location value or postcode", async () => {
        await LoginPage.searchStoreLocation();
        //when I click on postcode search,
        //it will direct me to my expected link
        const url = await browser.getUrl();
        console.log(url);
        expect(url).toBe(
            "https://www.officeworks.com.au/shop/officeworks/storelocator/3000"
        );
    });

    it("set location value or postcode", async () => {

        //when click 'set-my-store' button
        // that text should change into 'my-store'

        await LoginPage.setMyStore();
        await browser.waitUntil(
            async () =>
                (await $(
                    '[data-ref="store-list"] > div:nth-child(2) a[data-ref="set-as-my-store"]'
                ).getText()) ===
                "My Store",
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be "My Store"',
            }
        );
        const myStoreText = await $(
            '[data-ref="store-list"] > div:nth-child(2) a[data-ref="set-as-my-store"]'
        ).getText();
        expect (myStoreText).toBe("My Store");

        await browser.pause(5000);
    });
});
