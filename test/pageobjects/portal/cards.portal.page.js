import PortalPage from "./portal.page";

class CardsPage extends PortalPage {
    get cardsHeader() {
        return $('section > h1');
    }

    open() {
        return super.open('/flash');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/flash');
        expect(this.cardsHeader).toHaveText('Flash cards in beta mode so far');
    }
}

export default new CardsPage();
