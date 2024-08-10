/// <reference types="Cypress" />

const faker = require('faker-br')

describe('Validation of routes Student', () => {
	context('POST route validation', () => {
		it('return status ok to create student', () => {
			var name = faker.name.firstName() + ' ' + faker.name.lastName()
			var email = faker.internet.email()
			var birthdate = '1998-12-20'
			var academic_record = faker.random.number()
			var cpf = faker.br.cpf()
			cy.postStudentsInTheCadastre(name, email, birthdate, academic_record, cpf).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.statusText).to.eq('Created')
				expect(response.body.name).eq(name)
				expect(response.body.birthdate).eq(birthdate)
				expect(response.body.email).eq(email)
				expect(response.body.birthdate).eq(birthdate)
				expect(response.body.academic_record).eq(academic_record)
				expect(response.body.cpf).eq(cpf)
				expect(response.body.createdAt).not.be.empty
				var id = response.body.id
				cy.deleteStudentInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.body.id).eq(id)
				})
			})
		})
	})
	context('GET route validation', () => {
		it('return status ok for students list in the cadastre', () => {
			cy.getStudentsInTheCadastre().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.statusText).to.eq('OK')
				expect(response.body).not.null
				expect(response.body[0].email).not.empty
				expect(response.body[0].id).not.empty
			})
		})
		it('return status ok for students list in the cadastre by ID', () => {
			cy.getStudentsInTheCadastre().then((response) => {
				var id = response.body[0].id
				cy.getStudentInTheCadastreByID(id).then((response) => {
					expect(response.status).to.eq(200)
					expect(response.statusText).to.eq('OK')
					expect(response.body.email).not.empty
					expect(response.body.id).not.empty
				})
			})
		})
	})
	context('DELETE route validation', () => {
		it('return status ok to delete student by ID', () => {
			var name = faker.name.firstName() + ' ' + faker.name.lastName()
			var email = faker.internet.email()
			var birthdate = '1998-12-20'
			var academic_record = faker.random.number()
			var cpf = faker.br.cpf()
			cy.postStudentsInTheCadastre(name, email, birthdate, academic_record, cpf).then((response) => {
				expect(response.status).to.eq(201)
				var id = response.body.id
				cy.deleteStudentInTheCadastreByID(id).then((response) => {
					expect(response.body.name).eq(name)
					expect(response.body.birthdate).eq(birthdate)
					expect(response.body.email).eq(email)
					expect(response.body.birthdate).eq(birthdate)
					expect(response.body.academic_record).eq(academic_record)
					expect(response.body.cpf).eq(cpf)
				})
			})
		})
	})
})