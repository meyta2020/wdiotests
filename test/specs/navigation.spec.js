import MainPage from "../pageobjects/portal/main.portal.page";
import CoursesPage from "../pageobjects/portal/courses.portal.page";

describe("Navigation", () => {
  before(() => {
    browser.login("tx@gmail.com", "123456");
  });

  beforeEach(() => {
    MainPage.open();
  });

  it("Courses Page is open", function () {
    MainPage.goToCouses();
    CoursesPage.isOpen();
  });
});
