import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Vehicle Insurance Application da Tricents', () => {
    cy.visit('/app.php')
})

And('clico em Automobile', () => {
    cy.acessarAutomobile()
})

And('preencho os dados obrigatorios da aba Enter Vehicle Data', () => {
    cy.dadosCarro()
})

And('clico no botao Next para seguir para a aba Enter Insurant Data', () => {
    cy.proximaAbaInsurant()
})

And('preencho os dados obrigatorios da aba Enter Insurant Data', () => {
    cy.dadosUsuario()
    
})

And('clico no botao Next para seguir para a aba Enter Product Data', () => {
    cy.proximaAbaProduct()
})

And('preencho os dados obrigatorios da aba Enter Product Data', () => {
    cy.dadosProduto()
})

And('clico no botao Next para seguir para a aba Select Price Option', () => {
    cy.proximaAbaPrice()
})

When('seleciono a opcao Ultimate', () => {
    cy.selecaoCotacao()
})

Then('devem ser exibidas as opcoes View Quote e Download Quote', () => {
    cy.validarCotacao()
})

