/// <reference types="cypress" />

describe('Funcionalidade: Lista de compras', () => {

    beforeEach(() => {
        cy.login('teste@capgemini.com','1234@')
    });

    it('Validar entrada na lista de compras', () => {
        cy.visit('minhaListaDeProdutos')
        cy.get('h1').should('contain', 'Lista de Compras')
        cy.url().should('contain', 'minhaListaDeProdutos')
        
    });
    
});