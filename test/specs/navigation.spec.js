

describe("Navigation", () => {
  before(() => {
    browser.login("tx@gmail.com", "123456");
  });

  beforeEach(() => {
    browser.url("/");
  });

  it("Courses Page is open", function () {});
});
