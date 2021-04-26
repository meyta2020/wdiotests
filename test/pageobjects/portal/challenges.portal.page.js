import PortalPage from "./portal.page";

class ChallengesPage extends PortalPage {
    get challengesHeader() {
        return $('div > h1');
    }

    open() {
        return super.open('/challenge');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/challenge');
        expect(this.challengesHeader).toHaveText('Coding challenges from very basic to interview level');
    }
}

export default new ChallengesPage();
