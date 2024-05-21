/// <reference types="cypress" />


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        //Fazer interação antes de cada cenário
        cy.visit('https://front.serverest.dev/login')

    });

    afterEach(() => {
        // Fazer interação após cada cenário
        cy.screenshot()

    });

    it('Fazer login com sucesso', () => {
        cy.get('[data-testid="email"]').clear().type('teste@capgemini.com')
        cy.get('[data-testid="senha"]').clear().type('1234@')
        cy.get('[data-testid="entrar"]').click()
        cy.get('h1').should('contain', 'Serverest Store')
        
    });
    
    it('Validar mensagem de usuário invalido', () => {
        cy.get('[data-testid="email"]').clear().type('test@capgemini.com')
        cy.get('[data-testid="senha"]').clear().type('1234@')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
        
    });

    it('Validar mensagem de senha invalida', () => {
        cy.get('[data-testid="email"]').clear().type('test@capgemini.com')
        cy.get('[data-testid="senha"]').clear().type('1234 ')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
        
    });

    it('Validar mensagem de senha em branco', () => {
        cy.get('[data-testid="email"]').clear().type('test@capgemini.com')
        cy.get('[data-testid="senha"]').clear().type('1234 ')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
        
    });
});

