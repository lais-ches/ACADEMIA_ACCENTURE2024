#utf-8
#language: pt

Funcionalidade: Solicitação de Cotação na Tricents
    Cenário: Tentativa de solicitar a cotação sem preencher os dados obrigatórios
        Dado que acesso o portal Vehicle Insurance Application da Tricents
        E clico em Automobile
        E clico no botao Next para seguir para a aba Enter Insurant Data
        E clico no botao Next para seguir para a aba Enter Product Data
        Quando clico no botao Next para seguir para a aba Select Price Option
        Então deve ser exibida uma mensagem avisando que os dados devem ser preenchidos