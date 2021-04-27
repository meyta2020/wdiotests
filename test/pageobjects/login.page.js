import Page from "./page";

class LoginPage extends Page {
  get loginPageClick() {
    return $("//a[contains(@href,'/user/login')]");
  }

  get inputUsername() {
    return $("#normal_login_email");
  }

  get inputPassword() {
    return $("#normal_login_password");
  }

  get buttonSubmit() {
    return $(".login-form-button");
  }

  get errorEmail() {
    return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="'email' is not a valid email"]`);}

  get errorToast() {
    return $(".ant-notification-notice-message");
  }

  get loginValidateError() {
    return $(
      '//div[contains(@class,"ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'
    );
  }

  get passwordValidateError() {
    return $(
      '//div[contains(@class,"ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]'
    );
  }

  open() {
    return super.open("/user/login/");
  }

  submitButtonIsDisabled() {
    expect(this.buttonSubmit).toBeDisabled();
  }

  setLogin(email) {
    this.inputUsername.setValue(email);
  }

  setPassword(password) {
    this.inputPassword.setValue(password);
  }

  clickSubmitButton() {
    this.buttonSubmit.click();
  }

  errorToastAppeared() {
    expect(this.errorToast).toBeDisplayed();
  }

  emailNotValid() {
    expect(this.errorEmail).toBeDisplayed();
  }

  emptyLoginInput() {
    this.clearInput(this.inputUsername);
  }

  emptyPasswordInput() {
    this.clearInput(this.inputPassword);
  }

  loginRequiredError() {
    expect(this.loginValidateError).toBeDisplayed();
    expect(this.loginValidateError.getText()).toEqual("Required");
  }

  passwordRequiredError() {
    expect(this.passwordValidateError).toBeDisplayed();
    expect(this.passwordValidateError).toHaveText('Required');
  }
}

export default new LoginPage();
