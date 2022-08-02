/// <reference types="cypress" />

describe('Screenshots', () => { 

    xit("Deberia sacar una foto de pantalla completa", () =>{
        cy.visit("/")
        cy.screenshot({capture: 'fullPage'})
    })

    it("Deberia sacar una foto del formulario de reigstro", () =>{
        cy.visit("/")
        cy.get('.css-1plfviw').screenshot("screenshot/foto-registro")
    })
 })