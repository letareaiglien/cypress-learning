describe('Pelamar Staff', () => {
  it('sukses menambah pelamar lowongan staff', () => {
    cy.visit('/')

    cy.contains('button', 'Saya Mengerti')
        .should('be.visible')
        .click()
  })
})