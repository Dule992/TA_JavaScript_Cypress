class invertoryPage {

    // Elements
    elements = {
        invertoryItem: () => cy.get('.inventory_item')
    };

    // Actions
    getInvertoryItems() {
        return this.elements.invertoryItem()
    }
}

module.exports = new invertoryPage;