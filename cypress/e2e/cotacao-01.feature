#utf-8
#language: pt

Funcionalidade: Solicitação de Cotação na Tricents
    Cenário: Validação de solicitação de cotação com sucesso
        Dado que acesso o portal Vehicle Insurance Application da Tricents
        E clico em Automobile
        E preencho os dados obrigatorios da aba Enter Vehicle Data
        E clico no botao Next para seguir para a aba Enter Insurant Data
        E preencho os dados obrigatorios da aba Enter Insurant Data
        E clico no botao Next para seguir para a aba Enter Product Data
        E preencho os dados obrigatorios da aba Enter Product Data
        E clico no botao Next para seguir para a aba Select Price Option
        Quando seleciono a opcao Ultimate
        Então devem ser exibidas as opcoes View Quote e Download Quote