@javascript
Feature: Login to system
  I had a count
  I want to login to system

  Scenario: Login with exist accout
    Given I had account with full_name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456"
    And I visit login page
    And I input email is "thaotest@email.com" and password is "123456"
    When I click button Login
    Then Login is successfully
