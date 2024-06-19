import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/home";
import commonPage from "../../pages/common";
import productPage from "../../pages/product";
import cartPage from "../../pages/cart";

beforeEach(function () {
    cy.visit("/");
    cy.fixture('order').as('orderMessages');
  });
  
Given('The user added an {string} and {string}', function (productName1,productName2) {
    productPage.addToCartProductByName(productName1, products);
    productPage.addToCartProductByName(productName2, products);
});

Given('the user navigated to the checkout Page', function () {
    commonPage.clickCartButton();
    commonPage.getCartContent().should('be.visible');
    commonPage.clickCartPageLink();
    cartPage.clickCheckoutButton();

});
When('the user fills info succesfully and finish all steps', function () {

    cartPage.clickGuestCheckout();
    cartPage.clickAccountContinue();
    cartPage.typeBillingDetails();
});

Then("A message appears: {string}", function () {
    cartPage.getOrderMessage()
      .should('be.visible')
      .and('have.text', this.orderMessages.orderSuccessfull);
});