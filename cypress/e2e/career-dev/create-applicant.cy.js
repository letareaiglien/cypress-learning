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
        .contains('h2', 'STORE CREW BOY (ACL)')
        .closest('.container')
        .contains('a', 'Apply')
      .click()  

  // isi form cv online
  cy.get('#nama_input').type('George Automatictest')
    cy.get('#radioL').check({ force: true })
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
    cy.get('#height').type('170')
    cy.get('#weight').type('70')

    //alamat KTP
    cy.get('#provinsi').select('DKI JAKARTA')
    cy.get('#kota').select('KOTA ADM. JAKARTA BARAT')
    cy.get('#kecamatan').select('Kalideres')
    cy.get('#kelurahan').select('PEGADUNGAN')
    cy.get('#jalan').type('Jl. Testing Alamat No. 123')

    //alamat domisili sama dengan KTP
    cy.get('#checkbox_alamat').check({ force: true })

    cy.get('#agama').select('Kristen')
    cy.get('#selectTribe')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field').type('Sunda')
    cy.contains('.select2-container--open .select2-results__option', 'Sunda')
      .click({ force: true })
    cy.get('#maritalY').check({ force: true })

    //pendidikan
    cy.get('#pendidikan').select('SMA/SMK')
    cy.get('#selectInstitusi')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field')
      .type('Universitas Indonesia')
    cy.contains('.select2-container--open .select2-results__option', 'Universitas Indonesia')
      .click({ force: true })

    cy.get('#selectProgramStudi')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field')
      .type('IPA')
    cy.contains('.select2-container--open .select2-results__option', 'IPA')
      .click({ force: true })

    cy.get('#lulus').select('2018')

    cy.get('#pernah_psikotestY').check({ force: true })

    
  // upload file
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/icon-man1.png')

    cy.contains('button', 'Kirim Lamaran')
        .click()

    cy.get('.modal-body')
        .should('be.visible')
    cy.contains('.modal-footer button', 'Ya')
        .click()

    cy.screenshot()
  })
})