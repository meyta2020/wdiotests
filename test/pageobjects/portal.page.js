import Page from "./page";

export default class PortalPage extends Page {
  get linkCourses() {
    return $('[data-qa="topmenu-Courses"]');
  }

  get linkCards() {
    return $('[data-qa="topmenu-Cards"]');
  }

  get linkDiary() {
    return $('[data-qa="topmenu-Diary"]');
  }

  get linkChallenges() {
    return $('[data-qa="topmenu-Challenges"]');
  }
}
