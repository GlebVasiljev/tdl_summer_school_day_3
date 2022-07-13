import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }
  static get clickAccountButton(){
    return cy.get('[id="navbarAccount"]');
  }
  static get clickLoginButton(){
    return cy.get('[id="navbarLoginButton"]');
  }
  static get notYetACustomerButton(){
    return cy.get('[class="primary-link"]');
  }
  static get userEmailField(){
    return cy.get('[id="emailControl"]');
  }
  static randEmailGen(){
    let emailNumber = Math.floor(Math.random() * 100000);
    return emailNumber;
  }
  static get userPasswordField(){
    return cy.get('[id="passwordControl"]');
  }
  static get userRepeatPasswordField(){
    return cy.get('[id="repeatPasswordControl"]');
  }
  static get securityQuesField(){
    return cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
  }
  static get userFavoritePetNameField(){
    
    return cy.get('[id="mat-option-9"]');
  }
  static get userAnswerField(){
    return cy.get('[id="securityAnswerControl"]');
  }
  static get registerButton(){
    return cy.get('[id="registerButton"]');
  }
}


export default RegistrationPage;
