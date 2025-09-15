Feature: Dashboard Queue module functionalities for APM application

    @APMQUEUE
    Scenario Outline: Verify the Queue filter search for APM is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then apply filter and verify the search result for queue

    @APMQUEUE
    Scenario Outline: Verify the Queue valid keyword filter search for APM is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then apply filter with valid keyword and verify the result

    @APMQUEUE
    Scenario Outline: Verify the Queue random keyword filter search for APM is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then apply filter with random keyword and verify the result

    @APMQUEUE
    Scenario Outline: Verify if the filter is cleared when user switch different menus after the search
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then user apply the filter with keyword and go to other page and back to Queue page


    @APMQUEUE
    Scenario Outline: Verify if the view history functionality is working as expected or not
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then user click on view history and sort all the old data


    @APMQUEUE
    Scenario Outline: Verify if the view history disabled functionality is working as expected or not
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then user click on view history to disable the feature


    @APMQUEUE
    Scenario Outline: Verify weather the export to excel feature is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then user click on export to excel and excel should downloaded successfully


    @APMQUEUE
    Scenario Outline: Verify weather the export to excel with no data is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then user click on export to excel with no data and validation error should displayed