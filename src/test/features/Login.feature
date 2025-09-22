Feature: Login functionality for INSURSYS application

  @LOGIN
  Scenario Outline: Successful login with valid credentials
    Given user navigates to the INSURSYS application
    When user enter valid login credentials for INSURSYS
    Then user should login successfully with valid login
    Then user sign out from the application

    @LOGIN
  Scenario Outline: Verify the validation with invalid login credentials
    Given user navigates to the INSURSYS application
    When user enter invalid login credentials for INSURSYS
    Then user should see an error message for invalid login

    @LOGIN3
  Scenario Outline: Verify the validation with Case Sensitivity login credentials
    Given user navigates to the INSURSYS application
    When user enter case insensitive credentials for INSURSYS
    Then user should see an error message for insensitive credentials

