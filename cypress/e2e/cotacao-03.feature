#utf-8
#language: pt

Funcionalidade: Solicitação de Cotação na Tricents
    Cenário: Tentativa de solicitar a cotação preenchendo uma data inválida
        Dado que acesso o portal Vehicle Insurance Application da Tricents
        E clico em Automobile
        Quando preencho uma data do futuro
        Então deve ser exibida uma mensagem avisando que a data tem que estar no passado