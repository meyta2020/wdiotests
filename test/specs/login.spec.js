import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/portal/profile.portal.page";

describe("Auth", () => {
  beforeEach(() => {
    LoginPage.open();
  });

  afterEach(() => {
    browser.execute("window.localStorage.clear()");
  });

  it("user logs in with valid data", () => {
    LoginPage.setLogin("tx@gmail.com");
    LoginPage.setPassword("123456");
    LoginPage.clickSubmitButton();
    ProfilePage.isOpen();
  });

  it("Submit button is disabled while required fields are empty", () => {
    LoginPage.submitButtonIsDisabled();
  });

  it("fails if invalid data provided", function () {
    LoginPage.setLogin("tx@gmail.com");
    LoginPage.setPassword("12345");
    LoginPage.clickSubmitButton();
    LoginPage.errorToastAppeared();
  });

  it("The error appears if the email is entered incorrectly ", function () {
    LoginPage.setLogin("tx.gmail.com");
    LoginPage.emailNotValid();
  });

  it("The error appears if the password is entered incorrectly", function () {
    LoginPage.setLogin("tx@gmail.com");
    LoginPage.setPassword("123");
    LoginPage.clickSubmitButton();
    LoginPage.errorToastAppeared();
  });

  it("The error Required appears after deleting characters in the mail field", function () {
    LoginPage.setLogin("tx@gmail.com");
    LoginPage.emptyLoginInput();
    LoginPage.loginRequiredError();
  });

  it("The error Required appears after deleting characters in the password field", function () {
    LoginPage.setPassword("123");
    LoginPage.emptyPasswordInput();
    LoginPage.passwordRequiredError();
  });

  it("The error Required appears after deleting characters in the mail field and password field", function () {
    LoginPage.setLogin("tx@gmail.com");
    LoginPage.emptyLoginInput();
    LoginPage.loginRequiredError();
    LoginPage.setPassword("123");
    LoginPage.emptyPasswordInput();
    LoginPage.passwordRequiredError();
  });
});
