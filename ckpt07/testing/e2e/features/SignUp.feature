Feature: Sign Up
  Scenario: Visit sign up screen
    Given I am on sign up screen
    When I type "bob" into "firstName-input"
    And I type "bob" into "lastName-input"
    And I type "bob@bob.com" into "email-input"
    And I type "bob" into "password-input"
    And I tap on "signUp-button"
    Then I should see "login-screen"