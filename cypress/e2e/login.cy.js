const { describe, it, beforeEach } = require("mocha");
const loginPage = require('../pages/login.page');
const invertoryPage = require("../pages/invertory.page");
const testData = require("../fixtures/testData.json");
const { generateRandomUser } = require('../support/generateData');

const username = Cypress.env('username');
const password = Cypress.env('password');
const randomUser = generateRandomUser();

describe('Login functionality', { tags: '@regression'}, () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify successful login with valid data', () => {
    loginPage.login(username, password)
    invertoryPage.elements.invertoryItem().should('have.length', 6)
  })

  it('Verify unsuccessful login with invalid data', () => {
    loginPage.login(randomUser.username, randomUser.password)
    loginPage.getErrorButton().should('be.visible')
    loginPage.getErrorText().should('have.text', testData.invalidDataErrorMessage)
  })

  it('Verify unsuccessful login with empty data', () => {
    loginPage.clickLoginButton()
    loginPage.getErrorButton().should('be.visible')
    loginPage.getErrorText().should('have.text', testData.userNameErrorMessage)
  })

  it('Verify unsuccessful login with empty password', () => {
    loginPage.typeUsername('standard_user')
    loginPage.clickLoginButton()
    cy.get('.error-button').should('be.visible')
    loginPage.getErrorText().should('have.text', testData.passwordErrorMessage)
  })
})
