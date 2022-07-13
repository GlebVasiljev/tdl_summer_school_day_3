import BasePage from '../pageObjects/basePage'

class SavedPaymentMethodsPage extends BasePage {

    static get addNewCardButton() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get userName() {
        return cy.get('#mat-input-1');
        //return cy.get('#mat-form-field-label-33');
    }

    static get cardNumber() {
        return cy.get('#mat-input-2');
    }

    static get month() {
        return cy.get('#mat-input-3');
    }

    static get year() {
        return cy.get('#mat-input-4');
    }

    static get submitButton() {
        return cy.get('#submitButton');
    }

    static get paymentValidation() {
        return cy.get('mat-row[class="mat-row cdk-row ng-star-inserted"]');
    }
    
}
export default SavedPaymentMethodsPage;