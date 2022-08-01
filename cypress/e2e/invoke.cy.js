/// <reference types="cypress" />
describe('Invoke fixture', () => { 

    it("Deberia utilizar invoke para hacer el boton visible", () =>{
    var text = "texto"
    cy.visit("/")
    cy.get("span").contains("Iniciá sesión").dblclick()
    cy.get("#user").type("pushingit")
    cy.get("#pass").type("123456!")
    cy.get("button[type='submit']").click()
    cy.get("h2:nth-child(1)").should('have.text', 'Pushing IT')
    cy.get("#formutilslink").click();
    cy.get("#showHiddenInput").click();
    cy.get("#input").type(text)
    cy.get("#btnnHidden").invoke("show").should("be.visible").click({})
    cy.get("#text").should("have.text", text)
})

it.only("Deberia hacer click en un boton invisible", () =>{
    var text = "texto"
    cy.visit("/")
    cy.get("span").contains("Iniciá sesión").dblclick()
    cy.get("#user").type("pushingit")
    cy.get("#pass").type("123456!")
    cy.get("button[type='submit']").click()
    cy.get("h2:nth-child(1)").should('have.text', 'Pushing IT')
    cy.get("#formutilslink").click();
    cy.get("#showHiddenInput").click();
    cy.get("#input").type(text)
    cy.get("#btnnHidden").click({ force: true })
    cy.get("#text").should("have.text", text)
    cy.get("#text").invoke('text').then((texto) => {
        cy.log(texto)
      })
})

it("Deberia validar que el boton es invisible", () =>{
    cy.visit("/");
    cy.get("span").contains("Iniciá sesión").dblclick();
    cy.get("#user").type("pushingit");
    cy.get("#pass").type("123456!");
    cy.get("button[type='submit']").click();
    cy.get("h2:nth-child(1)").should('have.text', 'Pushing IT');
    cy.get("#formutilslink").click();
    cy.get("#showHiddenInput").click();
    cy.get("#btnnHidden").invoke("attr", "style").should("contains", "display: none");
})

it("Deberia validar que el boton es visible luego de utilizar la funcion show", () =>{
    cy.visit("/");
    cy.get("span").contains("Iniciá sesión").dblclick();
    cy.get("#user").type("pushingit");
    cy.get("#pass").type("123456!");
    cy.get("button[type='submit']").click();
    cy.get("h2:nth-child(1)").should('have.text', 'Pushing IT');
    cy.get("#formutilslink").click();
    cy.get("#showHiddenInput").click();
    cy.get("#btnnHidden")
    .invoke("attr", "style").should("contains", "display: none")
    .invoke("show").should("be.visible")
    .invoke("attr", "style").should("equal", "")
})

it("invoke text", () => {
    cy.get("#text").invoke('text').then((secText) => {
      cy.log(secText)
    })

})
 })