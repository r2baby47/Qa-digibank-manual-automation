describe('Edit account', () => {
    beforeEach(() => {
        cy.user_login("porntep","11111111aA#")
  })
    it('It should edit account success', () => {
    cy.contains('โปรไฟล์').click()
    cy.wait(500)
    cy.get('.edit-btn').click()
    cy.get('#firstNameTh').clear().type("พรเทพมม")
    cy.get('#lastNameTh').clear().type("ฟฟฟ")
    cy.get('#email').clear().type("test@gmail.com")
    cy.get('.edit-btn').click()
  })
  it('It should error on edit', () => {
    cy.contains('โปรไฟล์').click()
    cy.wait(500)
    cy.get('.edit-btn').click()
    cy.get('#firstNameTh').clear().type("พรเๆฟaaadaทพมม")
    cy.get('#lastNameTh').clear().type("ฟฟafafฟ")
    cy.get('#email').clear().type("test@gmail.com")
    cy.get('.edit-btn').click()
  })
})