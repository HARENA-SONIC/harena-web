describe('dummy', () => {
  it('test', () => {
    cy.visit('/');
    cy.get('tbody tr').should('have.length', 5);
    cy.contains('Dummies');
    cy.contains('name1');
  });
});
