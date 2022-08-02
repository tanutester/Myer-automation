const editMyDetails = async () => {
    await $(
        '[data-ref="home-login-panel"] a[href="/app/personal-details"]'
    ).click();
};
const addAddressLink = async () => {
    const addressLinkButton = await $('[data-ref="add-address-link"]');
    await addressLinkButton.waitForDisplayed({ timeout: 5000 });
    await addressLinkButton.scrollIntoView();
    await addressLinkButton.click();
};

const addNewAddress = async () => {
    const newAddressButton = await $(
        '[id="manageAddressPageDiv"] button[type="submit"]'
    );
    await newAddressButton.waitForDisplayed({ timeout: 5000 });
    await newAddressButton.click();
};

module.exports = {
    editMyDetails,
    addAddressLink,
    addNewAddress,
};
