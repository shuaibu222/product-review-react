/// <reference types='cypress'/>

describe('product review web application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should fetch products data', () => {
    cy.request(`*[_type == "product"] | order(_createdAt desc)`).then(
      (response) => {
        expect(response).property('status').to.equal(200);
      }
    );
  });

  it('product page should have input with search funtionality and 4 latest products', () => {
    const search = 'g';

    // hero page search result
    cy.get('#hero-search-input').type(`${search}`);
    cy.get('.search-result').should('have.length.at.least', 1);

    // hero page latest product
    cy.get('.some-product .card').should('have.length', 4);
  });

  it('market page should have input with search funtionality and list of all products fetched from an api', () => {
    const search = 'o';

    // market page search result
    cy.get('.product-search #hero-search-input').type(`${search}`);
    cy.get('.product-card').should('have.length.at.least', 1);
    cy.get('.filter-active').should('have.length.at.least', 1);
  });
});
