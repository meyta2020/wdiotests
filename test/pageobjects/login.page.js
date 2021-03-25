import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email')}
    get inputPassword () { return $('#normal_login_password')}
    get buttonSubmit () { return $('.login-form-button')}
    get errorEmail() { return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="'email' is not a valid email"]`)}
    get requiredErrorEmail () {return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="Required"]`)}


    setLogin (email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    open () {
        return super.open('/');
    }

    submitButtonIsDisabled () {
        expect(this.buttonSubmit).toBeDisabled();
    }
}

export default new LoginPage();
