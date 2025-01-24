// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom Command to select a random element from a list of elements
Cypress.Commands.add('getRandomElement', (elements) => {
    // Get all elements matching the selector
    elements.then($elements => {
      // Calculate a random index
      const randomIndex = Math.floor(Math.random() * $elements.length);
  
      // Log the random index for debugging purposes
      cy.log(`Random Index: ${randomIndex}`);

      return randomIndex;
    });
  });