import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/portal/profile.portal.page";

describe("Auth", () => {
  beforeEach(() => {
    LoginPage.open();
  });

  afterEach(() => {
    browser.execute("window.localStorage.clear()");
  });

  it("user logs in with valid data", async () => {
    await LoginPage.setLogin(process.env.LOGIN);
    await LoginPage.setPassword(process.env.PASSWORD);
    await LoginPage.clickSubmitButton();
    await ProfilePage.isOpen();
  });

  it("Submit button is disabled while required fields are empty", async () => {
    await LoginPage.submitButtonIsDisabled();
  });

  it("Fails if invalid data provided", async function () {
    await LoginPage.setLogin("tx@gmail.com");
    await LoginPage.setPassword("12345");
    await LoginPage.clickSubmitButton();
    await LoginPage.errorToastAppeared();
  });

  it("The error appears if the email is entered incorrectly", async function () {
    await LoginPage.setLogin("tx.gmail.com");
    await LoginPage.emailNotValid();
  });

  it("The error appears if the password is entered incorrectly", async function () {
    await LoginPage.setLogin("tx@gmail.com");
    await LoginPage.setPassword("123");
    await LoginPage.clickSubmitButton();
    await LoginPage.errorToastAppeared();
  });

  it("The error Required appears after deleting characters in the mail field", async function () {
    await LoginPage.setLogin("tx@gmail.com");
    await LoginPage.emptyLoginInput();
    await LoginPage.loginRequiredError();
  });

  it("The error Required appears after deleting characters in the password field", async function () {
    await LoginPage.setPassword("123");
    await LoginPage.emptyPasswordInput();
    await LoginPage.passwordRequiredError();
  });

  it("The error Required appears after deleting characters in the mail field and password field", async function () {
     await LoginPage.setLogin("tx@gmail.com");
     await LoginPage.emptyLoginInput();
     await LoginPage.loginRequiredError();
     await LoginPage.setPassword("123");
     await LoginPage.emptyPasswordInput();
     await LoginPage.passwordRequiredError();
  });
});

