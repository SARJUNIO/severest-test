/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import dadosUsuario from '../../fixtures/usuarios.json'

// depois do from abrir aspas ../ para navegar nas pastas na mesma estruturas somente ./

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });

    it.only('Cadastrar usuario com sucesso usando importação de dados', () => {
        cy.CadastroUsuarioComum(dadosUsuario[0], nome, dadosUsuario[0].email, dadosUsuario[0].senha)
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1').should('contain', 'Serverest Store')
    });

    it('Deve fazer o cadastro com sucesso admin (usando Date Now)', () => {
        //var email = 'teste' + Date.now() + '@teste.com'      
        //cy.get('[data-testid="nome"]').clear().type('Sarkis Teste')
        //cy.get('[data-testid="email"]').clear().type(email)
        //cy.get('[data-testid="password"]').clear().type('1234')
        //cy.get('[data-testid="checkbox"]').check()
        //cy.get('[data-testid="cadastrar"]').click()
        //cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        //cy.get('h1').should('contain', 'Bem Vindo')

        var email = 'teste' + Date.now() + '@teste.com'
        cy.CadastroUsuarioComum('Sarkis Junior', email, 'teste@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
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
        cy.CadastroUsuarioComum('sarkis', faker.internet.email(), 'teste@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('h1', {timeout: 10000}).should('contain', 'Serverest Store')
    });

    it('Deve fazer o cadastro com sucesso usuario Admin customizados paste commands.js', () => {
        cy.CadastroUsuarioAdmin('teste', faker.internet.email(), 'teste@123')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
        cy.get('.lead',{timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it.only('Cadastrar usuario com sucesso usando importação de dados', () => {
        cy.CadastroUsuarioComum(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha)
        cy.get('h1', {timeout: 10000}).should('contain', 'Serverest Store')
      });


    // it('Deve validar campo de email valido', () => {
    //cy.CadastroUsuarioComum(faker.person.fullName(), faker.internet.email())
    //cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    //cy.get('h1').should('contain', 'Bem Vindo') "preciso montar este também"
    //});
});