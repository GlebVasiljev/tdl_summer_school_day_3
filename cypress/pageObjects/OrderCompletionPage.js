import BasePage from '../pageObjects/basePage'

class OrderCompletionPage extends BasePage {

    static get orderValidation() {
        return cy.get('h1[class="confirmation"]');
    }
    
}
export default OrderCompletionPage;