describe('Pelamar Staff', () => {
  it('sukses menambah pelamar lowongan staff', () => {
    cy.visit('/')
// konfirmasi pelamar
    cy.contains('button', 'Saya Mengerti')
        .should('be.visible')
        .click()

// cek nomor KTP
    cy.contains('Job Vacancy').click()
    cy.url()
        .should('include', '/jobs')
    cy.contains('span.vacancy-badge', 'Staff')
        .should('be.visible')
        .click()
    cy.url()
        .should('include', '/jobs/staff')
    cy.get('#no_ktp').type('8234723811240098')
    cy.contains('button', 'Kirim')
        .click()

  // pilih lowongan
    cy.get('#placements').select('Jakarta 1')
    cy.get('#job_list')
        .contains('h2', 'SENIOR MEKANIK (ACL)')
        .closest('.container')
        .contains('a', 'Apply')
      .click()  

  // isi form cv online
    cy.get('#nama_input').type('George')
    cy.get('#radio-L').click()
    cy.get('#no_hp1').type('087644310987')
    cy.get('#email').type('george@automatictesting.com')
    
    const tanggallahir = 'June 1, 2000'

    cy.get('#tanggal_lahir_input').click()
    cy.get('.flatpickr-monthDropdown-months')
      .select('June')
    cy.get('.cur-year')
      .clear()
      .type('2000')
    cy.get(`.flatpickr-day[aria-label="${tanggallahir}"]`)
      .click()
  })
})