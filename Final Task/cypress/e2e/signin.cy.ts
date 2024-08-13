describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('davewaanofii@gmail.com')
    cy.get('#password').type('12345678')

    cy.get('#submit').click()
    cy.wait(5000)

    cy.url().should('include', '/jobs')
    
    
    cy.get('#description').click()
    
    cy.wait(5000)
    cy.url().should('include', '/description')

  })
})