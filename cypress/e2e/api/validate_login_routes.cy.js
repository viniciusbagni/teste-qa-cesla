/// <reference types="Cypress" />

const fakerBR = require('faker-br')

describe('Validation of routes Login', () => {
	context('POST route validation', () => {
		it('return valid status to create user in the login authentication', () => {
			var email = fakerBR.internet.email()
			var password = fakerBR.internet.password()
			cy.postUsersInTheCadastre(email, password).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.statusText).to.eq('Created')
				expect(response.body).not.null
				expect(response.body.email).eq(email)
				expect(response.body.password).eq(password)
				expect(response.body.token).not.empty
				var id = response.body.id
				cy.deleteUsersInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.body.id).eq(id)
				})
			})
		})
		it('return valid status to create user in the login authentication', () => {
			var email = fakerBR.internet.email()
			var password = fakerBR.internet.password()
			cy.postUsersInTheCadastre(email, password).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.statusText).to.eq('Created')
				expect(response.body).not.null
				expect(response.body.email).eq(email)
				expect(response.body.password).eq(password)
				expect(response.body.token).not.empty
				var id = response.body.id
				cy.deleteUsersInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.body.id).eq(id)
				})
			})
		})
	})
	context('GET route validation', () => {
		it('return status ok for list users in login authentication', () => {
			cy.getUsersInTheCadastre().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.statusText).to.eq('OK')
				expect(response.body).not.null
				expect(response.body[0].email).not.empty
				expect(response.body[0].id).not.empty
				expect(response.body[0].password).not.empty
				expect(response.body[0].token).not.empty
			})
		})
		it('return status ok for list users in login authentication by ID', () => {
			cy.getUsersInTheCadastre().then((response) => {
				var id = response.body[0].id
				cy.getUsersInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.statusText).to.eq('OK')
					expect(response.body.email).not.empty
					expect(response.body.id).not.empty
					expect(response.body.password).not.empty
					expect(response.body.token).not.empty
				})
			})
		})
		it('return wrong url status', () => {
			cy.getUsersInTheCadastreWrongUrl().then((response) => {
				expect(response.status).to.eq(404)
				expect(response.statusText).to.eq('Not Found')
			})
		})
	})
	context('DELETE route validation', () => {
		it('return valid status for delete user by ID in the login authentication', () => {
			var email = fakerBR.internet.email()
			var password = fakerBR.internet.password()
			cy.postUsersInTheCadastre(email, password).then((response) => {
				expect(response.status).to.eq(201)
				var id = response.body.id
				cy.deleteUsersInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.statusText).to.eq('OK')
					expect(response.body.id).eq(id)
					expect(response.body.email).eq(email)
					expect(response.body.password).eq(password)
				})
			})
		})
		it('return status for error when deleting user due to non-existent ID', () => {
			var id = fakerBR.random.number({ min: 200 })
			cy.deleteUsersInTheCadastreByID(id).then((response) => {
				expect(response.status).to.eq(404)
				expect(response.statusText).to.eq('Not Found')
			})
		})
	})
})