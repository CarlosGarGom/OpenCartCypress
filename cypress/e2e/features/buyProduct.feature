@regression @buyProducts
Feature: Buy products

    Background:
        Given the user navigates to OpenCart

    @smoke
    Scenario Outline: The user buy 2 products succesfully
        Given The user added an "iPhone" and "MacBook"
        And the user navigated to the checkout Page
        When the user fills info succesfully and finish all steps
        Then A message appears: "Your order has been placed!"