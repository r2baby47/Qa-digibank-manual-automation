describe("search transaction", () => {
  beforeEach(() => {
    
    cy.visit("http://localhost:3001/register");
    cy.user_login("porntep1", "11111111aA#");
    cy.get(".language-select").select("English");
    cy.contains(/^(ธุรกรรม|Transactions)$/).click();
    cy.get(".account-selector > :nth-child(1)").click();
    cy.wait(1000);
  });


  it("TS06_TC05 Select Start date and not select end date", () => {
    cy.selectDate(/^(จากวันที่|From date)$/, 1, 1, 2026);
    click_cap()
  });
  it("TS06_TC06 Not Select Start date and select end date", () => {
    cy.selectDate(/^(ถึงวันที่|To date)$/, 1, 2, 2026);
    click_cap()
  });
  it("TS06_TC07 Select Start date <  end date", () => {
    cy.selectDate(/^(จากวันที่|From date)$/, 1, 1, 2026);
    cy.selectDate(/^(ถึงวันที่|To date)$/, 1, 2, 2026);
    click_cap()
  });
  it("TS06_TC08 Select Start date > end date", () => {
    cy.selectDate(/^(จากวันที่|From date)$/, 1, 3, 2026);
    cy.selectDate(/^(ถึงวันที่|To date)$/, 1, 2, 2026);
    click_cap()
  });
  it("TS06_TC11 Select Transfer", () => {
    cy.get(".transaction-filters .filter-left")
    .contains("button.filter-btn", /^(โอนเงิน|Transfer)$/)
    .click();
    click_cap()
  });
  it("TS06_TC12 Select Deposit", () => {
    cy.get(".transaction-filters .filter-left")
    .contains("button.filter-btn", /^(ฝากเงิน|Deposit)$/)
    .click();
    click_cap()
  });
  it("TS06_TC13 Select Withdraw", () => {
    cy.get(".transaction-filters .filter-left")
    .contains("button.filter-btn", /^(ถอนเงิน|Withdraw)$/)
    .click();
    click_cap()
  });
   it("TS06_TC14 Input valid Transaction ID ", () => {
    cy.get('.search-input').type("2026021113521323006670")
    click_cap()
  });
  it("TS06_TC15 Input valid Transaction categoty ", () => {
    cy.get('.search-input').type("Deposit")
    click_cap()
  });
  it("TS06_TC16 Input valid amount ", () => {
    cy.get('.search-input').type("20")
    click_cap()
  });
  const click_cap = () => {
    cy.contains(/^(ค้นหา|Search)$/).click();
    // cy.takeScreenshotSimple(field, "Search &report", "FULL");
  };
  
});