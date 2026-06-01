describe('Carrito', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })

    it('T10 Agregar un producto al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')

        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', 1)
    })

    it('T11 Agregar múltiples productos y verificar contador', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', 3)

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('have.text', 'Remove')
    })

    it('T12 Eliminar un producto desde la página del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', 2)

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', 1)

    })








})