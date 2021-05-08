import Page from "./page";

class LoginPage extends Page {
  get inputUsername() {return $("#normal_login_email");}
  get inputPassword() {return $("#normal_login_password");}
  get buttonSubmit() {return $(".login-form-button");}
  get errorEmail() {return $(`//div[@class='ant-form-item-explain ant-form-item-explain-error']/div[.="'email' is not a valid email"]`);}
  get errorToast() {return $(".ant-notification-notice-message");}
  get loginValidateError() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}
  get passwordValidateError() {return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]');}

  async open() {
    return super.open("/user/login/");
  }

  async setLogin(email) {
    return (await this.inputUsername).setValue(email);
  }

  async setPassword(password) {
    return (await this.inputPassword).setValue(password);
  }

  async clickSubmitButton() {
    return (await this.buttonSubmit).click();
  }

  async submitButtonIsDisabled() {
    return expect(this.buttonSubmit).toBeDisabled();
  }

  async errorToastAppeared() {
    return expect(this.errorToast).toBeDisplayed();
  }

  async emptyLoginInput() {
    return this.clearInput(await this.inputUsername);
  }

  async emptyPasswordInput() {
    return this.clearInput(await this.inputPassword);
  }

  // async loginRequiredError() {
  //   await expect(this.loginValidateError).toBeDisplayed();
  //   await expect(this.loginValidateError.getText()).toEqual("Required");
  // }

  async loginRequiredError() {
    await expect(this.loginValidateError).toBeDisplayed();
    await expect(this.loginValidateError).toHaveText("Required");
  }

  async passwordRequiredError() {
    await expect(this.passwordValidateError).toBeDisplayed();
    await expect(this.passwordValidateError).toHaveText('Required');
  }

  async emailNotValid() {
    return expect(this.errorEmail).toBeDisplayed();
  }
}

export default new LoginPage();
