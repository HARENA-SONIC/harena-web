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
      '**patrimoines?page=1&page_size=10',
      listMock(patrimoineMocks)
    ).as('getPatrimoines');
    cy.intercept('PUT', '**patrimoines', MUTATION_PATRIMOINE).as(
      'putPatrimoines'
    );
    cy.intercept(
      'GET',
      `**/patrimoines/${patrimoineMocks[0].nom}`,
      patrimoineMocks[0]
    ).as('getOnePatrimoine');
    cy.intercept(
      'GET',
      `**/patrimoines/${patrimoineMocks[0].nom}/possessions?page=1&page_size=10`,
      []
    );
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

  it('patrimoine.edit', () => {
    cy.visit('/patrimoines');
    cy.wait('@getPatrimoines');
    cy.get('tbody tr').first().click();
    cy.wait('@getOnePatrimoine');
    cy.getByTestId('edit-button').click();
    cy.getByTestId('t-input').type(MUTATION_PATRIMOINE.data[0].t!);
    cy.getByTestId('possesseur-input')
      .clear()
      .type(MUTATION_PATRIMOINE.data[0].possesseur!.nom!);
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained')
      .as('saveButton')
      .click();
    cy.wait('@putPatrimoines').then((intercept) => {
      const body = intercept.request.body.data[0];
      expect(body).to.be.deep.equal({
        ...MUTATION_PATRIMOINE.data[0],
        id: patrimoineMocks[0].nom,
        nom: patrimoineMocks[0].nom,
        valeur_comptable: patrimoineMocks[0].valeur_comptable,
      });
    });
  });

  it('patrimoine.show', () => {
    cy.visit('/patrimoines');
    cy.wait('@getPatrimoines');
    cy.get('tbody tr').first().click();
    cy.contains(patrimoineMocks[0].nom!);
  });
});
