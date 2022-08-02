const searchStoreLocation = async () => {
    const postcodeInput = await $('[data-ref="location-search-bar"] input');
    postcodeInput.setValue("3000");
    const getFirstPostcode = await $(
        '[data-ref="store-autocomplete-list"] div:first-child'
    );
    await getFirstPostcode.click();
};

const setMyStore = async () => {
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