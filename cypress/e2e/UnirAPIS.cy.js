/// <reference types="cypress" />

describe('API testing', () => {

    xit("Realizar una peticion POST y luego una peticion PUT", () => {
        let id = 305
        let title = 'Pushing IT'
        let body = 'Curso Cypress Pushing it'
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "POST",
            body: {
                title: title,
                body: body,
                id: id
            },
        }).then((respuesta) => {
            expect(respuesta.body.title).equal(title)
            expect(respuesta.body.body).equal(body)
            expect(respuesta.status).equal(201)
        }).then((respuestaPOST) => {
            cy.request({
                url: "http://localhost:3000/posts/" + respuestaPOST.body.id,
                method: "PUT",
                body: {
                    title: respuestaPOST.body.title + ' actualizado',
                    body: 'Curso Cypress Pushing it actualizado',
                },
            }).then((respuestaPUT) => {
                expect(respuestaPUT.body.title).equal('Pushing IT actualizado')
                expect(respuestaPUT.body.body).equal('Curso Cypress Pushing it actualizado')
                expect(respuestaPUT.status).equal(200)
            })
        })
    })

    it('Deberia ingresar al sistema de Pushing IT y luego crear una tarea', () => {
        cy.request({
            url:"https://pushing-it.herokuapp.com/api/login",
            method:"POST",
            body:{
                username:"pushingit",
                password:"123456!"
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((respuesta) => {
            cy.log(respuesta.status)
        }).then((respuesta) => {
            cy.request({
                method: 'POST',
                url: 'https://pushing-it.herokuapp.com/api/save-task',
                body: {
                    name: "Nueva tarea",
                    description: "Pushing IT",
                    status: false,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${respuesta.body.token}`
                }
            }).then((respuesta) => {
                expect(respuesta.body.task.name).equal('Nueva tarea')
            })
        })

    });

    

})