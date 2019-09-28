// This test will pass
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

// This test will fail
describe('My Second Test', function() {
  it('Does not do much!', function() {
    expect(true).t0.equal(false)
  })
})

// Visit the API test
describe('API link test', function() {
  it('Visits the StarWars API', function() {
    cy.visit('https://swapi.co/api/people/')
  })
})

// Query for an Element
describe('API link test', function() {
  it('finds the content OPTIONS', function() {
    cy.visit('https://swapi.co/api/people/')

    cy.contains('OPTIONS')
  })
})

// Click an Element
describe('API link test', function() {
  it('clicks the link OPTIONS', function() {
    cy.visit('https://swapi.co/api/people/')

    cy.contains('OPTIONS').click()
  })
})