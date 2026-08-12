const applicants = require('../../fixtures/applicants.json')

describe('Pelamar Staff', () => {

  applicants.forEach((applicant) => {
  it(`sukses menambah pelamar - ${applicant.nama}`, () => {
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
    cy.get('#no_ktp').type(applicant.noKtp)
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
  cy.get('#nama_input').type(applicant.nama)
    cy.get('#radioL').check({ force: true })
    cy.get('#no_hp1').type(applicant.noHp)
    cy.get('#email').type(applicant.email)

    const tanggallahir = applicant.tanggalLahir

    cy.get('#tanggal_lahir_input').click()
    cy.get('.flatpickr-monthDropdown-months')
      .select('June')
    cy.get('.cur-year')
      .clear()
      .type('2000')
    cy.get(`.flatpickr-day[aria-label="${tanggallahir}"]`)
      .click()
    cy.get('#height').type(applicant.tinggi)
    cy.get('#weight').type(applicant.berat)

    //alamat KTP
    cy.get('#provinsi').select(applicant.provinsi)
    cy.get('#kota').select(applicant.kota)
    cy.get('#kecamatan').select(applicant.kecamatan)
    cy.get('#kelurahan').select(applicant.kelurahan)
    cy.get('#jalan').type(applicant.jalan)

    //alamat domisili sama dengan KTP
    cy.get('#checkbox_alamat').check({ force: true })

    cy.get('#agama').select(applicant.agama)
    cy.get('#selectTribe')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field').type(applicant.suku)
    cy.contains('.select2-container--open .select2-results__option',  applicant.suku

    )
      .click({ force: true })
    cy.get('#maritalY').check({ force: true })

    //pendidikan
    cy.get('#pendidikan').select(applicant.pendidikan)
    cy.get('#selectInstitusi')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field')
      .type(applicant.institusi)
    cy.contains('.select2-container--open .select2-results__option', applicant.institusi)
      .click({ force: true })

    cy.get('#selectProgramStudi')
      .parent()
      .find('.select2-selection')
      .scrollIntoView()
      .click({ force: true })
    cy.get('.select2-container--open .select2-search__field')
      .type(applicant.programStudi)
    cy.contains('.select2-container--open .select2-results__option', applicant.programStudi)
      .click({ force: true })

    cy.get('#lulus').select(applicant.tahunLulus)

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
})
