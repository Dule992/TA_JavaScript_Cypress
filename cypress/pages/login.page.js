class loginPage {

    // Elements
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorButton: () => cy.get('.error-button'),
        errorText: () => cy.get('[data-test="error"]')
    }

    // Actions

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }
    
    typePassword(password) {
        this.elements.passwordInput().type(password)
    }
    
    clickLoginButton() {
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLoginButton()
    }

    getErrorButton() {
        return this.elements.errorButton()
    }

    getErrorText() {
        return this.elements.errorText()
    }
}

module.exports = new loginPage;