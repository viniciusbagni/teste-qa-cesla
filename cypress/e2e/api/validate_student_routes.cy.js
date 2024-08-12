/// <reference types="Cypress" />

const fakerBR = require('faker-br')
import { faker } from '@faker-js/faker'

describe('Validation of routes Student', () => {
	context('POST route validation', () => {
		it('return status ok to create student', () => {
			var name = fakerBR.name.firstName() + ' ' + fakerBR.name.lastName()
			var email = fakerBR.internet.email()
			var birthdate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' });
			var formattedBirthdate = birthdate.toISOString().split('T')[0]
			var academic_record = fakerBR.random.number()
			var cpf = fakerBR.br.cpf()
			cy.postStudentsInTheCadastre(name, email, formattedBirthdate, academic_record, cpf).then((response) => {
				expect(response.status).to.eq(201)
				expect(response.statusText).to.eq('Created')
				expect(response.body.name).eq(name)
				expect(response.body.birthdate).eq(formattedBirthdate)
				expect(response.body.email).eq(email)
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
		it('return wrong url status', () => {
			cy.getStudentsInTheCadastreWrongUrl().then((response) => {
				expect(response.status).to.eq(404)
				expect(response.statusText).to.eq('Not Found')
			})
		})
	})
	context('DELETE route validation', () => {
		it('return status ok to delete student by ID', () => {
			var name = fakerBR.name.firstName() + ' ' + fakerBR.name.lastName()
			var email = fakerBR.internet.email()
			var birthdate = faker.date.birthdate({ min: 18, max: 80, mode: 'age' });
			var formattedBirthdate = birthdate.toISOString().split('T')[0]
			var academic_record = fakerBR.random.number()
			var cpf = fakerBR.br.cpf()
			cy.postStudentsInTheCadastre(name, email, formattedBirthdate, academic_record, cpf).then((response) => {
				expect(response.status).to.eq(201)
				var id = response.body.id
				cy.deleteStudentInTheCadastreByID(id).then((response) => {
					expect(response.body.name).eq(name)
					expect(response.body.birthdate).eq(formattedBirthdate)
					expect(response.body.email).eq(email)
					expect(response.body.academic_record).eq(academic_record)
					expect(response.body.cpf).eq(cpf)
				})
			})
		})
		it('return status for error when deleting student due to non-existent ID', () => {
			var id = fakerBR.random.number({ min: 200 })
			cy.deleteStudentInTheCadastreByID(id).then((response) => {
				expect(response.status).to.eq(404)
				expect(response.statusText).to.eq('Not Found')
			})
		})
	})
})