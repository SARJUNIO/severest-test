/// <reference types="cypress" />

describe('API - Produtos', () => {

    it('Deve listar produtos com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        }).then( (response) => {
            expect(response.status).to.equal(200)
            expect(response.duration).lessThan(300)
            expect(response.body).to.have.property('produtos')
            expect(response.body).to.have.property('quantidade')
        })
        
    });
    
});