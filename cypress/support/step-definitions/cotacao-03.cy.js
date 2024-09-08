import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


When('preencho uma data do futuro', () => {
    cy.preencherData()
})

Then('deve ser exibida uma mensagem avisando que a data tem que estar no passado', () => {
    cy.validarAvisoData()
})

