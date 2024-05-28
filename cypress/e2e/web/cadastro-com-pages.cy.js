/// <reference types="cypress" /> 
import cadastroPage from '../../support/pages/cadastro.page';
import CadastroPage from '../../support/pages/cadastro.page'

describe('Funcionalidade: Cadastro - Usando Pages Objects', () => {
    beforeEach(() => {
        CadastroPage.visitarUrl()
    });
    
    it('Deve fazer cadastro de usuario admin com sucesso', () => {
        //utilizando crase puxar metodos xxx ${date.now()}
        var email = `sarkis${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioAdmin('Sarkis teste Page' , email, 'junior@123')
        cy.get('.lead',{timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Deve fazer cadastro de usuário comum com sucesso', () => {
        var email = `sarkis${Date.now()}@teste.com`
        CadastroPage.CadastroUsuarioComumn('Sarkis teste comum', email, 'sarkis@123')
    }); 
});

