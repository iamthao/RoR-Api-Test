@javascript
Feature: Create new user to login
  This is the first view website
  I want to create new user to login to system

  Scenario: Create new user success
    Given I visit register page
    And I input full name is "Thao Nguyen", email is "thaotest@email.com" and password is "123456" and comfirm password is "123456"
    When I submit form
    Then Account will create successfully and go to dashboard

