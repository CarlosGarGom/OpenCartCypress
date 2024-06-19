import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/home";
import commonPage from "../../pages/common";
import productPage from "../../pages/product";
import cartPage from "../../pages/cart";

beforeEach(() => {
    cy.fixture('product').then((data) => {
        products = data;
    });
});
Given('The user added an {string}', function (productName) {
    productPage.addToCartProductByName(productName, products);
});
Given('the user navigated to the cart page', function () {
    commonPage.clickCartButton();
    commonPage.getCartContent().should('be.visible');
    commonPage.clickCartPageLink();
});

When('the user click on cart button', function () {
    commonPage.clickCartButton();
});

When('the user add to cart {string}', function (productName) {
    productPage.addToCartProductByName(productName, products);
});
When('the user navigates on view cart', function () {
    commonPage.getCartContent().should('be.visible');
    commonPage.clickCartPageLink();
});

When('the user click remove  button', function () {
    commonPage.clickButtonRemove();
});
When('the user change quantity {int}', function (quantity) {
    cartPage.typeQuantity(quantity)
});

When('the user click Update button', function () {
    cartPage.clickButtonUpdateQuantity();
});

Then('the cart content is visible', function () {
    commonPage.getCartContent().should('be.visible');
});

Then('the cart content have an {string}', function (productName) {
    cartPage.checkContentCart(productName,products)
});

Then('the cart content is empty', function () {
    commonPage.getCartPageLink().should('not.exist');
});

Then('the user can see the details updated on {string}', function (productName) {
    cartPage.checkContentCart(productName,products)
});