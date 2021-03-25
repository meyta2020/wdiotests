import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page'

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('tx@gmail.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('Submit button is disabled while required fields are empty', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('The error appears if the email is entered incorrectly ', function () {
        LoginPage.setLogin('tx.gmail.com');
        LoginPage.errorEmail;
    });

    it('The error appears after deleting characters in the mail field', function () {
        LoginPage.setLogin('tx');
        browser.pause(5000);
        LoginPage.inputUsername.clearValue();
        browser.pause(5000);
        LoginPage.requiredErrorEmail;
        browser.pause(3000);



    });

});





