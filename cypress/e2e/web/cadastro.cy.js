/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });
    
    it('Deve fazer o cadastro com sucesso admin (usando Date Now)', () => {
        var email = 'teste' + Date.now() + '@teste.com'
        cy.get('[data-testid="nome"]').clear().type('Sarkis Teste')
        cy.get('[data-testid="email"]').clear().type(email)
        cy.get('[data-testid="password"]').clear().type('1234')
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Bem Vindo')        
    });

    it('Deve fazer o cadastro com sucesso admin (usando Faker)', () => {
        cy.get('[data-testid="nome"]').clear().type(faker.person.fullName())
        cy.get('[data-testid="email"]').clear().type(faker.internet.email())
        cy.get('[data-testid="password"]').clear().type(faker.internet.password())
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Bem Vindo')             
    });

    it('Deve fazer o cadastro com sucesso usuario comun customizados paste commands.js', () => {
        cy.CadastroUsuarioComum('sarkis', faker.internet.email(), 'teste123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Serverest Store')   
    });

    it('Deve fazer o cadastro com sucesso usuario Admin customizados paste commands.js', () => {
        cy.CadastroUsuarioAdmin('sarkis', faker.internet.email(), 'teste123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Bem Vindo')   
    });
});