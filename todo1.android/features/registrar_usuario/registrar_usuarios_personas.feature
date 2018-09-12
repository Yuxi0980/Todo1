# language: es
# encoding: iso-8859-1

Característica: Registro de usuarios - Personas
    Como usuario del app
    Quiero registrarme por primera vez en el canal de e-banking
    Para posteriormente autenticarme en el módulo transaccional

    @regresion
    Escenario: Registrar un usuario por primera vez
        Dado que Juan no se encuentra registrado en el canal de e-banking
        Cuando el diligencie el formulario de registro
        Entonces el debería visualizar un mensaje indicando el éxito del proceso
        Y el debería poder ejecutar el proceso de login e ingresar al módulo transaccional del canal