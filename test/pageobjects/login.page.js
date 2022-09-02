

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#login-email-input');
    }

    get inputPassword () {
        return $('#login-password-input');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('account/login');
    }
}

module.exports = new LoginPage();
