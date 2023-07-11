/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; // have to import these, so that cypress can recognise cucumber keywords

Given("I am in a Clara Landing page", () => {
    cy.visit('https://www.clara.com/es-mx/');
});

When('I click in countries menu dropdown', () => {
    cy.get(".menu-language").realHover('mouse');
});

And('select a {string} country', (country_value) => {
    cy.contains(country_value).click();
});

Then('the menu shows the {string} selected', (selectedCountry_value) => {
    cy.get('.menu-language > div > a > span').should('have.text', selectedCountry_value)
});
