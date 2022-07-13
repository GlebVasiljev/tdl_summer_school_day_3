import BasePage from '../pageObjects/basePage'

class SavedAddressesPage extends BasePage {

    static get userSavedAddress() {
        return cy.get('button[aria-label="Add a new address"]');
    }
    
}
export default SavedAddressesPage;