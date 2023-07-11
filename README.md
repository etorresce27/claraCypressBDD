# claraCypressBDD
Interview test

Simple test scenario to validate if the countries menu dropdown works as expected.

Feature: Countries menu dropdown functionality

    Scenario Outline: Select countries in dropdown
        Given I am on a Clara Landing page
        When I click in the countries menu dropdown
        And select a <country> country
        Then the menu shows the <country> selected
        Examples:
        |country|
        |"Brasil"|
        |"Colombia"|
        |"Chile"|
        |"Uruguay"|
        |"México"|

The results yield just one error, I think it is a bug because when I select a country already displayed, the page shows an error "Page not found", the correct functionality of the system is to validate if the country is already selected and avoid just add the country url to the new page to load.

Thanks.

Eduardo Torres
