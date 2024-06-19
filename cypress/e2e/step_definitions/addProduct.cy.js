import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/home";
import commonPage from "../../pages/common";
import productPage from "../../pages/product";
import cartPage from "../../pages/cart";

Given('the user navigates to OpenCart', function () {
    cy.visit('/');
});

When('the user add to cart 2nd featured item on the home page', function () {
    homePage.clickSecondFeatureItemAddCartButton();
});

When('the user navigates to 2nd featured item page', function () {
    homePage.clickSecondFeatureItemImage();
});

When('the user add to cart 2nd featured item on the product page', function () {
   productPage.clickProductAddToCartButton();
});

When('the user add to cart 1st featured item on the home page', function () {
    homePage.clickSecondFeatureItemAddCartButton();
});
Then('the cart have 2 items', function () {
    commonPage.getCartItems().should('contain', '2 item(s)');
});
Then('on the top of the page a successful message is visible', function () {
    commonPage.getAlertSuccess().should('exist').and('be.visible');
});

