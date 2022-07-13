import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {
  static get url () {
    return '/#/search';
  }
  static get standartDeliveryInput() {
    return cy.get('#mat-radio-43');
}
    static get deliveryContinue() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }

}
export default DeliveryMethodPage;