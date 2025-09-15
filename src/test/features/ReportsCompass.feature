Feature: Reports module Compass and Manituo functionalities for APM application

    @REPORTS
    Scenario Outline: Verify the compass and manituo filter functionlaities are working as expected
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then verify the apply filters for reports compass and manituo 
    
    @REPORTS
    Scenario Outline: Verify validation for export to excel without data
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then click to export to excel and the validation message should displayed
    
    @REPORTS
    Scenario Outline: Verify the reports menu export to excel functionality with data
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then click to export to excel and should successfully exported
    
    @REPORTS
    Scenario Outline: Verify the reports menu export to excel functionality without clicking apply filter
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then click to export to excel without click on Apply filter button
    
    @REPORTS
    Scenario Outline: Verify the reports menu individual dropdown filters are working as expected 
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then choose values from each filters and check if the search is working for respective filters or not
    
    @REPORTS
    Scenario Outline: Verify the reports menu custom date filter is working as expected
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then user fill from date and to date and it should work for valid date search
    
    @REPORTS
    Scenario Outline: Verify the reports menu custom date filter validation for empty date selection
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then user select custom and without fill dates should displayed validation error message
    
    @REPORTS
    Scenario Outline: Verify the reports menu keyword search is working as expected
        Given user navigates to the APM application to access reports menu
        When user enter valid admin login credentials to access reports
        Then user should login successfully as admin user to access reports
        When user select compass and manitou from reports menu
        Then verify user search for keyword with weekly processed date 