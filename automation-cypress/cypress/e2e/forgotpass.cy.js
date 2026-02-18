//   it('It should reset success', () => {
//         cy.visit("http://localhost:3000/");
//     cy.get('.login-forgot > .link-button').click()
//     cy.get('.modal-card > :nth-child(2) > .login-input').type("porntepr2@gmail.com")
//     cy.get(':nth-child(3) > .login-input').type("111111")
//     cy.get(':nth-child(4) > .login-input').type("22222222aA#")
//     cy.get(':nth-child(5) > .login-input').type("22222222aA#")
//     cy.get('.modal-card > .login-button').click()
//   })

const fillValidPart1 = () => {
  cy.get(".login-forgot > .link-button").click();
  cy.get(".modal-card > :nth-child(2) > .login-input").type("x2yz@hotmail.com");
  cy.get(":nth-child(3) > .password-wrap > .login-input").type("123456");
  cy.get(":nth-child(4) > .password-wrap> .login-input").type("11111111aA#");
  cy.get(":nth-child(5) > .password-wrap> .login-input").type("11111111aA#");
};
const clickNextShouldFail = (field) => {
  cy.get('.modal-card > .login-button').click()
  cy.takeScreenshotSimple(field, "forgot pass negative", "FULL");
};

// ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
const INVALID = {
  email: () =>
    cy.get(".modal-card > :nth-child(2) > .login-input").clear().type("yz@gmail.com"),
  PIN: () =>
    cy.get(":nth-child(3) > .password-wrap > .login-input").clear().type("111112"),
  password: () =>
    cy.get(":nth-child(4) > .password-wrap > .login-input").clear().type("q1111111aA#"),
   notpassword: () =>
    cy.get(":nth-child(4) > .password-wrap > .login-input").clear().type("111aA#"),
  confirmpassword: () =>
    cy.get(":nth-child(5) > .login-input").clear().type("a1111111aA#"),
};

// list จะมาจาก INVALID อัตโนมัติ
const fieldsToTest = Object.keys(INVALID);

const makeInvalid = (field) => {
  const fn = INVALID[field];
  if (!fn) throw new Error("Unknown field: " + field);
  fn();
};
// ================= Tests =================
beforeEach(() => {
  cy.visit("http://localhost:3001/");
  cy.get(".loading").should("not.exist");
});

fieldsToTest.forEach((field) => {
  it(`Part1: only ${field} invalid (others valid)`, () => {
    fillValidPart1();
    makeInvalid(field);

    cy.get("body").click(0, 0);
    clickNextShouldFail(field);
  });
});
