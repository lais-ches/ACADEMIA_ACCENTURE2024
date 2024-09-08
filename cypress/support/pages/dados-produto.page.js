const INPUT_DATA_INICIO = '#startdate'
const INPUT_TOTAL_SEGURO = '#insurancesum'
const INPUT_MERITO = '#meritrating'
const INPUT_COBERTURA = '#damageinsurance'
const INPUT_OPCIONAL = 'input[type="checkbox"][value="Yes"]'
const INPUT_CORTESIA = '#courtesycar'
const BTN_NEXT_PRICE = '#nextselectpriceoption'

Cypress.Commands.add('dadosProduto', () => {
    cy.get(INPUT_DATA_INICIO).type('10/31/2024')
    cy.get(INPUT_TOTAL_SEGURO).select('35000000')
    cy.get(INPUT_MERITO).select('Super Bonus')
    cy.get(INPUT_COBERTURA).select('Full Coverage')
    cy.get(INPUT_OPCIONAL).check({force:true})
    cy.get(INPUT_CORTESIA).select('Yes')
})

Cypress.Commands.add('proximaAbaPrice', () => {
    cy.get(BTN_NEXT_PRICE).click()
})



