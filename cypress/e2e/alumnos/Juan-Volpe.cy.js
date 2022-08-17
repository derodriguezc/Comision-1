/// <reference types="cypress" />

describe('Desafío 4 Juan Volpe', () => { 

    let username = 'lauragonzalez15';
    let password = '128433!';
    let gender   = 'Female';
    let year     = '1990';
    let month    = 'May';
    let day      = '28';

    it("Debería registrar, ingresar y eliminar el usuario de forma satisfactoria", () => {
        cy.request({
            url: 'https://pushing-it-backend.herokuapp.com/api/register',
            method: 'POST',
            body: {
                username: username,
                password: password,
                gender: gender,
                year: year, 
                month: month,
                day: day
            }
        }).then((response) => {
            expect(response.status).equal(200);
            expect(response.body.newUser.username).equal(username);
        }).then(() => {
            cy.request({
                url: 'https://pushing-it.herokuapp.com/api/login',
                method: 'POST',
                body:{
                    username: username,
                    password: password
                }
            });
        }).then((response) => {
            expect(response.status).equal(200);
            expect(response.body.user.username).equal(username);
            expect(response.body.user.password).not.equal(password);
            cy.request({
                url: 'https://pushing-it-backend.herokuapp.com/api/deleteuser/' + username,
                method: 'DELETE'
            }).then((response) => {
                expect(response.status).equal(200);
            });
        });
    });
 });