// ***********************************************
// Comandos personalizados para el módulo de administración
// ***********************************************

Cypress.Commands.add("index", () => {
    cy.visit('https://automationintesting.online/')
    cy.url().should('include', 'online')
});

Cypress.Commands.add("loginAdmin", (user, pass) => {
    cy.get('.nav-link[href="/admin"]').click()
    cy.url().should('include', '/admin')
    if (user) {
        cy.get('#username').type(user)
    }
    if (pass) {
        cy.get('#password').type(pass)
    }
    cy.get('#doLogin').click()
});

Cypress.Commands.add("verificarLoginExito", () => {
    // Verificar que hayamos ingresado al panel de administración (se muestra la opción de Logout)
    cy.url().should('include', '/admin')
    cy.contains('Logout').should('be.visible')
});

Cypress.Commands.add("verificarLoginFallido", () => {
    // Verificar que seguimos en la pantalla de inicio de sesión (el botón de Login sigue visible)
    cy.get('#doLogin').should('be.visible')
    
    // Verificar que aparezca el mensaje de alerta "Invalid credentials"
    cy.contains('Invalid credentials').should('be.visible')
});

Cypress.Commands.add("crearHabitacion", (roomName, type, accessible, price, features) => {
    if (roomName) {
        cy.get('#roomName').type(roomName)
    }
    if (type) {
        cy.get('#type').select(type)
    }
    if (accessible) {
        cy.get('#accessible').select(accessible)
    }
    if (price) {
        cy.get('#roomPrice').type(price)
    }
    
    // Marcar las comodidades (features) seleccionadas si se especifican
    if (features) {
        if (features.wifi) cy.get('#wifiCheckbox').check()
        if (features.tv) cy.get('#tvCheckbox').check()
        if (features.radio) cy.get('#radioCheckbox').check()
        if (features.refreshments) cy.get('#refreshCheckbox').check()
        if (features.safe) cy.get('#safeCheckbox').check()
        if (features.views) cy.get('#viewsCheckbox').check()
    }
    
    cy.get('#createRoom').click()
});

Cypress.Commands.add("eliminarHabitacion", (roomName) => {
    // Buscar la fila correspondiente y hacer click en el botón/icono de eliminación (cruz roja)
    cy.contains('.row', roomName).find('span.glyphicon-remove, span.roomDelete, span.fa-trash').first().click()
});

Cypress.Commands.add("verificarDetallesHabitacion", (roomName) => {
    // Click en la habitación correspondiente en la tabla
    cy.contains(roomName).click()
    cy.url().should('include', '/room/')
    cy.contains('Room: ' + roomName).should('be.visible')
});

Cypress.Commands.add("editarHabitacionPrecio", (newPrice) => {
    cy.contains('button', 'Edit').click()
    cy.get('#roomPrice').clear().type(newPrice)
    cy.get('#update').click()
});

Cypress.Commands.add("cancelarEdicionPrecio", (newPrice) => {
    cy.contains('button', 'Edit').click()
    cy.get('#roomPrice').clear().type(newPrice)
    cy.get('#cancelEdit').click()
});

Cypress.Commands.add("verificarReporteCalendario", () => {
    cy.get('#reportLink').click()
    cy.url().should('include', '/report')
    cy.get('.rbc-calendar').should('be.visible')
});

Cypress.Commands.add("navegarCalendario", () => {
    cy.contains('Next').click()
    cy.contains('Back').click()
    cy.contains('Today').click()
});

Cypress.Commands.add("actualizarBranding", (name, contactPhone) => {
    cy.get('#brandingLink').click()
    cy.url().should('include', '/branding')
    if (name) {
        cy.get('#name').clear().type(name)
    }
    if (contactPhone) {
        cy.get('#contactPhone').clear().type(contactPhone)
    }
    cy.get('#updateBranding').click()
});

Cypress.Commands.add("verificarDetalleMensaje", () => {
    cy.get('.nav-link[href="/admin/message"]').click()
    cy.url().should('include', '/message')
    
    // Hacer click en el asunto del primer mensaje ("Booking enquiry") para abrir los detalles
    cy.contains('Booking enquiry').click()
    cy.contains('From:').should('be.visible')
    cy.contains('Close').should('be.visible')
});

Cypress.Commands.add("cerrarDetalleMensaje", () => {
    cy.contains('Close').click()
    cy.contains('From:').should('not.exist')
});

Cypress.Commands.add("logoutAdmin", () => {
    // Esperar a que la página esté estable antes de hacer logout
    cy.wait(1000)
    cy.contains('Logout').click()
    cy.url().should('not.include', '/admin')
});
