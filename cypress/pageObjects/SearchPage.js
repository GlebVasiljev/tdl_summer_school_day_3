import BasePage from '../pageObjects/basePage'

class SearchPage extends BasePage {
  static get url () {
    return '/#/search';
  }
  static get searchButton(){
    return cy.get('[id="searchQuery"]');
  }
  static get searchInputField(){
    return cy.get('[id="mat-input-0"]');
  }
  static get lemonJuice(){
    return cy.contains(' Lemon Juice (500ml) ');
  }
  static get lemonJuiceValidation(){
    return cy.get('.container > [fxlayout="row"] > :nth-child(2)');
  }
  static get eggFruitJuice(){
    return cy.contains(' Eggfruit Juice (500ml) ');
  }
  static get eggFruitJuiceValidation(){
    return cy.get('.container > [fxlayout="row"] > :nth-child(2)');
  }
  static get closeButton(){
    return cy.contains('Close');
  }
  static get strawberryJuice(){
    return cy.contains(' Strawberry Juice (500ml) ');
  }
  static get strawberryJuiceValidation(){
    return cy.get('.container > [fxlayout="row"] > :nth-child(2)');
  }
  static get kingFacemask(){
    return cy.contains('King of the Hill');
  }
  static get reviewsButton(){
    return cy.contains('Reviews');
  }
  static get reviewsValidation(){
    return cy.get('[class="comment ng-star-inserted"]');
  }
  static get raspberryJuice(){
    return cy.contains('Raspberry Juice (1000ml)');
  }
  static get reviewTextArrea(){
    return cy.get('textarea');
  }
  static get submitButton(){
    return cy.get('[id="submitButton"]');
  }
  static get mainGidElement(){
    return cy.get('[class="mat-grid-list"]');
  }
  static get itemsOnPageButton(){
    return cy.get('.mat-paginator-page-size > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
  }
  static get itemsOnPageNumber(){
    return cy.get('[class="mat-option-text"]');
  }
  static get addToBasketButton(){
    return cy.get('button[aria-label="Add to Basket"]');
  }
  static get userBasket(){
    return cy.get('[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]');
  }
  static get checkOutButton(){
    return cy.get('[id="checkoutButton"]');
  }
  static get addAdressButton(){
    return cy.contains('Add New Address');
  }
  static get radioCheckBox(){
    //return (cy.get('[class="mat-radio-inner-circle"]'));
  }
  static get continueButton(){
    return cy.contains('Continue');
  }

}


export default SearchPage;