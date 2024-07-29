import { patrimoineMocks, possessionMocks } from '../fixtures/mocks';
import { listMock } from '../fixtures/mocks/utils';

describe('patrimoines', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**patrimoines?page=1&page_size=10',
      listMock(patrimoineMocks)
    ).as('getPatrimoines');
    cy.intercept(
      'GET',
      `**/patrimoines/${patrimoineMocks[0].nom}`,
      patrimoineMocks[0]
    ).as('getOnePatrimoine');
    cy.intercept(
      'GET',
      `**/patrimoines/${patrimoineMocks[0].nom}/possessions?page=1&page_size=10`,
      possessionMocks
    ).as('getPossessions');
  });

  it('possessions.list', () => {
    cy.visit('/patrimoines');
    cy.wait('@getPatrimoines');
    cy.get('tbody tr').first().click();
    cy.wait('@getPossessions');
    cy.get('tbody tr').should('have.length', possessionMocks.data.length);
    cy.contains(possessionMocks.data[0].type!);
  });
});
