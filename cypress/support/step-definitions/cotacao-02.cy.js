import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('clico no botao Next para seguir para a aba Select Price Option', () => {
    cy.proximaAbaPrice()
})

Then('deve ser exibida uma mensagem avisando que os dados devem ser preenchidos', () => {
    cy.validarAvisoPreencher()
})

