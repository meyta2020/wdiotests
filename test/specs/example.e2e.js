import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page'

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('tx@gmail.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});



