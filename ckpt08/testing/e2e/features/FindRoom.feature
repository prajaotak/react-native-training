Feature: Find Room

  @find-room-success
  Scenario: Find Room Success
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    And I type "20211010" into "date-input"
    And I type "0800" into "startTime-input"
    And I type "1000" into "endTime-input"
    And I tap on "findRoom-button"
    Then I should see "selectRoom-screen"
    And I should see "date-container"
    And I should see "time-container"
    And I should see list of "roomItem-button"

  @find-room-not-found
  Scenario: Find Room Not Found
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    When I type "20191010" into "date-input"
    When I type "0800" into "startTime-input"
    When I type "1000" into "endTime-input"
    When I tap on "findRoom-button"
    Then I should see "selectRoom-screen"
    And I should see "date-container"
    And I should see "time-container"
    But I should not see list of "roomItem-button"
    
    
