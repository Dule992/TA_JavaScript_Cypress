const { describe, it, beforeEach } = require("mocha");
const loginPage = require('../pages/login.page');
const invertoryPage = require("../pages/invertory.page");

const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Buy a product', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify successful buy product', () => {
    loginPage.login(username, password)
    invertoryPage.buyProduct()
})
})
