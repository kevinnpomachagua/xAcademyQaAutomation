describe('SauceDemo - Sin comandos personalizados', () => {

    beforeEach(() => {
        //Login
        cy.login('standard_user', 'secret_sauce')
    })


    it('Compra completa con un producto', () => {

        // Agregar producto al carrito
        cy.agregarAlCarrito('Sauce Labs Backpack')
        cy.get('.shopping_cart_badge').should('have.text', '1')

        // Ir al carrito
        cy.irAlCarrito()
        cy.get('.cart_item').should('have.length', 1)
        //cy.wait(5000)

        // Iniciar checkout
        cy.completarCheckout('Juan', 'Dudoso', '5000')

        // Confirmar pedido
        cy.confirmarPedido()
    })


    it('Compra completa con dos productos', () => {

        // Login 
        //cy.login('standard_user', 'secret_sauce')

        // Agregar dos productos
        cy.agregarAlCarrito('Sauce Labs Backpack')
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.agregarAlCarrito('Sauce Labs Bike Light')
        cy.get('.shopping_cart_badge').should('have.text', '2')

        // Ir al carrito
        cy.irAlCarrito()
        cy.get('.cart_item').should('have.length', 2)

        // Iniciar checkout
        cy.completarCheckout('Juan', 'Perez', '5000')


        // Confirmar pedido
        cy.confirmarPedido()

    })

    // Logout - Tarea para la casa
    it.only('Logout exitoso después de una compra', () => {

        // Login 
        //cy.login('standard_user', 'secret_sauce')

        // Agregar producto y completar compra

        cy.agregarAlCarrito('Sauce Labs Backpack')
        cy.irAlCarrito()
        cy.completarCheckout('Juan', 'Perez', '5000')
        cy.confirmarPedido()


        // Logout
        cy.logout()

    })

})