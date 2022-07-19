describe('Nuestro primer suite de pruebas', () => {
    var profesor = "Fabrizio"
    it('Nuestro primer test', () => {
        cy.log(`Primer test con ${profesor}`)
    })

    it("Nuestro segundo test", () => {
        cy.log("Segundo test")
    })
    
    it.only('Corremos este test solamente', () => {
        cy.log("Solo corremos este test")
    });
})

//Profesor no se puede leer la variable profesor ya que este test esta por fuera del describe
it.skip("Nuestro tercer test", () => {
    cy.log(`Tercer test con ${profesor} Otranto`)
})

xit("Nuestro tercer test", () => {
    cy.log(`Tercer test con ${profesor} Otranto`)
})