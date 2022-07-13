import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchPage from "../pageObjects/SearchPage";
import SelectAddressPage from "../pageObjects/SelectAdressPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {

    // Click Account button
    LoginPage.clickAccountButton.click();

    // Click Login button
    LoginPage.clickLoginButton.click();

    // Set email value to "demo"
    LoginPage.userEmail.click().type('demo');

    // Set password value to "demo"
    LoginPage.userPassword.click().type('demo');

    // Click Log in
    LoginPage.logInButton.click();

    // Click Account button
    LoginPage.clickAccountButton.click();

    // Validate that "demo" account name appears in the menu section
    LoginPage.userNameValidation.contains('demo');
  });

  it("Registration", () => {

    // Click Account button
    RegistrationPage.clickAccountButton.click();

    // Login button
    RegistrationPage.clickLoginButton.click();

    // Click "Not yet a customer?"
    RegistrationPage.notYetACustomerButton.click();

    // Find - how to generate random number in JS
    
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    let numbers = RegistrationPage.randEmailGen();
    RegistrationPage.userEmailField.click().type('email_'+numbers+'@gmail.com');
    // Fill in password field and repeat password field with same password
    RegistrationPage.userPasswordField.click().type('Ventspils'+numbers);
    // Click on Security Question menu
    RegistrationPage.userRepeatPasswordField.click().type('Ventspils'+numbers);
    // Select  "Name of your favorite pet?"
    RegistrationPage.securityQuesField.click();
    RegistrationPage.userFavoritePetNameField.click();
    // Fill in answer
    RegistrationPage.userAnswerField.click().type('Bob');
    // Click Register button
    RegistrationPage.registerButton.click();
    // Set email value to previously created email
    let email = 'email_'+numbers+'@gmail.com';
    let password = 'Ventspils'+numbers;
    // Set password value to previously used password value
    // Click login button
    LoginPage.userEmail.click().type(email);
    LoginPage.userPassword.click().type(password);
    LoginPage.logInButton.click();
    // Click Account button
    LoginPage.clickAccountButton.click();
    // Validate that account name (with previously created email address) appears in the menu section
    LoginPage.userNameValidation.contains(email);
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    // Search for Lemon
    SearchPage.searchButton.click().wait(1000);
    SearchPage.searchInputField.type('Lemon{enter}',{delay : 10},{forse : true});
    
    // Select a product card - Lemon Juice (500ml)
    SearchPage.lemonJuice.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.lemonJuiceValidation.contains('Lemon Juice (500ml)');
  });

  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  it('Search 500ml and validate Lemon, while having multiple cards', () =>{
  // Click on search icon
  // Search for 500ml
    SearchPage.searchButton.click();
    SearchPage.searchInputField.type('500ml');

  // Select a product card - Lemon Juice (500ml)
    SearchPage.lemonJuice.click();
  // Validate that the card (should) contains "Sour but full of vitamins."
  SearchPage.lemonJuiceValidation.contains('Lemon Juice (500ml)');
  SearchPage.lemonJuiceValidation.contains('Sour but full of vitamins.');
});
  it('Search 500ml and validate cards', () => {
  // Create scenario - Search 500ml and validate cards
  // Click on search icon
  SearchPage.searchButton.click();
  // Search for 500ml
  SearchPage.searchInputField.type('500ml{enter}');
  // Select a product card - Eggfruit Juice (500ml)
  SearchPage.eggFruitJuice.click();
  // Validate that the card (should) contains "Now with even more exotic flavour."
  SearchPage.eggFruitJuiceValidation.contains('Eggfruit Juice (500ml)');
  SearchPage.eggFruitJuiceValidation.contains('Now with even more exotic flavour.');
  // Close the card
  SearchPage.closeButton.click();
  // Select a product card - Lemon Juice (500ml)
  SearchPage.lemonJuice.click();
  // Validate that the card (should) contains "Sour but full of vitamins."
  SearchPage.lemonJuiceValidation.contains('Sour but full of vitamins.');
  // Close the card
  SearchPage.closeButton.click();
  // Select a product card - Strawberry Juice (500ml)
  SearchPage.strawberryJuice.click();
  // Validate that the card (should) contains "Sweet & tasty!"
  SearchPage.strawberryJuiceValidation.contains('Sweet & tasty!');
});
  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
  it('Read a review', () =>{
    SearchPage.searchButton.click();
    SearchPage.searchInputField.type('King{enter}');
    SearchPage.kingFacemask.click();
    SearchPage.reviewsButton.click().wait(5000);
    SearchPage.reviewsValidation.contains('K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
  });
  
  it('Add a review', () =>{
    // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"
    SearchPage.searchButton.click();
    SearchPage.searchInputField.type('Raspberry{enter}');
    SearchPage.raspberryJuice.click();
    SearchPage.reviewTextArrea.click().wait(2000).type('Tastes like metal');
    SearchPage.submitButton.click();
    SearchPage.reviewsButton.click().wait(5000);
    SearchPage.reviewsValidation.contains('Tastes like metal');
  });
  
  it('Validate product card amount', () =>{
    // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35
    SearchPage.mainGidElement.find('mat-grid-tile').should('have.length',12);
    SearchPage.itemsOnPageButton.click();
    SearchPage.itemsOnPageNumber.contains('24').click();
    SearchPage.mainGidElement.find('mat-grid-tile').should('have.length',24);
    SearchPage.itemsOnPageButton.click();
    SearchPage.itemsOnPageNumber.contains('36').click();
    SearchPage.mainGidElement.find('mat-grid-tile').should('have.length',35);
  });
  
  it.only('Buy Girlie T-shirt', () =>{

  
  // Click on search icon
  SearchPage.searchButton.click();
  SearchPage.searchInputField.type('Girlie{enter}');
  SearchPage.addToBasketButton.click();
  SearchPage.userBasket.click();
  SearchPage.checkOutButton.click();
  SearchPage.addAdressButton.click();

  SelectAddressPage.userContryInputField
  .click()
  .type('United Fakedom');
  SelectAddressPage.userNameInputField
  .click()
  .type('Gleb');
  SelectAddressPage.userMobileNumberInputField
  .click()
  .type('88888888');
  SelectAddressPage.userZIPCodeInputField
  .click()
  .type('LV-3601');
  SelectAddressPage.userAdressCodeInputField
  .click()
  .type('PilsIela45');
  SelectAddressPage.userCityInputField
  .click()
  .type('Ventspils');
  SelectAddressPage.userStateInputField
  .click()
  .type('Kurzeme');

  SearchPage.submitButton.click();
  SearchPage.radioCheckBox.check();
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button
  // Create page object - BasketPage
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"
});
  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
});
