/// <reference types="cypress" />
Cypress.Commands.add('getByTestId', <Subject = any>(id: string) => {
  return cy.get<Subject>(`[data-testid='${id}']`);
});
