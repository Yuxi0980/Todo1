Feature: Login on website
As a admin user
I want to login on website
So that only users with permisions could enter to the website

    @regression
    Scenario: send form login with none information
        Given admin wants to login on website
        When he send form login with none information
        Then he should see a message indicating "Invalid username or password"

    @regression
    Scenario: send form login with wrong information
        Given admin wants to login on website
        When he send form login with wrong information
        Then he should see a message indicating "Invalid username or password"

    @regression
    Scenario: send form login with right information
        Given admin wants to login on website
        When he send form login with right information
        Then he should see the Books page