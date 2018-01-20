@javascript
Feature: Check button "Go to your movie" part
  I complete movie
  I click button "Go to your movie" to choose new movie\
  This test is movie has three part because I need click button "Next" 2 times to show button "Go to your movie"

  Scenario: Check button "Go to your movie" show result right
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

    And I click button "Go to your movie"
    Then Show your list movie

