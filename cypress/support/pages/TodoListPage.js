export class TodoListPage {

    constructor() {
        this.taskInput = "#task"
        this.allButton = "#all"
    }

    enviarTarea(tarea) {
        cy.get(this.taskInput).type(`${tarea} {enter}`);
    };

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea);
    };

    completartarea(tarea) {
        cy.contains(tarea).click();
    };

    clickAllButton() {
        cy.get(this.allButton).click();
    }
};