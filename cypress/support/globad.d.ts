export declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId<Subject>(testId: string): Chainable<Subject>;
    }
  }
}
