Feature: Configuration module Compass and Manituo functionalities for APM application

    @CONFIG
    Scenario Outline: Verify the Bot Configurations action for all the bots are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the bot actions active to inactive or inversely

    @CONFIG
    Scenario Outline: Verify the Bot Configurations primary role changes are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then change and verify the primary role for the bots

    @CONFIG
    Scenario Outline: Verify the Failure Threshold field validations are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the max count and blank field validations

    @CONFIG
    Scenario Outline: Verify the Failure Threshold action for all the bots are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the failue threshold edit actions

    @CONFIG
    Scenario Outline: Verify the Email configuration - EC functionalities are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify Email config - EC search and edit actions

    @CONFIG
    Scenario Outline: Verify the Email configuration - Plano functionalities are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify Email config - Plano search and edit actions


    @CONFIG
    Scenario Outline: Verify the Invalid keyword search for Email configuration - EC & Plano are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then search for invalid keyword and verify the response

