import BasePage from '../pageObjects/basePage'

class BasketPage extends BasePage {

    static get checkoutButton() {
        return cy.contains('Checkout');
    }

}
export default BasketPage;