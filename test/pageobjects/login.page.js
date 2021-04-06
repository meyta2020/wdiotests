import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email');}
    get inputPassword () { return $('#normal_login_password');}
    get buttonSubmit () { return $('.login-form-button');}
    get errorEmail() { return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="'email' is not a valid email"]`);}
    get requiredErrorEmail () {return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="Required"]`);}
    get errorToast () { return $('.ant-notification-notice-message'); }


    setLogin (email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }

    open () {
        return super.open('/');
    }

    submitButtonIsDisabled () {
        expect(this.buttonSubmit).toBeDisabled();
    }

    emailNotValid (){
        expect(this.errorEmail).toBeDisplayed();
    }

    deleteData () {

    }
}

export default new LoginPage();
