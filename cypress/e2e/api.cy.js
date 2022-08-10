/// <reference types="cypress" />

describe('API testing', () => { 
    
    it("Primer peticion HTTP usando querys", () =>{
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "GET",
            qs:{
              id:5  
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta.body)
            cy.log(respuesta.headers)
        })
    })

    it("Peticion HTTP utilizando slides", () =>{
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "GET",
            qs:{
              _start:15,
              _end:45
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta.body)
            cy.log(respuesta.headers)
        })
    })

    it("Peticion HTTP utilizando rangos", () =>{
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "GET",
            qs:{
              id_gte:15,
              id_lte:45
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta.body)
            cy.log(respuesta.headers)
        })
    })

    it("Peticion HTTP ordenando la respuesta", () =>{
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "GET",
            qs:{
              _sort:"id",
              _order:'desc'
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta.body)
            cy.log(respuesta.headers)
        })
    })

    it("Peticion HTTP excluyendo valores", () =>{
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "GET",
            qs:{
                userId_ne:4,
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta.body)
            cy.log(respuesta.headers)
        })
    })

    it("Peticion HTTP POST", () =>{
        let title = 'Pushing IT'
        let id = 303
        let body = 'Curso Cypress Pushing it'
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "POST",
            body:{
                id:id,
                title: title,
                body: body
            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(201)
            expect(respuesta.body.title).equal(title)
            expect(respuesta.body.body).equal(body)
            expect(respuesta.body.id).equal(id)
            cy.log(respuesta)
        })
    })

    it("Peticion HTTP POST utilizando destructuring", () =>{
        let title = 'Pushing IT'
        let id = 308
        let bodys = 'Curso Cypress Pushing it'
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "POST",
            body:{
                id:id,
                title: title,
                body: bodys
            }
        }).then(({body, status}) =>{
            expect(body.title).equal(title)
            expect(body.body).equal(bodys)
            expect(body.id).equal(id)
            expect(status).equal(201)
        })
    })

    it("Peticion HTTP POST agregando header", () =>{
        let title = 'Pushing IT'
        let id = 313
        let bodys = 'Curso Cypress Pushing it'
        cy.request({
            url: "http://localhost:3000/posts/",
            method: "POST",
            body:{
                id:id,
                title: title,
                body: bodys
            },
            headers:{
                'Content-tpye': "application/json"
            }
        }).then(({body, status, headers}) =>{
            expect(body.title).equal(title)
            expect(body.body).equal(bodys)
            expect(body.id).equal(id)
            expect(status).equal(201)
            expect(headers.connection).equal("keep-alive")
        })
    })

    it("Peticion HTTP PUT", () =>{
        let id = 10
        let title = 'Pushing IT Actualizado'
        let body = 'Curso Cypress Pushing it'
        cy.request({
            url: "http://localhost:3000/posts/" + id,
            method: "PUT",
            body:{
                title: title,
                body: body
            },
        }).then((respuesta) =>{
            expect(respuesta.body.title).equal(title)
            expect(respuesta.body.body).equal(body)
            expect(respuesta.status).equal(200)
        })
    })

    it("Peticion HTTP DELETE", () =>{
        let id = 15
        cy.request({
            url: "http://localhost:3000/posts/" + id,
            method: "DELETE",
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
            cy.log(respuesta)
        })
    })

    it("Verificar que fue eliminado", () =>{
        cy.request({
            url: "http://localhost:3000/posts/15",
            method: "GET",
            failOnStatusCode: false
        }).then((respuesta) =>{
            expect(respuesta.status).equal(404)
        })
    })

})