const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 5000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: `https://saucedemo.com/`,
    defaultCommandTimeout: 5000,
    viewportHeight : 1080,
    viewportWidth : 1920,
    retries: {
      "runMode" : 0,
      "openMode" : 0
    }
  }
});