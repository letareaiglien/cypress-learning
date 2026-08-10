describe('My First Cypress Test', () => {
  it('opens Example website', () => {
    cy.visit('/')

    cy.title().should('include', 'Example')
  })
})