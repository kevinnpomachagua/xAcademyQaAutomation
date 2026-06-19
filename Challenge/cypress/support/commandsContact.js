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
    cy.get('[data-testid="ContactName"]').type(contactName)
    cy.get('[data-testid="ContactEmail"]').type(contactEmail)
    cy.get('[data-testid="ContactPhone"]').type(contactPhone)
    cy.get('[data-testid="ContactSubject"]').type(contactSubject)
    cy.get('[data-testid="ContactDescription"]').type(contactDescription)
    cy.get('.d-grid > .btn').click()
});
