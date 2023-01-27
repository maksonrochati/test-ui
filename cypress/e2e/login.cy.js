/// <reference types="cypress"/>

context('Funcionalidade Login', () => {
    it('Deve fazer login com sucesso', () => {
       cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') 
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click()

       cy.get('.page-title').should('contain', 'Minha conta')
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac')
    });

    it('Deve exibir mensagem de erro ao entrar com login inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') 
       cy.get('#username').type('aluno_@teste.com')
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click()

       cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
    });

    it('Deve exibir mensagem de erro ao entrar com senha inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta') 
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type('teste@tes')
       cy.get('.woocommerce-form > .button').click()

       cy.get('.woocommerce-error > li').should('contain','a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    });
});