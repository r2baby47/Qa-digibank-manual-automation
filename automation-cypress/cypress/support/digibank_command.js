Cypress.Commands.add('user_login', (username, password) => {
  cy.visit('http://localhost:3001/')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('.login-button').click()
  cy.wait(1000)
    cy.get('.next-btn').click()
  
    
})
Cypress.Commands.add("selectDate", (label, day, month, year) => {
  cy.contains("label", label)
    .parent()
    .within(() => {
      if (year !== undefined)
        cy.get("select").eq(2).select(String(year), { force: true });

      if (month !== undefined)
        cy.get("select").eq(1).select(String(month), { force: true });

      if (day !== undefined)
        cy.get("select").eq(0).select(String(day), { force: true });
    });
});
