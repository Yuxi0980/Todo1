Feature: Login on the website
    As a admin user
    I want to login in the website
    So that only users with permisions could enter to the website

    Scenario: send form with none information
        Given user admin navigate to the login page
        When he send form login with none information
        Then he should see a message indicating "Invalid username or password"