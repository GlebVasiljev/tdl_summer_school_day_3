import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }
  
  static get clickAccountButton(){
    return cy.get('[id="navbarAccount"]');
  }
  static get clickLoginButton(){
    return cy.get('[id="navbarLoginButton"]');
  }
  static get userEmail(){
    return cy.get('[id="email"]');
  }
  static get userPassword(){
    return cy.get('[id="password"]');
  }
  static get logInButton(){
    return cy.get('[id="loginButton"]');
  }
  static get userNameValidation(){
    return cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span');
  }
  static get ordersPaymentButton() {
    return cy.get('button[aria-label="Show Orders and Payment Menu"]');
  }
  static get userAddresses() {
    return cy.get('span').contains("My saved addresses");
  }
  static get userPayment() {
    return cy.get('span').contains("My Payment Options");
  }
}

export default LoginPage;
