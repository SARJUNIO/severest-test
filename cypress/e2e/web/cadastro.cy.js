/// <reference types="cypress" />

describe('Funcionalidade Cadastro', () => {
   
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
    });
    
    afterEach(() => {
        // Fazer interação após cada cenário
        cy.screenshot()

    });

    it('Deve fazer o cadastro do usuário com sucesso', () => {
        cy.get('[data-testid="nome"]').clear().type('Sarkis Teste')
        cy.get('[data-testid="email"]').clear().type('tete@tet9.com')
        cy.get('[data-testid="password"]').clear().type('1234')
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Bem Vindo')
              
        
    });
});