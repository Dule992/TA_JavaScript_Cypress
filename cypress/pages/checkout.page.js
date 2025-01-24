class checkoutPage {

    // Elements
    elements = {
        firstNameField: () => cy.get('#first-name'),
        lastNameField: () => cy.get('#last-name'),
        postalCodeField: () => cy.get('#postal-code'),
        continueButton: () => cy.get('.cart_button'),
        invertoryItemName: () => cy.get('.inventory_item_name'),
        invertoryItemPrice: () => cy.get('.inventory_item_price'),
        invertoryCartQuantity: () => cy.get('.summary_quantity'),
        completeOrderContainer: () => cy.get('#checkout_complete_container')
    };

    // Actions
    fillOutCheckoutForm(firstName, lastName, postalCode) {
        this.elements.firstNameField().type(firstName)
        this.elements.lastNameField().type(lastName)
        this.elements.postalCodeField().type(postalCode)
        this.elements.continueButton().click()
    }

    checkCheckoutSecondStepPageDetails() {
        cy.get('@itemDetails.name').then((name) => {
            cy.log(`Expected name: ${name}`);
            this.elements.invertoryItemName().then((e) => {
                cy.log(`Actual name: ${e.text()}`);
                expect(e.text()).to.equal(name);
            })
        });

        cy.get('@itemDetails.price').then((price) => {
            cy.log(`Expected price: ${price}`);
            this.elements.invertoryItemPrice().then((e) => {
                cy.log(`Actual price: ${e.text()}`);
                expect(e.text()).to.equal(price);
            });

            cy.get('@itemDetails.quantity').then((quantity) => {
                cy.log(`Expected quantity: ${quantity}`);
                this.elements.invertoryCartQuantity().should('have.text', quantity.toString());
            });
        });
    }

    clickFinishButton(){ 
        this.elements.continueButton().click()
    }

    completeOrderContainer() {
        return this.elements.completeOrderContainer()
    }
}

module.exports = new checkoutPage;