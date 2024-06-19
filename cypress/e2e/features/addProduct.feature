@regression @addProduct
Feature: Add products to cart

Background:
Given the user navigates to OpenCart

@smoke
Scenario: User is able to add products to cart in differents pages
    When the user add to cart 2nd featured item on the home page
    And the user navigates to 2nd featured item page
    And the user add to cart 2nd featured item on the product page
    Then the cart have 2 items


Scenario: A message confirm that the product has been added to the cart
    When the user add to cart 2nd featured item on the home page
    Then on the top of the page a successful message is visible


Scenario: Number of items update automatically
    When the user add to cart 2nd featured item on the home page
    And the user add to cart 1st featured item on the home page
    Then the cart have 2 items

