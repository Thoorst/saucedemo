const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://www.saucedemo.com/`,
    defaultCommandTimeout: 60000,
    retries: {
      "runMode" : 1,
      "openMode" : 1
    },
    setupNodeEvents(on, config) {
    },
  },
});