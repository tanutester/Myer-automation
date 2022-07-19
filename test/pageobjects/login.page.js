

const TargetPage = require('./page');
const openloginPage = ()=> {
    TargetPage.openTargetPage('login')
}

const setInputValue = async (var1, var2) => {
    const inputText = $(var1);
    await inputText.setValue(var2);
}

const enterLoginDetails = async ()=> {
    const Target_username = process.env.TARGET_USERNAME;
    const Target_password = process.env.TARGET_PASSWORD;

    // const emailInput = $('input[id="email"]');
    // emailInput.setValue(Target_username);

    // const passwordInput = $('input[id="email"]');
    // passwordInput.setValue(Target_password);

    await setInputValue( 'input[id="email"]', Target_username );
    await setInputValue( 'input[id="password"]', Target_password );

    await $('button[id="login-submit"]').click();
    
}



module.exports = {
    openloginPage,
    enterLoginDetails
}

















/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends TargetPage {
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
