Feature: Landing page when first launch
  
  Scenario: I launch the app
    Given I launched the app
    Then I should be on "landing-screen"
    Then I should see "login-button"
    Then I should see "signUp-button"