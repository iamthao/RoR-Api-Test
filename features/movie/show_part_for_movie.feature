@javascript
Feature: Show sentence for movie to learn
  I choose a movie
  I want to see sentence of this movie

  Scenario: Show sentence of movie exactly when type of is video
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

  Scenario: Show sentence of movie exactly when type of is vocabulary
    Given I had a movie and some part for this movie with the first part is "vocabulary"
    Given I had account with full_name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456"
    Given I add movie for this user
    And I visit login page
    And I input email is "thaotest@email.com" and password is "123456"
    When I click button Login
    Then Login is successfully
    Then Show list movie
    When I choosen a movie
    Then Show part of movie


