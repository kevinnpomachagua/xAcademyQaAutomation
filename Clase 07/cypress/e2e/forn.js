describe('Inventario - Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://cypress-playground.vercel.app/forms')
    })

    it('Formulario buenas practicas', () => {
        cy.fixture('formRegistro.json').then((data) => {
            const input = data.registroValido
            cy.get('#bp-name').type(input.nombre)
            cy.get('#bp-email').type(input.email)
            cy.get('#bp-comments').type(input.comentarios)
            cy.get('#bp-country').select(input.pais)
            cy.get('#bp-gender').select(input.genero)
            cy.get('#bp-hobbies').select(input.intereses)
            cy.get('#bp-experience').type(input.experiencia)
            cy.get('#bp-dob').type(input.fechaNacimiento)
            cy.get('#bp-color').select(input.colorFavorito)
            cy.get('#bp-submit').click()



            cy.get('[data-testid="bp-name"]').type('Kevinn Zhamir Pomachagua Vilchez')
            cy.get('[data-testid="bp-email"]').type('kevinn.pomachagua@gmail.com')
            cy.get('[data-testid="bp-comments"]').type('Comentario de prueba')
            cy.get('[data-testid="bp-country"]').select('Argentina').should('have.value', 'AR')
            cy.get('[data-testid="bp-gender-male"]').check().should('be.checked')
            cy.get('[data-testid="bp-interest-testing"]').check().should('be.checked')
            cy.get('[data-testid="bp-experience"]').then(($input) => {
                const el = $input[0];
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLInputElement.prototype,
                    'value'
                ).set;
                nativeInputValueSetter.call(el, 9);
                el.dispatchEvent(new Event('input', { bubbles: true }));
            }).should('have.value', '9')
            cy.get('[data-testid="bp-birthdate"]').type('1992-05-26').should('have.value', '1992-05-26')











        })
    })




    it('Ordenar Productos por precio (menor a mayor)', () => {

    })

})