class CommonPage {
    elements = {
        cartItems: () => cy.get("#cart-total"),
        alertSuccess: () => cy.get("div .alert-success"),
        cartButton: () => cy.get("#cart"),
        cartContent: () => cy.get("#cart .dropdown-menu"),
        cartPageLink: () => cy.get("#cart .dropdown-menu i.fa-shopping-cart"),
        buttonRemove: () => cy.get("#cart .dropdown-menu button[title='Remove']")
    }


    clickCartButton() {
        this.elements.cartButton().click()
    }
    clickCartPageLink() {
        this.elements.cartPageLink().click()
    }
    clickButtonRemove() {
        this.elements.buttonRemove().click()
    }
    getCartContent() {
        return this.elements.cartContent()
    }
    getCartItems() {
        return this.elements.cartItems()
    }
    getAlertSuccess() {
        return this.elements.alertSuccess()
    }
    getCartPageLink() {
        return this.elements.cartPageLink()
    }
}

module.exports = new CommonPage();