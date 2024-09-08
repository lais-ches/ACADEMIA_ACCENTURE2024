const INPUT_PRIMEIRO_NOME = '#firstname'
const INPUT_ULTIMO_NOME = '#lastname'
const INPUT_ANIVERSARIO = '#birthdate'
const INPUT_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const INPUT_OCUPACAO = '#occupation' 
const INPUT_HOBBY = 'input[type="checkbox"][value="Speeding"]'
const BTN_NEXT_PRODUCT = '#nextenterproductdata'

Cypress.Commands.add('dadosUsuario', () => {
    cy.get(INPUT_PRIMEIRO_NOME).type(Cypress.env('nome'), {log: false})
    cy.get(INPUT_ULTIMO_NOME).type(Cypress.env('sobrenome'), {log: false})
    cy.get(INPUT_ANIVERSARIO).type(Cypress.env('aniversario'), {log: false})
    cy.get(INPUT_PAIS).select('Brazil')
    cy.get(INPUT_CEP).type(Cypress.env('cep'), {log: false})
    cy.get(INPUT_OCUPACAO).select('Employee')
    cy.get(INPUT_HOBBY).check({force:true})
})

Cypress.Commands.add('proximaAbaProduct', () => {
    cy.get(BTN_NEXT_PRODUCT).click()
})



