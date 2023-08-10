Feature: Count Page (FEATURE)

  Testing features of the counter (DESC)

  Scenario: Navigating to About page
    Given I open the "/" page
    When I click on the "button"
    Then I see "1" in the element "p"
