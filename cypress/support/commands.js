Cypress.Commands.add('login', (email, senha) => { 
   cy.visit('login')
   cy.get('[data-testid="email"]').clear().type(email)
   cy.get('[data-testid="senha"]').clear().type(senha)
   cy.get('[data-testid="entrar"]').click()
   cy.wait(1000)
})

Cypress.Commands.add('CadastroUsuarioAdmin', (nome, email, senha) => {
   cy.visit('cadastrarusuarios')
   cy.get('[data-testid="nome"]', ).clear().type(nome)
   cy.get('[data-testid="email"]').clear().type(email)
   cy.get('[data-testid="password"]').clear().type(senha)
   cy.get('[data-testid="checkbox"]').check()
   cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('CadastroUsuarioComum', (nome, email, senha) => {
   cy.visit('cadastrarusuarios')
   cy.get('[data-testid="nome"]', ).clear().type(nome)
   cy.get('[data-testid="email"]').clear().type(email)
   cy.get('[data-testid="password"]').clear().type(senha)
   cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('token', (email, senha) => {
     cy.request({
        method: 'POST', 
        url: '//http://localhost:3000/login/',
        body: 
           {
              "email": email,
              "password": senha
           }
     }).then((response) =>{
        expect(response.status).equal(200)
        return response.body.authorization
     })
})


Cypress.Commands.add('cadastrarProduto', (tkn) =>{
  var produto = `Produto teste ${Date.now()}`
  cy.request({
      method: 'POST',
      url:  'http://localhost:3000/produtos',
      body: {
          "nome": produto,
          "preco": 1001,
          "descricao": "Comandos customizados...",
          "quantidade": 1001
        },
        headers: {
          authorization: tkn
        }
  })
})