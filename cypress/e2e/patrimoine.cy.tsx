import { GetPatrimoines200Response } from '@harena-com/typescript-client';
import { patrimoineMocks } from '../fixtures/mocks';
import { listMock } from '../fixtures/mocks/utils';

const MUTATION_PATRIMOINE: Required<GetPatrimoines200Response> = {
  data: [
    {
      nom: 'mutation patrimoine',
      possesseur: { nom: 'mutation name' },
      t: '2024-08-15',
      valeur_comptable: 0,
    },
  ],
};

describe('patrimoines', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '/RCKPRINCY/hei-ricka/1.0.1/patrimoines?page=1&page_size=10',
      listMock(patrimoineMocks)
    ).as('getPatrimoines');
    cy.intercept(
      'PUT',
      '/RCKPRINCY/hei-ricka/1.0.1/patrimoines',
      MUTATION_PATRIMOINE
    ).as('putPatrimoines');
  });

  it.skip('patrimoines.list', () => {
    cy.visit('/patrimoines');
    cy.wait('@getPatrimoines');
    cy.get('tbody tr').should('have.length', patrimoineMocks.length);
    cy.contains(patrimoineMocks[0].nom!, { timeout: 5_000 });
  });

  it('patrimoines.create.error', () => {
    cy.visit('/patrimoines');
    cy.get('.RaList-actions > .MuiToolbar-root').click();
    cy.getByTestId('nom-input').type('new');
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();
    cy.contains('This field is required !');
  });

  it('patrimoines.create.success', () => {
    cy.visit('/patrimoines');
    cy.get('.RaList-actions > .MuiToolbar-root').click();
    cy.getByTestId('nom-input').type(MUTATION_PATRIMOINE.data[0].nom!);
    cy.getByTestId('t-input').type(MUTATION_PATRIMOINE.data[0].t!);
    cy.getByTestId('possesseur-input').type(
      MUTATION_PATRIMOINE.data[0].possesseur!.nom!
    );
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click();

    cy.wait('@putPatrimoines').then((intercept) => {
      const body = intercept.request.body;
      expect(body).to.be.deep.equal(MUTATION_PATRIMOINE);
    });
  });
});
