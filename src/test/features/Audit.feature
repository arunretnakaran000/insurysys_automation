Feature: Dashboard Audit menu functionalities for APM application

  @APMAUDIT
  Scenario Outline: Verify the audit log feature functionlity is working as expected
    Given user navigates to the APM application for Audit log
    When user enter valid login credentials for APM for Audit log
    Then user should login successfully with valid login for Audit log
    When search for an user to change the user role actions and update the user for Audit log
    Then go to audit menu and search for the user
    Then verify the audit log for the respective user

  @APMAUDIT
  Scenario Outline: Verify the audit log search functionlity is working as expected
    Given user navigates to the APM application for Audit log
    When user enter valid login credentials for APM for Audit log
    Then user should login successfully with valid login for Audit log
    When the user do the filter search for audit
    Then verify the search result for audit log


  @APMAUDIT
  Scenario Outline: Verify the audit log clear search functionlity is working as expected
    Given user navigates to the APM application for Audit log
    When user enter valid login credentials for APM for Audit log
    Then user should login successfully with valid login for Audit log
    When the user do the filter search for audit
    Then user clear the filter search for audit
    Then verify the search result for audit log