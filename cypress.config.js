const { defineConfig } = require('Cypress')
//const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseApiUrl: 'https://653c0826d5d6790f5ec7c664.mockapi.io/'
  },
})