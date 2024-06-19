class CartPage {
    elements = {
        buttonUpdateQuantity: () => cy.get("form table tbody button[data-original-title='Update']"),
        alertSuccess: () => cy.get("div .alert-success"),
        inputQuantity: () => cy.get("input[name*='quantity']"),
        cartContent: () => cy.get("#cart .dropdown-menu"),
        cartPageLink: () => cy.get("#cart .dropdown-menu i.fa-shopping-cart"),
        buttonRemove: () => cy.get("#cart .dropdown-menu button[title='Remove']"),
        checkoutButton: () => cy.get(".buttons .pull-right a"),
        guestCheckout: () => cy.get("input[value='guest']"),
        accountContinue:() => cy.get("input#button-account"),
        firstname:() => cy.get("input[name='firstname']"),
        lastname:() => cy.get("input[name='lastname']"),
        email:() => cy.get("#input-payment-email"),
        telephone:() => cy.get("input[name='telephone']"),
        address1:() => cy.get("input[name='address_1']"),
        city:() => cy.get("input[name='city']"),
        postcode:() => cy.get("input[name='postcode']"),
        selectZone:() => cy.get("select[name='zone_id']") ,
        buttonGuest:() => cy.get("#button-guest"),
        buttonShipping:() => cy.get("#button-shipping-method"),
        agreeTerms:() => cy.get("input[name='agree']"),
        buttonMethod:() => cy.get("#button-payment-method"),
        confirmOrderButton:() => cy.get("#button-confirm"),
        orderMessage:() => cy.get("#content h1")
        
    }


    clickConfirmOrderButton(){
        this.elements.confirmOrderButton().click()
    }
    clickButtonMethod(){
        this.elements.buttonMethod().click()
    }
    clickAgreeTerms(){
        this.elements.agreeTerms().click()
    }
    clickButtonShipping(){
        this.elements.buttonShipping().click()
    }
    clickButtonGuestButton(){
        this.elements.buttonGuest().click()
    }
    clickButtonUpdateQuantity() {
        this.elements.buttonUpdateQuantity().click()
    }
    clickAccountContinue() {
        this.elements.accountContinue().click()
    }
    clickGuestCheckout() {
        this.elements.guestCheckout().click()
    }
    clickCheckoutButton() {
        this.elements.checkoutButton().click()
    }
    typeQuantity(quantity) {
        this.elements.inputQuantity().clear();
        this.elements.inputQuantity().type(quantity)

    }
    getValueQuantity(){
        return this.elements.inputQuantity().invoke('val').then(parseFloat);;
    }
    getOrderMessage(){
        return this.elements.orderMessage();
    }
    typeBillingDetails(){
        this.elements.firstname().type("dsadasdsa");
        this.elements.lastname().type("fsafuasfas");
        this.elements.email().type("carlos@gmail.com");
        this.elements.telephone().type("fasfsafasfsa");
        this.elements.address1().type("dsadsadsa");
        this.elements.city().type("dasdasdsa");
        this.elements.postcode().type("4040");
        this.elements.selectZone().select('3513');
        this.clickButtonGuestButton();
        this.clickButtonShipping();
        this.clickAgreeTerms();
        this.clickButtonMethod();
        this.clickConfirmOrderButton();

    }
    checkContentCart(productName, products){
        const product = products.find(p => p.name === productName);
        if (!product) {
            throw new Error(`Product ${productName} not found in fixture`);
        }

        cy.get('form table tbody').within(() => {
            cy.contains('tr', product.name).within(() => {
                cy.get('td img').should('have.attr', 'src').and('include', product.image);
                cy.get('td').eq(1).contains(product.name);
                cy.get('td').eq(2).contains(product.model);
                cy.get('td').eq(4).contains(product.price.toFixed(2));
                this.getValueQuantity().then(quantity => {
                    const totalPrice = (product.price * quantity).toFixed(2);
                    cy.get('td').eq(5).contains(totalPrice); // Verificar precio total
                });
                // Agrega más verificaciones según sea necesario
            });
        });
    }
}

module.exports = new CartPage();