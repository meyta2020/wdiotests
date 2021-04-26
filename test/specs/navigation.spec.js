import MainPage from "../pageobjects/portal/main.portal.page";
import CoursesPage from "../pageobjects/portal/courses.portal.page";
import CardsPage from "../pageobjects/portal/cards.portal.page";
import DiaryPage from "../pageobjects/portal/diary.portal.page";
import ChallengesPage from "../pageobjects/portal/challenges.portal.page";

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

  it("Cards Page is open", function (){
    MainPage.goToCards();
    CardsPage.isOpen();
  });

  it("Diary Page is Open", function () {
    MainPage.goToDiary();
    DiaryPage.isOpen();
  });

  it("Challenges Page is Open", function () {
    MainPage.goToChallenges();
    ChallengesPage.isOpen();
  });
});
