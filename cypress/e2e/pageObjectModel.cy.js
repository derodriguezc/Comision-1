/// <reference types="cypress" />
import { LoginPage } from "../support/pages/LoginPage"
import { HomePage } from "../support/pages/HomePage"
import { TodoListPage } from "../support/pages/TodoListPage"

describe('Page object model', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const todoListPage = new TodoListPage();
    let loginData;

    before("Setear la data", () => {
        cy.fixture("loginData").then(data => {
            loginData = data;
        })
    })

    beforeEach("Deberia ingresar al sistema", () => {
        cy.visit("/");
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(loginData.username);
        loginPage.escribirPassword(loginData.password);
        loginPage.clickLoginBoton();
        homePage.clickTodoListLink();
    })

    xit("probar page object model", () => {
        cy.log("Probando page object model");
    });

    it("Deberia completar la taera", () =>{
        var tarea = "tarea 1"
        todoListPage.enviarTarea(tarea);
        todoListPage.completartarea(tarea);
        todoListPage.clickAllButton();
    })
});