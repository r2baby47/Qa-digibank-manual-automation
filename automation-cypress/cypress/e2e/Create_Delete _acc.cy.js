const fillValidPart1 = () => {
  cy.contains(".nav-center .nav-item", "ธุรกรรม").click();
  cy.get('.nav-center > [href="/transactions"]').click(); //ช้ได้เหมือนกันแต่ถ้าเปลี่ยนตำแหน่งน่าจะพังมั้ง
  cy.get(".open-account-btn").click();
  cy.get("#memberIdInput").type("1349901284681");
  cy.get("#pinInput").type("123456");
};
const clickNextShouldFail = (field) => {
    cy.get(".next-btn").click();
  cy.takeScreenshotSimple(field, "Create Account", "viewport");
};
// ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
const INVALID = {

  noinputCID:()=>cy.get("#memberIdInput").clear(),
  invalidCID_Nopin:()=>{
    cy.get("#memberIdInput").clear().type("1348901284681");
    cy.get("#pinInput").clear()
  },
   invalidCID_invalidpin:()=>{
    cy.get("#memberIdInput").type("1349921284681");
    cy.get("#pinInput").clear().type("789456")
  },
  validCID_invalidpin:()=>{
    cy.get("#memberIdInput").type("1349901284681");
    cy.get("#pinInput").clear().type("787854")
  },
  NOCID_validpin:()=>{
    cy.get("#memberIdInput").clear();
    cy.get("#pinInput").clear().type("123456")
  },
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
  cy.contains(".nav-center .nav-item", "ธุรกรรม").click();
  cy.get('.nav-center > [href="/transactions"]').click(); //ช้ได้เหมือนกันแต่ถ้าเปลี่ยนตำแหน่งน่าจะพังมั้ง
  cy.get(".open-account-btn").click();
  cy.get(".loading").should("not.exist");
});

fieldsToTest.forEach((field) => {
  it(`Part1: only ${field} invalid (others valid)`, () => {
   
    makeInvalid(field);

    cy.get("body").click(0, 0);
    clickNextShouldFail(field);
  });
});
// it('Should Delete account', () => {
//   cy.get('[href="/check-account"]').click()

//   cy.get('.account-list')
//     .children()
//     .last()
//     .within(() => {
//       cy.get('.delete-btn').click()
//     })
//     cy.wait(1000)
//     cy.get('.modal-actions .delete-btn').click()
// })
