import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Scenario: Navigating to main page
// Given I open the "/" page
// And I see "About Page" in the "h1"

Given("I open the {string} page", (path: string) => {
  cy.visit(path);
});

Then("I see {string} in the {string}", (text: string, element: string) => {
  cy.get(element).contains(text);
});
