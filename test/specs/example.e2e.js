import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page'

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('tx@gmail.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
        browser.execute('window.localStorage.clear()');

    });

    it('Submit button is disabled while required fields are empty', () => {
        LoginPage.open();
        browser.pause(4000);
        LoginPage.setLogin();
        expect(LoginPage.setLogin()

    });
});

   // test



