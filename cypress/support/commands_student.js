/// <reference types="Cypress" />

Cypress.Commands.add('postStudentsInTheCadastre', (name, email, birthdate, academic_record, cpf) => {
	cy.request({
		method: 'POST',
		url: Cypress.config('baseApiUrl') + 'api/v1/student',
		body: {
			name: name,
			email: email,
			birthdate: birthdate,
			academic_record: academic_record,
			cpf: cpf
		},
		failOnStatusCode: false
	})
})

Cypress.Commands.add('getStudentsInTheCadastre', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseApiUrl') + 'api/v1/student',
		failOnStatusCode: false
	})
})

Cypress.Commands.add('getStudentInTheCadastreByID', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseApiUrl') + `api/v1/student/${id}`,
		failOnStatusCode: false
	})
})

Cypress.Commands.add('deleteStudentInTheCadastreByID', (id) => {
	cy.request({
		method: 'DELETE',
		url: Cypress.config('baseApiUrl') + `api/v1/student/${id}`,
		failOnStatusCode: false
	})
})