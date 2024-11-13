describe('Job Search App', () => {
  it('should allow the user to search for jobs and view job details', () => {
    cy.visit('/');
    
    cy.contains('Jobs').click();

    cy.get('.job-item').should('have.length.greaterThan', 0);

    cy.get('.job-item').first().click();

    cy.get('h2').should('exist');
  });
});
