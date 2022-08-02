const LoginPage = require("../pageobjects/officeworksLogin.page");
const EditAccount = require("../pageobjects/editAccountDetails.page");

describe("edit account details", () => {

    it("go to my detail page", async () => {
       
        await LoginPage.openloginPage();
        await LoginPage.enterLoginDetails(
            process.env.OFFICEWORKS_USERNAME,
            process.env.OFFICEWORKS_PASSWORD
        );
        
        await EditAccount.editMyDetails();

        //when we click on edit-my-details
        //it should direct me to the page with title edit details

       
       expect(await $('[data-ref="page-title"]').getText()).toBe(
        "Edit details");

       

});
it("go to my detail page", async () => {
    await EditAccount.addAddressLink();
    await EditAccount.addNewAddress();

    await browser.pause(5000)
});



});