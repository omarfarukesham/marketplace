/// <reference types="cypress" />

describe('cart drawer', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('*', (req) => {
      req.headers['Deviceid'] = Cypress.env('Deviceid');
    });
  });

  it('should show 1 after adding one item to cart', () => {
    cy.get(`.gap-2\\.5 > :nth-child(2) > .relative > .absolute`).first().should('have.text', '0');

    cy.get('.grid-flow-col > :nth-child(1) > .justify-between > .group\\/cart').first().click();

    cy.intercept('**/cart/add').as('addToCart');

    cy.wait('@addToCart').then(() => {
      cy.get('.md\\:h-11 > .absolute').invoke('text').then(parseInt).should('be.greaterThan', 0);
    });
  });
});
