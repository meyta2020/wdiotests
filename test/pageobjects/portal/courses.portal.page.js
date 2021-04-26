import PortalPage from "./portal.page";

class CoursesPage extends PortalPage {
    get courseHeader() {
        return $('section > div > h1');
    }

    open() {
        return super.open('/course');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/course');
        expect(this.courseHeader).toHaveText('Interactive Courses');
    }
}

export default new CoursesPage();
