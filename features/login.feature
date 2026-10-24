Feature: Login Functionality

Scenario: Successful login

    Given I open the OrangeHrm login page
    When  I enter the username "Admin"
    And  I enter the password "admin123"
    And  I click the login button
    Then I should see the dashboard