Feature: Select Room

  Scenario: Verify result
    """
    As I am a logged user, After I search for rooms, I want to see date & time text display correctly
    """
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    When I type "20211010" into "date-input"
    When I type "0800" into "startTime-input"
    When I type "1000" into "endTime-input"
    When I tap on "findRoom-button"
    Then I should see "selectRoom-screen"
    And I should see text "date-text" with value "20211010"
    And I should see text "time-text" with value "0800 - 1000"

  Scenario: Search room not found
    """
    As I am a logged user, After I search for rooms, I should see no room message if no room is available
    """
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    When I type "20191010" into "date-input"
    When I type "0800" into "startTime-input"
    When I type "1000" into "endTime-input"
    When I tap on "findRoom-button"
    Then I should not see a list of "roomItem-button"

  Scenario: Book a room success
    """
    As I am a logged user, after I search and book the room, I should see bookingId in success screen
    """
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    And I type "20201010" into "date-input"
    And I type "0800" into "startTime-input"
    And I type "1000" into "endTime-input"
    And I tap on "findRoom-button"
    And I tap on "roomItem-button" at index 0
    And I tap on "confirm-button"
    Then I should see "success-screen"
    And I should see "bookingId-text"
    When I tap on "history-button"
    Then I should see "history-screen"
  
  Scenario: Cancel before booking room
    """
    As I am a logged user, after I search and book the room, but I cancel in summary page, I should go back to select room
    """
    Given I am on findRoom-screen with user "BOB"
    When I type "10" into "nbPeople-input"
    And I type "20201010" into "date-input"
    And I type "0800" into "startTime-input"
    And I type "1000" into "endTime-input"
    And I tap on "findRoom-button"
    And I tap on "roomItem-button" at index 0
    And I tap on "cancel-button"
    Then I should see "selectRoom-screen"


