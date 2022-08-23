/// <reference types="cypress" />

describe("Desafio 4 Jhonatan Tabraj", () => { 
    const user = "jhonntantb99";
    const pass = "pass123!";
    const gender = "male";
    const day = "15";
    const month = "10";
    const year = "1990";
    const url = "https://pushing-it-backend.herokuapp.com/api"

    it("Deberia registrar, ingresar y eliminar el usuario de forma satisfactoria", () =>{
        
        // Api testing para el Registro
        cy.request({
            url: `${url}/register`,
            method: "POST",
            body: {
                username: user,
                password: pass,
                gender: gender,
                day: day,
                month: month,
                year: year,     
            }
        }).then((res) =>{
            expect(res.body.newUser.username).equal(user)
            expect(res.body.newUser.gender).equal(gender)
            expect(res.body.newUser.day).equal(day)
            expect(res.body.newUser.month).equal(month)
            expect(res.body.newUser.year).equal(year)
            expect(res.status).equal(200)
        }).then(({body}) => {

            // Api testing para el Login
            cy.request({
                url: `${url}/login`,
                method: "POST",
                body: {
                    username: body.newUser.username,
                    password: pass, // usamos el password declarado por que el que nos retorna esta cifrado
                }
            }).then((res) =>{
                expect(res.body.user.username).equal(user)
                expect(res.body.user.gender).equal(gender)
                expect(res.body.user.day).equal(day)
                expect(res.body.user.month).equal(month)
                expect(res.body.user.year).equal(year)
                expect(res.status).equal(200)
            }).then(({body}) => {

                // Api testing para el Delete del usuario
                cy.request({
                    url: `${url}/deleteuser/${body.user.username}`,
                    method: "DELETE",
                }).then((res) =>{
                    expect(res.body.user.username).equal(user)
                    expect(res.body.user.gender).equal(gender)
                    expect(res.body.user.day).equal(day)
                    expect(res.body.user.month).equal(month)
                    expect(res.body.user.year).equal(year)
                    expect(res.status).equal(200)
                })
            })
        })
    });
 });
