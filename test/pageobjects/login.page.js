

const OfficeworksPage = require('./page');
const openloginPage = ()=> {
    OfficeworksPage.openOfficeworksPage('login')
}

const setInputValue = async (var1, var2) => {
    const inputText = $(var1);
    await inputText.setValue(var2);
}

const enterLoginDetails = async ()=> {
    const Officeworks_username = process.env.OFFICEWORKS_USERNAME;
    const Officeworks_password = process.env.OFFICEWORKS_PASSWORD;

    // const emailInput = $('input[id="email"]');
    // emailInput.setValue(Officeworks_username);

    // const passwordInput = $('input[id="email"]');
    // passwordInput.setValue(Officeworks_password);
    
    await setInputValue( 'input[name="j_username"]', Officeworks_username );
    await setInputValue( 'input[name="j_password"]', Officeworks_password );
    await $('input[name="j_username"]').scrollIntoView();

    // await $('input[name="j_password"]').sendKeys('234234')
    await browser.keys(['Meta', 'a'])
    await browser.keys(['Meta', 'c'])
    await $('.forgot-pwd + button').waitForEnabled({ timeout: 10000 });
    await $('.forgot-pwd + button').click();
    
}



module.exports = {
    openloginPage,
    enterLoginDetails
}

















/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends OfficeworksPage {
//     /**
//      * define selectors using getter methods
//      */
//      get inputUsername () {
//         return $('#username');
//      }

//     // get inputPassword () {
//     //     return $('#password');
//     // }

//     // get btnSubmit () {
//     //     return $('button[type="submit"]');
//     // }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(tanupriya775);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();
