import PortalPage from "./portal.page";

class DiaryPage extends PortalPage {
    get diaryHeader() {
        return $('div > h1');
    }

    open() {
        return super.open('/diary');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/diary');
        expect(this.diaryHeader).toHaveText('Diaries is self accountability tool');
    }
}

export default new DiaryPage();
