const { describe, it, beforeEach } = require("mocha");
const loginPage = require('../pages/login.page');
const invertoryPage = require("../pages/invertory.page");

const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify successful login with valid data', () => {
    loginPage.login(username, password)
    invertoryPage.getInvertoryItems().should('have.length', 6)
  })

  it('Verify unsuccessful login with invalid data', () => {
    loginPage.login('invalid_user', 'invalid_password')
    loginPage.getErrorButton().should('be.visible')
    loginPage.getErrorText().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Verify unsuccessful login with empty data', () => {
    loginPage.clickLoginButton()
    loginPage.getErrorButton().should('be.visible')
    loginPage.getErrorText().should('have.text', 'Epic sadface: Username is required')
  })

  it('Verify unsuccessful login with empty password', () => {
    loginPage.typeUsername('standard_user')
    loginPage.clickLoginButton()
    cy.get('.error-button').should('be.visible')
    loginPage.getErrorText().should('have.text', 'Epic sadface: Wrong is required')
  })
})
