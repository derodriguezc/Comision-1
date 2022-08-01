/// <reference types="cypress" />
describe("Aserciones", () => {
let loginData;

    before("setear la data", () =>{
        cy.fixture("loginData").then((data) => {
            loginData = data;
        })
    })

    beforeEach("Deberia ingresar en la url y loguearse ", () => {
        cy.visit("/");
        cy.get("#registertoggle").dblclick();
        cy.get("#user").type(loginData.username);
        cy.get("#pass").type(loginData.password);
        cy.get('button[type="submit"]').click();
        cy.get("#waitslink").click();
        cy.get("[name='wait']").dblclick();
    });

    it("Esperas estaticas utilizando wait", () =>{
        cy.wait(15000)
        cy.get("#message").should("exist")
    })

    it("Esperas dinamicas utilizando timeouts", () =>{
        cy.get("#message", {timeout:15000}).should("exist")
    })

    it("Esperas dinamicas utilizando timeouts", () =>{
        cy.get("#message", {timeout:10000}).should("have.css", "color", "rgb(51, 255, 255)")
    })

    it("Esperas dinamicas utilizando timeouts con asersiones", () =>{
        cy.get("#message", {timeout:15000}).should("have.css", "color", "rgb(51, 255, 255)")
    })

    it('Deberia esperar que el circulo desaparezca', () => {
        cy.get("[role='progressbar']", {timeout:10000}).should("not.exist")
    });

    it("Esperas dinamicas utilizando timeouts", () =>{
        cy.get("#colorChangeMessage", {timeout:10000}).should("exist")
        cy.get("#colorChangeMessage", {timeout:5000}).should("not.exist")
    });

    it.only("Esperar que elemento progressBar desaparezca utilizando comands", () =>{
        cy.esperaProgressBar();
        cy.get("#message").should("exist");
    });

});
