
// ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
const INVALID = {
  
    sameaccount:()=> cy.get(':nth-child(3) > .deposit-input').type("756-0-61234-4"),
  oneM_amount:()=>cy.get(':nth-child(4) > .deposit-input').clear().type("1000001"),
  zeroamount:()=>cy.get(':nth-child(4) > .deposit-input').clear().type("0"),
  neagtiveamount:()=>cy.get(':nth-child(4) > .deposit-input').clear().type("-20"),
  nohavemuchamount:()=>cy.get(':nth-child(4) > .deposit-input').clear().type("600000") ,
  
};

const clickNextShouldFail = (field) => {
  cy.get('.next-btn')
  cy.takeScreenshotSimple(field, "Transfer", "FULL");
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

  cy.get('[href="/transfer"]').click()
  cy.get('.deposit-select').select("337-5-60293-8")
  cy.get(':nth-child(3) > .deposit-input').type("756-0-61234-4")
  cy.get(".loading").should("not.exist");
});

fieldsToTest.forEach((field) => {
  it(`Part1: only ${field} invalid (others valid)`, () => {
    makeInvalid(field);
    
    cy.get("body").click(0, 0);
    clickNextShouldFail(field);
    
  });
});
