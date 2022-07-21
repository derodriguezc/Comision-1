describe('Hooks', () => {
    let loginData;
    let tareaData;
    before("deberia setear la data correctamente", () => {
        cy.fixture("loginData").then((dataLogin) => {
            loginData = dataLogin
        })
        cy.fixture("tareas").then((dataTarea) => {
            tareaData = dataTarea
        })
    })

    beforeEach("Deberia ingresar en la url y loguearse ", () => {
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

    it('Deberia leer la informacion de tareaUno', () => {
        cy.log(tareaData.tareaUno)
    });
}); 