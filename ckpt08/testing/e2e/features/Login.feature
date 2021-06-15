Feature: Login

  Scenario: Login success
    Given I am on login screen
    When I type "bob@bob.com" into "email-input"
    When I type "bob" into "password-input"
    When I tap on "login-button"
    Then I should see "find-room-screen"