//Para utilizar la funcion children debemos partir de un elemento web conocido (el padre)
//para luego encontrar a su hijo.

it("Deberia encontrar al hijo satisfactoriamente", () =>{
    cy.visit('')
    cy.get('[role="group"]').children('input')
    cy.get('[role="group"]').children('label')
})

//Para utilizar la funcion parent debemos partir de un elemento web conocido (el hijo)
//para luego encontrar a su padre.
it("Deberia encontrar al padre satisfactoriamente", () =>{
    cy.visit('')
    cy.get("input#user").parent('[role="group"]')
})

