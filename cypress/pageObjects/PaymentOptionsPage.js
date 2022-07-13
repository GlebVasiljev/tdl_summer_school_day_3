import BasePage from '../pageObjects/basePage'

class PaymentOptionsPage extends BasePage {

    static get paymentCard() {
        return cy.get('#mat-radio-44');
    }

    static get paymentContinue() {
        return cy.get('button[aria-label="Proceed to review"]')
    }
    
}
export default PaymentOptionsPage;