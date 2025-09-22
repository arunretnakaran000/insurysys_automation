Feature: Tenant Primary Information details to be checked

    Scenario: Verify tenant primary information save functionality
        Given I am logged in as a valid user
        When I navigate to the Tenant Primary Information page
        And I update the tenant's primary information
        Then I should see a success message indicating the information was saved