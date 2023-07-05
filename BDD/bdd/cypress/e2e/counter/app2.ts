import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the {string} page", (path: string) => {
  cy.visit(path);
});

When("I click on the {string}", (element:string) => {
  cy.get(element).click()
});

Then("I see {string} in the element {string}", (text: string, element: string) => {
  cy.get(element).contains(text);
});