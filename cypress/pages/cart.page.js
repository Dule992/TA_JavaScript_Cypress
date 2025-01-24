class cartPage {

    // Elements
    elements = {
        intertoryItemName: () => cy.get('.inventory_item_name'),
        invertoryItemPrice: () => cy.get('.inventory_item_price'),
        invertoryCartQuantity: () => cy.get('.cart_quantity'),
        checkoutButton: () => cy.get('.checkout_button'),
    };

    // Actions
    checkCartItemDetails() {
        cy.get('@itemDetails.name').then((name) => {
            cy.log(`Expected name: ${name}`);
            this.elements.intertoryItemName().then((e) => {
                cy.log(`Actual name: ${e.text()}`);
                expect(e.text()).to.equal(name);
            })
        });

        cy.get('@itemDetails.price').then((price) => {
            cy.log(`Expected price: ${price}`);
            this.elements.invertoryItemPrice().then((e) => {
                cy.log(`Actual price: ${e.text()}`);
                expect("$" + e.text()).to.equal(price);
            });

            cy.get('@itemDetails.quantity').then((quantity) => {
                cy.log(`Expected quantity: ${quantity}`);
                this.elements.invertoryCartQuantity().should('have.text', quantity.toString());
            });
        });
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click()
    }
}

module.exports = new cartPage;