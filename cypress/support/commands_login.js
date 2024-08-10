/// <reference types="Cypress" />

Cypress.Commands.add('postUsersInTheCadastre', (email, password) => {
	cy.request({
		method: 'POST',
		url: Cypress.config('baseApiUrl') + 'api/v1/login',
		body: {
			email: email,
			password: password
		},
		failOnStatusCode: false
	})
})

Cypress.Commands.add('getUsersInTheCadastre', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseApiUrl') + 'api/v1/login',
		failOnStatusCode: false
	})
})

Cypress.Commands.add('getUsersInTheCadastreByID', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseApiUrl') + `api/v1/login/${id}`,
		failOnStatusCode: false
	})
})

Cypress.Commands.add('deleteUsersInTheCadastreByID', (id) => {
	cy.request({
		method: 'DELETE',
		url: Cypress.config('baseApiUrl') + `api/v1/login/${id}`,
		failOnStatusCode: false
	})
})