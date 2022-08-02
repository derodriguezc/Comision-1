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
    });

    it("Deberia comprobar que el titulo es 'Waits'", () =>{
        cy.get("#title").should('have.text', "Waits");
    });

    it("Deberia comprobar que el id es 'title'", () =>{
        cy.get("#title").should('have.id', "title");
    });

    it("Deberia comprobar la cantdad de elementos cuyo id es 'title'", () =>{
        cy.get("#title").should('have.length', "1");
    });

    it("Deberia comprobar que el largo de la palabra 'Waits' usando expect", () =>{
        cy.get("#title").invoke("text").then((texto) =>{
            expect(texto).is.equal("Waits").have.length("5");
        })
    });

    it("Deberia comprobar que el titulo es 'Waits' usando expect", () =>{
        cy.get("#title").invoke("text").then((texto) =>{
            expect(texto).have.length("5")
        })
    })

    it("Deberia comprobar el titulo 'Waits' usando assert", () =>{
        cy.get("#title").invoke("text").then((texto) =>{
            assert.equal(texto, "Waitss", `el texto ${texto} no es Waits`);
        })
    });

    it("deberia validar que es un string y tiene 5 caracteres", () =>{
        let title = "Waits"
        cy.get("#title")
        .invoke("text")
        .should("be.a", "string")
        .and("have.length", "5")
        .and("equal", title)
    })

    it("Deberia comprobar que el largo de la palabra 'Waits' usando expect y su cantidad de caracteres", () =>{
        cy.get("#title").invoke("text").then((texto) =>{
            expect(texto).is.equal("Waits").have.length("5");
        })
    });
})
