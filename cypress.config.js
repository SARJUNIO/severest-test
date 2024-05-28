const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/',
    video: true,
    chromeWebSecurity: false,
    projectId: "rbkfh4",
    env: {
      local: 'https://localhost/3000/',
      prod: 'https://serverest.dev/'
    },
  },
});
