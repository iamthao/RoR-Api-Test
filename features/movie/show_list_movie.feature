@javascript
Feature: Check list movie has item
  I had some movie
  I want to see list movie

  Scenario: List movie has item
    Given I had a movie and some sentence for this movie
    Given I had account with full_name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456"
    Given I add movie for this user
    And I visit login page
    And I input email is "thaotest@email.com" and password is "123456"
    When I click button Login
    Then Login is successfully
    Then Show list movie

