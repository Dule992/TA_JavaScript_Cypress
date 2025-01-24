const { describe, it, beforeEach } = require("mocha");
const loginPage = require('../pages/login.page');
const invertoryPage = require("../pages/invertory.page");
const cartPage = require("../pages/cart.page");
const checkoutPage = require("../pages/checkout.page");
const testData = require("../fixtures/testData.json");

const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Buy a product', { tags: '@smoke' }, () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify successfuly buying a random product', () => {
    loginPage.login(username, password)

    invertoryPage.elements.invertoryItem().then($elements => {
      const randomIndex = Math.floor(Math.random() * $elements.length)
      cy.wrap(randomIndex).as('randomIndex');
    })
    cy.get('@randomIndex').then(randomIndex => {
      cy.log(`Random Index: ${randomIndex}`)
      invertoryPage.getProductData(randomIndex)
      invertoryPage.clickAddToCartButton(randomIndex)
    })
    const itemDetailsQuantity = 1;
    cy.wrap(itemDetailsQuantity).as('itemDetails.quantity');
    invertoryPage.clickShoppingCartLink()

    cartPage.checkCartItemDetails()
    cartPage.clickCheckoutButton()

    checkoutPage.fillOutCheckoutForm('John', 'Doe', '12345')
    checkoutPage.checkCheckoutSecondStepPageDetails()
    checkoutPage.clickFinishButton()
    checkoutPage.completeOrderContainer().should('be.visible')
  })

  it('Verify successfuly buying a specific product', () => {
    loginPage.login(username, password)

    invertoryPage.getProductData(2)
    invertoryPage.clickAddToCartButton(2)

    const itemDetailsQuantity = 1;
    cy.wrap(itemDetailsQuantity).as('itemDetails.quantity')
    invertoryPage.clickShoppingCartLink()

    cartPage.checkCartItemDetails()
    cartPage.clickCheckoutButton()

    checkoutPage.fillOutCheckoutForm(testData.firstName, testData.lastName, testData.zipCode)
    checkoutPage.checkCheckoutSecondStepPageDetails()
    checkoutPage.clickFinishButton()
    checkoutPage.completeOrderContainer().should('be.visible')
  })
})
