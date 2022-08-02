const { openOfficeworksPage } = require("../pageobjects/page");
const setStoreLocationPage = require("../pageobjects/setStoreLocation.page");

describe("Officeworks login page", () => {
    it("set location value or postcode", async () => {
        await openOfficeworksPage('');
        //when I click on postcode search,
        //it will direct me to my expected link
        await setStoreLocationPage.searchStoreLocation();
        const url = await browser.getUrl();
        expect(url).toBe(
            "https://www.officeworks.com.au/shop/officeworks/storelocator/3000"
        );
    });

    it("set my store location", async () => {
        await openOfficeworksPage('shop/officeworks/storelocator/3000');
        //when click 'set-my-store' button
        // that text should change into 'my-store'
        await setStoreLocationPage.setMyStore();
        await browser.refresh();
        const myStoreText = await $(
            '[data-ref="store-list"] > div:nth-child(2) a[data-ref="set-as-my-store"]'
        ).getText();
        expect (myStoreText).toBe("My Store");
    });


});