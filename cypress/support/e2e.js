// Ignore a known application exception from bootstrap_validator that occurs during test execution.
// This prevents Cypress from failing the test due to an uncaught exception from the app.
Cypress.on('uncaught:exception', (err) => {
  const message = err && err.message ? err.message : ''
  const stack = err && err.stack ? err.stack : ''

  if (
    message.includes('Maximum call stack size exceeded') &&
    stack.includes('bootstrap_validator.min.js')
  ) {
    return false
  }

  return true
})
