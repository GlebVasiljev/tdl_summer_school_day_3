import BasePage from '../pageObjects/basePage'

class OrderSummaryPage extends BasePage {

    static get orderPay() {
        return cy.get('#checkoutButton');
    }
    
}
export default OrderSummaryPage;