describe('Registro', () => { 
    it("Deberia registrase satisfactoriamente", () =>{
        var numero = Math.floor(Math.random() * 100)
        cy.visit("")
        cy.get('#user').type(`FabryOtranto${numero}`)
        cy.get('#pass').type("123asd!")
        cy.get('[value="Male"]').check({ force: true })
        cy.get('#day').select(30)
        cy.get('#month').select('October')
        cy.get('#year').select("1996")
        cy.get('.chakra-button').click()
        cy.get('#todolistlink').should('exist')
    })

    it.only("Deberia registrase satisfactoriamente con datos validos", () =>{
        var numero = Math.floor(Math.random() * 100)
        cy.visit('')
        cy.get('button')
        cy.get('[type="submit"]').should("exist")
    })
 })
