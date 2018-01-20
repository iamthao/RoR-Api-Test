@javascript
Feature: Check button "Next" sentence
  I complete a sentence
  I click button "Next" to show new sentence

  Scenario: Check button "Next" when input value "Correct"
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

    When I click button "Next"
    Then Show next sentence of movie
    And Check record in UserPart when input "Correct"

  Scenario: Check button "Next" when input value "Correct"
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

    When I click button "Next"
    Then Show next sentence of movie
    And Check record in UserPart when input "Incorrect"
