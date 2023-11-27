const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
    viewportHeight: 1080,
    viewportWidth: 1980,
    baseUrl: "https://app.outpostchess.com/#/login",
    chromeWebSecurity: false,
    pageLoadTimeout: 12000,
    env: {
     // landingPage: "https://outpostchess.com/",
      signUpPage: "https://app.outpostchess.com/#/login"
    }
  },
});
