describe('Hooks', () => { 

    before("deberia ejecutarse una unica vez", () =>{
        cy.log("Before ejectuandose");
    });

    beforeEach("deberia ejecutarse antes de cada test", () =>{
        cy.log("BeforeEach ejectuandose");
    });
    
    it('primer test', () => {
        cy.log("Primer test")
    });

    it('Segundo test', () => {
        cy.log("Segundo test")
    });

    it('Tercer test', () => {
        cy.log("Tercer test");
    });

    afterEach("deberia ejecutarse despues de cada test", () =>{
        cy.log("AfterEach ejectuandose");
    })

    after("deberia ejecutarse al finalizar todos los test", () =>{
        cy.log("After ejectuandose");
    })
 })