/// <reference types="Cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('access to the base url {string}', function (device) {
	cy.loginPageCadastro(device)
})