const searchStoreLocation = async () => {
    const postcodeInput = await $('[data-ref="location-search-bar"] input');
    await postcodeInput.setValue("3000");
    
    await browser.pause(2000);
    await $('button[label="Search"').click();

    // const listItem = await $(
    //     '[data-ref="store-autocomplete-list"] div:first-child'
    // );
    // await listItem.isExisting();
    // await browser.waitUntil(
    //     async () => listItem.isExisting(),
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'expected store list to be visible',
    //     }
    // );
    // await $(
    //     '[data-ref="store-autocomplete-list"] div:first-child'
    // ).waitForExist({ timeout: 5000 });
    // await $(
    //     '[data-ref="store-autocomplete-list"] div:first-child'
    // ).waitForDisplayed({ timeout: 5000 });
    // await listItem.click();
};

const setMyStore = async () => {
    await browser.waitUntil(
        async () =>
            (await $('[data-ref="store-list"] > div:nth-child(1) a[data-ref="set-as-my-store"]').getText()) ===
            "My Store",
        {
            timeout: 10000,
            timeoutMsg: 'expected Russell street to be "My Store"',
        }
    );
    const setMyStoreButton = await $(
        '[data-ref="store-list"] > div:nth-child(2) a[data-ref="set-as-my-store"]'
    );
    await setMyStoreButton.waitForDisplayed({ timeout: 3000 })
    await setMyStoreButton.click();
};

module.exports = {
    searchStoreLocation,
    setMyStore
};