import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Given I open the "/" page
// When I click on the "about" link
// Then I see "about" in the url
// And I see "About Page" in the "h1"

Given("I open the {string} page", (path: string) => {
  cy.visit(path);
});

When("I click on the {string} link", (link:string) => {
  cy.get(`a[href*="${link}"]`).click()
});

Then("I see {string} in the url", (path:string) => {
  cy.url().should('include', path)
});

Then("I see {string} in the {string}", (text: string, element: string) => {
  cy.get(element).contains(text);
});
