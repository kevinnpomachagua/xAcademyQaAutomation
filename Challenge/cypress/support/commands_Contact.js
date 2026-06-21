// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("index", () => {
    cy.visit('https://automationintesting.online/')
    cy.url().should('include', 'online')
});


Cypress.Commands.add("contact", (contactName, contactEmail, contactPhone, contactSubject, contactDescription) => {
    cy.get('.nav-link[href="/#contact"]').click()
    if (contactName) {
        cy.get('[data-testid="ContactName"]').type(contactName)
    }
    if (contactEmail) {
        cy.get('[data-testid="ContactEmail"]').type(contactEmail)
    }
    if (contactPhone) {
        cy.get('[data-testid="ContactPhone"]').type(contactPhone)
    }
    if (contactSubject) {
        cy.get('[data-testid="ContactSubject"]').type(contactSubject)
    }
    if (contactDescription) {
        cy.get('[data-testid="ContactDescription"]').type(contactDescription)
    }
    cy.get('.d-grid > .btn').click()
});

Cypress.Commands.add("verificarDatosExito", (name, subject) => {
    cy.get('#contact .card-body').within(() => {
        cy.contains(`Thanks for getting in touch ${name}!`).should('be.visible')
        cy.contains("We'll get back to you about").should('be.visible')
        cy.contains(subject).should('be.visible')
        cy.contains("as soon as possible.").should('be.visible')
    })
})

Cypress.Commands.add("verificarDatosError", (expectedAlerts) => {
    expectedAlerts.forEach(alert => {
        cy.get('.alert-danger').contains(alert).should('be.visible')
    })
})
