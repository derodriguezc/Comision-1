
describe('Hooks', () => { 
let loginData;
    before("deberia setear la data correctamente", function() {
        cy.fixture("loginData").then(data => loginData = data)
        })
    

    beforeEach("Deberia ingresar en la url y loguearse ", function() {
        cy.visit("/");
        cy.get("#registertoggle").dblclick();
        cy.get("#user").type(loginData.username);
        cy.get("#pass").type(loginData.password);
        cy.get('button[type="submit"]').click();
    });

    
    it('Deberia ingresar en "To do List"', () => {
        cy.get("#todolistlink").click();
    });

    it('Deberia ingresar en "Alerts"', () => {
        cy.get("#alertslink").click();
    });
});