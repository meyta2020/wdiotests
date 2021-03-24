import LoginPage from  '../pageobjects/login.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin();
        LoginPage.setPassword();
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});



