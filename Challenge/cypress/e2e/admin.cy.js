Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Challenge Grupo 12 - Pruebas del Módulo de Administración', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP01: Iniciar sesión exitosamente con credenciales correctas', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP01')
            // Ingresar usuario correcto y clave correcta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginExito()
        })
    })

    it('CP02: Intentar iniciar sesión con un usuario incorrecto y clave correcta', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP02')
            // Ingresar usuario incorrecto y clave correcta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP03: Intentar iniciar sesión con un usuario correcto y clave incorrecta', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP03')
            // Ingresar usuario correcto y clave incorrecta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP04: Intentar iniciar sesión dejando los campos vacíos', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP04')
            // Dejar campos vacíos al intentar iniciar sesión
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP05: Crear una habitación exitosamente (Happy Path)', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            
            const cp = data.roomCases.find(test => test.id === 'CP05')
            // Rellenar formulario y crear la habitación
            cy.crearHabitacion(cp.data.roomName, cp.data.type, cp.data.accessible, cp.data.roomPrice, cp.data.features)
            
            // Verificar que la habitación recién creada sea visible en la lista
            cy.contains('.row', cp.data.roomName).should('be.visible')
        })
    })

    it('CP06: Intentar crear una habitación dejando los campos vacíos', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            
            const cp = data.roomCases.find(test => test.id === 'CP06')
            // Intentar crear la habitación sin rellenar campos
            cy.crearHabitacion(cp.data.roomName, cp.data.type, cp.data.accessible, cp.data.roomPrice, cp.data.features)
            
            // Verificar que el mensaje de alerta sobre la creación fallida sea visible
            cy.contains(cp.expectedAlert).should('be.visible')
        })
    })

    it('CP08: Visualizar detalles y reservas de habitación', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            
            const cp = data.roomDetailCases.find(test => test.id === 'CP08')
            // Visualizar detalles de la habitación
            cy.verificarDetallesHabitacion(cp.roomName)
        })
    })

    it('CP09: Editar detalles de habitación exitosamente', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            
            const cp = data.roomDetailCases.find(test => test.id === 'CP09')
            // Navegar a detalles de la habitación
            cy.verificarDetallesHabitacion(cp.roomName)
            // Cambiar precio de la habitación
            cy.editarHabitacionPrecio(cp.newPrice)
            
            // Verificar que el nuevo precio actualizado se visualice
            cy.contains(cp.newPrice).should('be.visible')
        })
    })

    it('CP11: Visualizar reporte de reservas en calendario', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Verificar visualización del calendario
            cy.verificarReporteCalendario()
        })
    })

    it('CP12: Navegación del calendario (Today/Back/Next)', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Navegar a la pestaña de reportes
            cy.verificarReporteCalendario()
            // Probar navegación temporal del calendario
            cy.navegarCalendario()
        })
    })

    it('CP13: Actualizar información de branding exitosamente', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            
            const cp = data.brandingCases.find(test => test.id === 'CP13')
            // Actualizar branding del hotel
            cy.actualizarBranding(cp.name, cp.contactPhone)
        })
    })

    it('CP14: Visualizar lista de mensajes y abrir detalle', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Abrir el detalle del primer mensaje disponible
            cy.verificarDetalleMensaje()
        })
    })

    it('CP15: Cerrar detalle de mensaje', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Abrir detalle del mensaje
            cy.verificarDetalleMensaje()
            // Cerrar el modal de detalles
            cy.cerrarDetalleMensaje()
        })
    })

    it('CP16: Cierre de sesión exitoso', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Cerrar la sesión
            cy.logoutAdmin()
        })
    })
})