// describe('Ricky and Morty', () => {
//     it('Ver a Rick Sanchez', () => {
//         cy.intercept('GET', '**/page - data/**').as('docu')
//         cy.visit('https://rickandmortyapi.com')
//         //cy.get(':nth-child(1) > .characterCard__ContentWrapper-sc-1ejywvi-2').click()
//         cy.wait('@docu').then((interception) => {
//             expect(interception.response.statusCode).to.eq(200)
//         })
//     })
// });


it('Debe encontrar Mortys vivos', () => {
    cy.request('GET', 'https://rickandmortyapi.com/api/character?name=morty&status=alive')
        .then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.info.count).to.eq(34)  // hay 34 Mortys vivos

            // Verificamos que todos los resultados cumplan el filtro
            response.body.results.forEach(personaje => {
                expect(personaje.name.toLowerCase()).to.include('morty')
                expect(personaje.status).to.eq('Alive')
            })

        })
})
