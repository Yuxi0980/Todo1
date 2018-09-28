Feature: Registro de usuario personas
    Como usuario del app
    Quiero registrarme por primera vez en el canal de e-banking
    Para posteriormente autenticarme en el módulo transaccional

    @regresion
    Scenario: Registrar un usuario por primera vez
        Given que Juan no se encuentra registrado en el canal de e-banking
        When el diligencie el formulario de registro
        Then el debería visualizar un mensaje indicando el éxito del proceso