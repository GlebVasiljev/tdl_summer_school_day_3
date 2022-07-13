import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {
  static get url () {
    return '/#/search';
  }
  static get userContryInputField(){
    return cy.get('#mat-input-1');
  }
  static get userNameInputField(){
    return cy.get('#mat-input-2');
  }
  static get userMobileNumberInputField(){
    return cy.get('#mat-input-3');
  }
  static get userZIPCodeInputField(){
    return cy.get('#mat-input-4');
  }
  static get userAdressCodeInputField(){
    return cy.get('[id="address"]');
  }
  static get userCityInputField(){
    return cy.get('#mat-input-6');
  }
  static get userStateInputField(){
    return cy.get('#mat-input-7');
  }
  
}

export default SelectAddressPage;