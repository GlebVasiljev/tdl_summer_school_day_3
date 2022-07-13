import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {

    static get selectAddress() {
        return cy.get('#mat-radio-40');
    }
    
}
export default SelectAddressPage;