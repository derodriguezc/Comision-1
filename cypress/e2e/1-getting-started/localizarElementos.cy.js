it("Deberia registrase satisfactoriamente", () =>{
    cy.visit("")
    cy.get('button')
    cy.get('[type="submit"]').should("exist")
    cy.get('#user').should("exist")
    cy.get('input#user').should("exist")
    cy.get('input[id="user"]').should("exist")
    cy.get('.password').should('exist')
    cy.get('input.password').should('exist')
    cy.get('input[class="chakra-input password css-1ekf6i8"]').should('exist')
    cy.get('[name="user"]').should('exist')
    cy.get('fieldset').find('[value="Male"]').should("exist")
    cy.get('select[name="year"]').children('[value="1923"]').should("exist")
    cy.get('option').parent('[name="year"]').should('exist')
    cy.get('#user').siblings('label').should('exist')
    cy.get("button").contains("register", { matchCase: false }).should("exist") //matCase tiene la funcion de indicarle a cypress que no verifique mayusuclas y minusculas


})