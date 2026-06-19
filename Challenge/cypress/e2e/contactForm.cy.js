Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('Challenge Grupo 12', () => {

    beforeEach(() => {
        cy.index()
    })

    it('completarContact', () => {
        cy.fixture('datos.json').then((data) => {
            const name = data.formulario.name
            const email = data.formulario.email
            const phone = data.formulario.phone
            const subject = data.formulario.subject
            const message = data.formulario.message
            cy.contact(name, email, phone, subject, message)
        })
    })
})