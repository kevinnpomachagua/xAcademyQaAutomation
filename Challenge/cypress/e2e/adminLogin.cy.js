Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Login Tests', () => {

    beforeEach(() => {
        cy.index()
    })

    it('adminLogin', () => {
        cy.fixture('datos.json').then((data) => {
            const user = data.credenciales.user
            const pass = data.credenciales.pass
            cy.adminLogin(user, pass)
        })
    })
})