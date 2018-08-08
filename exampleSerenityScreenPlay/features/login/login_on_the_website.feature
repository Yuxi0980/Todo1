Feature: Login on the website
    As a admin user
    I want to login in the website
    So that only users with permisions could enter to the website

    @regression
    Scenario: send form with none information
        Given admin wants to login in the website
        When he send form login with none information
        Then he should see a message indicating "Invalid username or password"