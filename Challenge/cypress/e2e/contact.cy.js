Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Challenge Grupo 12 - Contact Form', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP01: Envío exitoso (Campos Nominales) (Happy Path)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP01')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP02: Envío exitoso (Límites Inferiores)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP02')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP03: Envío exitoso (Límites Superiores)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP03')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP04: Envío fallido (Todos los campos vacíos) (Negative Test)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP04')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP05: Envío fallido (Name vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP05')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP06: Envío fallido (Email vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP06')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP07: Envío fallido (Phone vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP07')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP08: Envío fallido (Subject vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP08')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP09: Envío fallido (Message vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP09')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP10: Envío fallido (Phone - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP10')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP11: Envío fallido (Phone - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP11')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP12: Envío fallido (Subject - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP12')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP13: Envío fallido (Subject - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP13')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP14: Envío fallido (Message - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP14')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP15: Envío fallido (Message - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP15')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP16: Envío fallido (Formato Email Inválido)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP16')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })
})
