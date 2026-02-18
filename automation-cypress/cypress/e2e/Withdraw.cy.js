describe('Withdraw test', () => {
  it('it should Withdraw success', () => {
    cy.get('#withdraw-amount-input').type("10")
    cy.get('.next-btn').click()
    cy.get('.transaction-summary > .deposit-actions > .next-btn').click()
    cy.get('.modal-card > .deposit-input').type(111111)
    
  })
})


// ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
const INVALID = {
  oneM_amount:()=>cy.get('#withdraw-amount-input').clear().type("1000001"),
  zeroamount:()=>cy.get('#withdraw-amount-input').clear().type("0"),
  neagtiveamount:()=>cy.get('#withdraw-amount-input').clear().type("-20")
  
};

const clickNextShouldFail = (field) => {
  cy.get('.next-btn')
  cy.takeScreenshotSimple(field, "withdraw", "FULL");
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
  cy.user_login("porntep1", "11111111aA#");
  cy.get('[href="/withdraw"]').click() 
  cy.get('.deposit-select').select("337-5-60293-8")
  cy.get(".loading").should("not.exist");
});

  fieldsToTest.forEach((field) => {
    it(`Part1: only ${field} invalid (others valid)`, () => {
      makeInvalid(field);

      cy.get("body").click(0, 0);
      clickNextShouldFail(field);
      
    });
  });

