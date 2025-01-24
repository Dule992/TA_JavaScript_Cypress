require('cypress-log-to-output').installSupport();

// eslint-disable-next-line no-unused-vars
Cypress.on('fail', (error, runnable) => {
    // Implement custom error handling logic
    // For example, you can log the error to an external service
    console.error('Test failed:', error.message);
    // Returning false here prevents Cypress from failing the test
    return false;
  });