@regression @seeEditProductsCart
Feature: See and Edit products In cart

    Background:
        Given the user navigates to OpenCart


    Scenario: User is able to see cart content in any page
        When the user navigates to 2nd featured item page
        And the user click on cart button
        Then the cart content is visible

    @smoke
    Scenario: The user can see the products details on the cart page
        When the user add to cart "iPhone"
        And the user click on cart button
        And the user navigates on view cart
        Then the cart content have an "iPhone"


    Scenario: The user can delete products
        When the user add to cart "iPhone"
        And the user click on cart button
        And the user click remove  button
        Then the cart content is empty

    Scenario: The user can update quantity products
        Given The user added an "iPhone"
        And the user navigated to the cart page
        When the user change quantity 2
        And the user click Update button
        Then the user can see the details updated on "iPhone"

    

