const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  e2e: {
    baseUrl: `https://www.saucedemo.com/`,
    defaultCommandTimeout: 5000,
    viewportHeight : 1080,
    viewportWidth : 1920,
    retries: {
      "runMode" : 1,
      "openMode" : 1
    },
    setupNodeEvents(on, config) {
    },
  },
});