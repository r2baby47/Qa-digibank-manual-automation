describe('Login test ', () => {
  it('Should login pass', () => {
    cy.visit("http://localhost:3000/")
    cy.get('#username').type('porntep')
    cy.get('#password').type('11111111aA#')
    cy.get('.login-button').click()
    cy.wait(2000)
    cy.get('.next-btn').click()
  })
})