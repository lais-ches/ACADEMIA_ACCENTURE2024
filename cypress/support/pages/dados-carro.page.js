const BTN_AUTOMOBILE = '#nav_automobile'
const LBL_MODELO = '#make'
const INPUT_MOTOR = '#engineperformance'
const INPUT_DATA_CARRO = '#dateofmanufacture'
const INPUT_LUGARES = '#numberofseats'
const INPUT_GASOLINA = '#fuel'
const INPUT_PRECO = '#listprice'
const INPUT_KM = '#annualmileage'
const BTN_NEXT_INSURANT = '#nextenterinsurantdata'
const AVISO_DATA = 'Must be today or somewhere in the past'

Cypress.Commands.add('acessarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('dadosCarro', () => {
    cy.get(LBL_MODELO).select('Audi')
    cy.get(INPUT_MOTOR).type('440')
    cy.get(INPUT_DATA_CARRO).type('01/09/2024')
    cy.get(INPUT_LUGARES).select('5')
    cy.get(INPUT_GASOLINA).select('Petrol')
    cy.get(INPUT_PRECO).type('100000')
    cy.get(INPUT_KM).type('50000')
})

Cypress.Commands.add('proximaAbaInsurant', () => {
    cy.get(BTN_NEXT_INSURANT).click()
})

Cypress.Commands.add('preencherData', () => {
    cy.get(INPUT_DATA_CARRO).type('01/09/2025')
})

Cypress.Commands.add('validarAvisoData', () => {
    cy.contains(AVISO_DATA).should('be.visible')
})


