/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "email": "clinica@gmail.com",
    "senha": "4321",
    "api_login": "https://vollmecypress-server-1.onrender.com/login",
    "api_clinica": "https://vollmecypress-server-1.onrender.com/clinica",
    "api_especialista": "https://vollmecypress-server-1.onrender.com/especialista",
    "requestMode": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    projectId: "nxkyh7",
    
    defaultCommandTimeout: 60000

  },


});
