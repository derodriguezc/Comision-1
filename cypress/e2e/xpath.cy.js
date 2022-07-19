/// <reference types="cypress" />

describe('Xpath', () => { 

it("deberia encontrar el elemento con un xpath absoluto", () => {
    cy.visit("/");
    cy.xpath('/html/body/div/div/div/div/form/div[1]/input[@name="user"]').should('exist');
})

it("deberia encontrar el elemento con un cssSelector", () => {
    cy.visit("/");
    cy.get('html body div > div > div > div > form div:nth-child(1) input').should('exist');
})

it('Deberia encontrar nuestro elemento con xpath relativo', () => {
    cy.visit("/")
    cy.xpath('//*[@id="user"]').should('exist');
    cy.xpath('//input[@id="user"]').should('exist');
});

it('Xpath utilizando contains', () => {
    cy.xpath("//button[contains(@type,'sub')]").should('exist');
});

it('Xpath utilizando operador logico and', () => {
    cy.xpath('//input[@id="user" and @name="user"]').should('exist');
});

it('Xpath utilizando operador logico or', () => {
    cy.xpath('//input[@id="user" or @name="nombre"]').should('exist');
});

it('Xpath utilizando operador logico and utilizando not', () => {
    cy.xpath('//input[@id="user" and not(@name="pass")]').should('exist');
});

it('Xpath utilizando starts-with', () => {
    cy.xpath("//button[starts-with(@type,'subm')]").should('exist');
});

it('Deberia encontrar el xpath utiliznado text()', () => {
    cy.xpath('//button[text()="Register"]')
});

it('Deberia encontrar el xpath utilizando text de forma parcial utlizando starts-with', () => {
    cy.xpath("//button[starts-with(text(),'Regist')]").should('exist');
});

it('Deberia encontrar el xpath utilizando text de forma parcial utilizando contains', () => {
    cy.xpath("//button[contains(text(),'ister')]").should('exist');
});

it("deberia encontrar elemento utilizando child", () =>{
    cy.xpath('//div[@role="group"]//child::input[@id="user"]').should("exist")
})

it("deberia encontrar elemento utilizando child", () =>{
    cy.xpath('//label//child::input[@value="Male"]').should("exist")
})
})