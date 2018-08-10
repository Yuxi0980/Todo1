Feature: Register user information
    As a user
    I want to register on website
    So that could buy books

    @regression1
    Scenario: register on website
        Given Fredy wants to register on website
        When he send form register with all information
        Then he should see a message indicating "Registered Successfully"