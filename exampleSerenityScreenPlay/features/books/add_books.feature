Feature: Add books on shopping cart
    As a user
    I want to add books on shopping cart
    So that could buy books

    @regression
    Scenario: add books
        Given Fredy wants to buy books
        When he add 2 "Core Java" books
        And he add 5 "Ruby for Rails" books
        And he add 2 "Python Cookbook" books
        Then he should see the total price of shopping 