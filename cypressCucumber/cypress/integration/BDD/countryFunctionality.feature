Feature: Countries menu dropdown functionality

    Scenario Outline: Select countries in dropdown
        Given I am in a Clara Landing page
        When I click in countries menu dropdown
        And select a <country> country
        Then the menu shows the <country> selected
        Examples:
        |country|
        |"Brasil"|
        |"Colombia"|
        |"Chile"|
        |"Uruguay"|
        |"México"|