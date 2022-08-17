describe("Desafio 4 Maximiliano Francesconi", () => { 
    const user = "maxifni77";
    const pass = "Maxi77!";
    const gender = "male";
    const day = "12";
    const month = "08";
    const year = "1991";
    const url = "https://pushing-it-backend.herokuapp.com/api"

    it("Deberia registrar, ingresar y eliminar el usuario de forma satisfactoria", () =>{

        //Registro de mi Usuario y mis datos definidos en las contantes de arriba
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

            // Iniciar sesion con mi Usuario (con el nombre y password)
            cy.request({
                url: `${url}/login`,
                method: "POST",
                body: {
                    username: body.newUser.username,
                    password: pass,
                }
            }).then((res) =>{
                expect(res.body.user.username).equal(user)
                expect(res.body.user.gender).equal(gender)
                expect(res.body.user.day).equal(day)
                expect(res.body.user.month).equal(month)
                expect(res.body.user.year).equal(year)
                expect(res.status).equal(200)
            }).then(({body}) => {

                // Borrar mi usuario
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