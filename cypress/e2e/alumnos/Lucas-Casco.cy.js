/// <reference types="cypress" />

describe ('Lucas Casco desafio 4',() =>{
    var password = 'Hola123!'
    it ('Register Login and delete user',() =>{
        cy.request({
            url:"https://pushing-it-backend.herokuapp.com/api/register",
            method: "POST",
            body:{
                username : 'LucasCasco14',
                password: password,
                gender: 'M',
                day: '13',
                month: '12',
                year: '1988'

            }
        }).then((respuesta) =>{
            expect(respuesta.status).equal(200)
        }).then((respuesta) =>{
            cy.request({
               url:"https://pushing-it-backend.herokuapp.com/api/login",
               method: "POST",
               body:{
                username : respuesta.body.newUser.username,
                password: password
                }
            }).then((respuesta) =>{
                expect(respuesta.status).equal(200)
            }).then((respuesta) =>{
                cy.request({
                    url: "https://pushing-it-backend.herokuapp.com/api/deleteuser/"+ respuesta.body.user.username,
                    method:"DELETE"
                })
            })

        })
    })
})