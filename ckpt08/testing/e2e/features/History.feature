Feature: User booking history

  Scenario: I should see My Booking button
    """
    As a logged in user, I should see a button that take me to see all my past bookings
    """
    Given I am logged in as "BOB"
    And I landed on find room screen
    Then I should see "myBookings-button"

  Scenario: My Booking button take me to booking history
    """
    As a logged in user and clicked on My Bookings button,
    I should be taken to My Booking Screen
    """
    Given I am logged in as "BOB"
    When I tap on "myBookings-button"
    Then I should be on "history-screen"

  Scenario: My Booking History show my recently booked
    """
    As a logged in user and clicked on My Bookings button,
    I should be taken to My Booking Screen
    """
    Given I am logged in as "BOB" and I already have 2 bookings
    When I am on my booking screen
    Then I should see a list of 2 "historyItem-button"
