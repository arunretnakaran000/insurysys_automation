Feature: Configuration module DMP Automation functionalities for APM application

    @CONFIGDMP
    Scenario Outline: Verify the Automation Configurations action for EC & Plano are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then verify the EC and Plano actions active to inactive or inversely

    @CONFIGDMP
    Scenario Outline: Verify the DMP Automation Failure Threshold validations are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then verify the max count and blank field validations - DMP Automation


    @CONFIGDMP
    Scenario Outline: Verify the DMP Automation Failure Threshold actions are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then verify the failue threshold edit actions - DMP Automation

    @CONFIGDMP
    Scenario Outline: Verify the DMP Email configuration - EC functionalities are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then verify Email config - EC search and edit actions - DMP Automation

    @CONFIGDMP
    Scenario Outline: Verify the DMP Email configuration - Plano functionalities are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then verify Email config - Plano search and edit actions - DMP Automation


    @CONFIGDMP
    Scenario Outline: Verify the Invalid keyword search for Email configuration - EC & Plano are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu - DMP Automation
        Then search for invalid keyword and verify the response - DMP Automation