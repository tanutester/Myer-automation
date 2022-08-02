const OfficeworksPage = require("./page");
const openloginPage = () => {
    OfficeworksPage.openOfficeworksPage("app/identity/login");
};

const setInputValue = async (var1, var2) => {
    const inputText = $(var1);
    await inputText.setValue(var2);
};

const enterLoginDetails = async (
    Officeworks_username,
    Officeworks_password
) => {
    //const Officeworks_username = process.env.OFFICEWORKS_USERNAME;
    //const Officeworks_password = process.env.OFFICEWORKS_PASSWORD;

    // const emailInput = $('input[id="email"]');
    // emailInput.setValue(Officeworks_username);

    // const passwordInput = $('input[id="email"]');
    // passwordInput.setValue(Officeworks_password);

    await setInputValue('input[name="username"]', Officeworks_username);
    await setInputValue('input[name="password"]', Officeworks_password);
    await $('button[type="submit"]').click();
};

/*const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };*/

module.exports = {
    openloginPage,
    enterLoginDetails,
};

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
