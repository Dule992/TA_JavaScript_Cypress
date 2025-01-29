# cypress-js-project

This project demonstrates the implementation of Cypress for end-to-end testing using JavaScript.

## Project Structure

The project is organized as follows:
- `cypress/`: Contains all Cypress-related files and folders.
  - `e2e/`: Contains end-to-end test files.
  - `fixtures/`: Contains test data files.
  - `support/`: Contains support files and custom commands.
- `pages/`: Contains page object files for different pages of the application.
- `cypress.config.js`: Cypress configuration file.
- `package.json`: Project dependencies and scripts.

## Setup

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cypress-js-project.git
   cd cypress-js-project

2. Install the dependencies:
npm install

## Scripts

- build: `npm run build`

- lint: `npm run lint`

- lint:fix: `npm run lint:fix`

- e2e:chrome: `npm run e2e:chrome`

- cy:open: `npm run cy:open`

- cy:parallel: `npm run cy:parallel`

## Env file

The project uses environment variables to manage sensitive data such as usernames and passwords. You can set these variables in a .env file at the project's root.

Example:
- username=your-username
- password=your-password
- BASE_URL=https://your-base-url.com
