@javascript
Feature: Check answer which user input is correct
  I want to see sentence of this movie
  If I don't input, Error message show Please input
  If I input answer which is wrong, Error message show Answer is wrong
  If I input answer which is correct, Success message show Answer is correct

  Scenario: Check answer when value input correct
    Given I had a movie and some part for this movie with the first part is "video"
    Given I had account with full_name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456"
    Given I add movie for this user
    And I visit login page
    And I input email is "thaotest@email.com" and password is "123456"
    When I click button Login
    Then Login is successfully
    Then Show list movie
    When I choosen a movie
    Then Show part of movie
    When I click button "Check Answer"
    Then Show message "Please input answer."
    Given I input value correct
    When I click button "Check Answer"
    Then Show message "Answer is correct."

  Scenario: Check answer when value input incorrect
    Given I had a movie and some part for this movie with the first part is "video"
    Given I had account with full_name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456"
    Given I add movie for this user
    And I visit login page
    And I input email is "thaotest@email.com" and password is "123456"
    When I click button Login
    Then Login is successfully
    Then Show list movie
    When I choosen a movie
    Then Show part of movie
    When I click button "Check Answer"
    Then Show message "Please input answer."
    Given I input value incorrect
    When I click button "Check Answer"
    Then Show message "Answer is incorrect. You can answer late."

