class HomePage {
    elements = {
        secondFeatureItemImage: () => cy.get("#content .row .product-layout:nth-of-type(2) .image  a"),
        secondFeatureItemAddCartButton: () => cy.get("#content .row .product-layout:nth-of-type(2) .button-group button:nth-of-type(1)"),
        firstFeatureItemAddCartButton: () => cy.get("#content .row .product-layout:nth-of-type(1) .button-group button:nth-of-type(1)"),
    }

    clickSecondFeatureItemImage() {
        this.elements.secondFeatureItemImage().click()
    }
    clickSecondFeatureItemAddCartButton() {
        this.elements.secondFeatureItemAddCartButton().click()
    }
    clickFirstFeatureItemAddCartButton() {
        this.elements.firstFeatureItemAddCartButton().click()
    }

}

module.exports = new HomePage();