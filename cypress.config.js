const { config } = require("dotenv");
const { resolve } = require("path");
const { defineConfig } = require("cypress");

config();

const localEnv = process.env.LOCAL_ENV;
const localDomain = process.env.LOCAL_DOMAIN;

if (localEnv && localDomain) {
  const envFilePath = resolve(process.cwd(), `config/${localEnv}.${localDomain}.env`);
  config({ path: envFilePath });
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    json: true,
    embededScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    videoOnFailOnly: true,
  },
  e2e: {
    baseUrl: process.env.BASE_URL,
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ['**/*.cy.js'],
    chromeWebSecurity: false,
    retries: {
      runMode: 1,
      openMode: 1
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      username: process.env.VALID_USERNAME,
      password: process.env.VALID_PASSWORD,
    },
  },
});
