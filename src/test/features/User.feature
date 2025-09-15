Feature: Dashboard User module functionalities for APM application

  @APMUSER
  Scenario Outline: Verify the admin user privilage for user roles functionlity is working as expected
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When search for an user to change the user role actions and update the user
    Then user click on logout button and should successfully logout from the application
    Then user login to the application with new role and verify

  @APMUSER
  Scenario Outline: Verify the admin user privilage for add an already existing user
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When admin user add an already existing user
    Then user validation toast message should displayed
    Then user click on logout button and should successfully logout from the application

  @APMUSER
  Scenario Outline: Verify the admin user privilage for add an invalid interface email user
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When admin user add an invalid email user
    Then user validation toast message should displayed
    Then user click on logout button and should successfully logout from the application

  @APMUSER
  Scenario Outline: Verify the admin user privilage for add an valid interface user
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When admin user add an valid interface user
    Then user validation toast message should displayed
    Then user click on logout button and should successfully logout from the application

  @APMUSER
  Scenario Outline: Verify the admin user privilage to change active/inactive an user
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When admin user edit and change to active or inactive an user
    Then user validation toast message should displayed
    Then user click on logout button and should successfully logout from the application

  @APMUSER
  Scenario Outline: Verify the inactive user able to login to the application or not
    Given user navigates to the APM application
    When user enter valid login credentials for APM
    Then user should login successfully with valid login
    When admin user edit and change the active user to inactive user
    Then user validation toast message should displayed
    Then user click on logout button and should successfully logout from the application
    Then inactive user login to the application