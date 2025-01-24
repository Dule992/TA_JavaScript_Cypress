class invertoryPage {

    // Elements
    elements = {
        invertoryItem: () => cy.get('.inventory_item'),
        intertoryItemName: () => cy.get('.inventory_item_name'),
        invertoryItemPrice: () => cy.get('.inventory_item_price'),
        addToCartButton: () => cy.get(`.inventory_item .btn_inventory`),
        shoppingCartLink: () => cy.get('.shopping_cart_link')
    };

    // Actions        
    getProductData(index) {
        this.elements.intertoryItemName().eq(index).then((e) => {
            const text = e.text();
            cy.wrap(text).as('itemDetails.name');
            cy.get('@itemDetails.name').then((name) => {
                cy.log(name);
            });
        });
        this.elements.invertoryItemPrice().eq(index).then((e) => {
            const text = e.text();
            cy.wrap(text).as('itemDetails.price');
            cy.get('@itemDetails.price').then((price) => {
                cy.log(price);
            });
        });
    }

    clickAddToCartButton(index) {
        this.elements.addToCartButton().then($element => {
            $element[index].click()
        })
    }

    clickShoppingCartLink() {
        this.elements.shoppingCartLink().click()
    }
}

module.exports = new invertoryPage;