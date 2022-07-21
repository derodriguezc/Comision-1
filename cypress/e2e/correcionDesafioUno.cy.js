describe('Desafio 1', () => {

    it('Deberia crear una tarea y luego completarla', () => {
        var numero = Math.floor(Math.random() * 100)
        cy.visit("/")
        cy.get('#user').type(`desafio${numero}`)
        cy.get('#pass').type('123456!')
        cy.get('[value="Female"]').check({ force: true })
        cy.get('#day').select(9)
        cy.get('#month').select('March')
        cy.get('#year').select('1998')
        cy.get('.chakra-button').click()
        cy.get('#todolistlink').click()
        cy.get('#task').type('Prueba Primer tarea')
        cy.get('#sendTask').click()
        cy.get('#task').type('Prueba Segunda tarea')
        cy.get('#sendTask').click()
        cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').click()
    });

    it.skip('Deberia crear tres tareas y completar la ultima', () => {
        cy.visit("https://pushing-front.vercel.app/")
        cy.get('#user').type('desafio1')
        cy.get('#pass').type('contraseña*')
        cy.get('[value="Female"]').check({ force: true })
        cy.get('#day').select(9)
        cy.get('#month').select('March')
        cy.get('#year').select('1998')
        cy.get('.chakra-button').click()
        cy.get('#todolistlink').click()
        cy.get('#task').type('Prueba Primer tarea')
        cy.get('#sendTask').click()
        cy.get('#task').type('Prueba Segunda tarea')
        cy.get('#sendTask').click()
        cy.get('#task').type('Prueba tercer tarea')
        cy.get('#sendTask').click()
        cy.get(':nth-child(3) > .css-vuy1kp > .chakra-button').click()
    });
});