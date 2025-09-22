Feature: Login functionality for APM application

  @LOGIN
  Scenario Outline: Successful login with valid credentials
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login

  @LOGIN
  Scenario Outline: Unsuccessful login with invalid credentials
    Given user navigates to the APM application
    When user enter invalid login credentials for APM
    Then user should see an error message and remain on the login page

  @LOGIN
  Scenario Outline: Login attempt with inactive user
    Given user navigates to the APM application
    When inactive user enter login credentials for APM
    Then user should see an inactive user error message
