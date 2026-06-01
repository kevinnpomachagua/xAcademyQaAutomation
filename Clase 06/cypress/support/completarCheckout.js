Cypress.Commands.add('completarCheckout', (nombre, apellido, codigoPostal) => {
    // Iniciar checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Completar formulario
    cy.get('[data-test="firstName"]').type(nombre)
    cy.get('[data-test="lastName"]').type(apellido)
    cy.get('[data-test="postalCode"]').type(codigoPostal)
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')

})