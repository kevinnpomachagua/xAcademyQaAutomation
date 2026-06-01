describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Login exitoso con usuario estándar', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })
    it('Login con contraseña incorrecta', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce2')
        cy.get('[data-test="login-button"]').click()

        cy.get('.error-message-container')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Login con campos vacíos', () => {
        cy.get('[data-test="login-button"]').click()

        cy.get('.error-message-container')
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username is required')
    })

    it('T4 Login con usuario bloqueado (locked_out_user)', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('T5 Logout desde el menú hamburguesa', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        cy.get('.bm-burger-button').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.url().should('include', 'saucedemo.com')
        cy.get('[data-test="username"]').should('have.value', '')
        cy.get('[data-test="password"]').should('have.value', '')
    })
})
