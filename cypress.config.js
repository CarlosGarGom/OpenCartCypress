const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
 
  allureCypress(on,{
    resultsDir: './allure-results'
  });
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Open Cart Allure Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "http://opencart.abstracta.us",
    chromeWebSecurity:false,
    viewportWidth: 1000,
    viewportHeight: 600,
    specPattern: "cypress/e2e/features/**/*.feature",
    watchForFileChanges: false,
    setupNodeEvents,
  },
});
