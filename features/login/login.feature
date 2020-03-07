Feature:login
    As a user
    i can login
    with valid credentials

    Scenario:Valid Credentials should log me in
        Given I am on Login Page
        When I Enter username as "user@phptravels.com"
        When I Enter password as "demouser"
        When I Click login button
        Then I am logged in