class ProductPage {
    elements = {
        productAddToCartButton: () => cy.get("#button-cart"),
    }

    clickProductAddToCartButton() {
        this.elements.productAddToCartButton().click()
    }
    visitProduct(id){
        cy.visit(`/index.php?route=product/product&product_id=${id}`);
    }

    addToCartProductByName = (productName, products) => {
        const product = products.find(p => p.name === productName);
        if (product) {
            this.visitProduct(product.id);
            this.clickProductAddToCartButton();
        } else {
            throw new Error(`Product ${productName} not found`);
        }
    }
    

}

module.exports = new ProductPage();