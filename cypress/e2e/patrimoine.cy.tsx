import { patrimoineMocks } from '../fixtures/mocks';
import { listMock } from '../fixtures/mocks/utils';

describe('patrimoine', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '/RCKPRINCY/hei-ricka/1.0.1/patrimoines?page=1&page_size=10',
      listMock(patrimoineMocks)
    ).as('getPatrimoines');
  });

  it('patrimoine.list', () => {
    cy.visit('/patrimoines');
    cy.wait('@getPatrimoines');
    cy.get('tbody tr').should('have.length', patrimoineMocks.length);
    cy.contains(patrimoineMocks[0].nom!);
  });

  it('patrimoines.create: cannot create if some fields are missing', () => {
    cy.visit('/patrimoines');
    cy.get('.RaList-actions > .MuiToolbar-root').click();
    cy.getByTestId('nom-input').type('new');
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
    cy.contains('This field is required !');
  });
});
