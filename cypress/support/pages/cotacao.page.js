const INPUT_COTACAO = 'input[type="radio"][value="Ultimate"]'
const VIEW_COTACAO = '#viewquote'
const DOWNLOAD_COTACAO = '#downloadquote'
const AVISO = 'Please, complete the first three steps to see the price table.'

Cypress.Commands.add('selecaoCotacao', () => {
    cy.get(INPUT_COTACAO).check({force:true})
})

Cypress.Commands.add('validarCotacao', () => {

    cy.get(VIEW_COTACAO).should('be.visible')
    cy.get(DOWNLOAD_COTACAO).should('be.visible')
})

Cypress.Commands.add('validarAvisoPreencher', () => {
    cy.contains(AVISO).should('be.visible')
})

