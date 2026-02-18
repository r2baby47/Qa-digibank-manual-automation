describe("Register Test pass scenario", () => {
  it("should register successfully", () => {
    cy.visit("http://localhost:3001/register");
    cy.get(".loading").should("not.exist");

    // ===== Part 1 : Personal info =====
    cy.get("#memberId").type("1521000116291");
    cy.get("#prefixTh").select("นาย");
    cy.get("#firstNameTh").type("เทส");
    cy.get("#lastNameTh").type("หนึ่ง");
    cy.get("#firstNameEn").type("porntep");
    cy.get("#lastNameEn").type("toaditep");
    cy.get("#email").type("xyz@hotmail.com");

    // Birth date
    cy.contains("label", "วันเกิด")
      .parent()
      .within(() => {
        cy.contains("option", "วัน").parent("select").select("2");

        cy.contains("option", "เดือน").parent("select").select("1");
        
        cy.contains("option", "ปี").parent("select").select("1946");
      });

    cy.get("#phoneNumber").type("0999999999");
    cy.get("#username").type("porntep12");
    cy.get("#password").type("11111111aA#");          
    cy.get("#confirmPassword").type("11111111aA#");

    
    cy.get(".next-btn").click();
    cy.takeScreenshotSimple("part2", "Register_Negative2", "FULL");
    // ===== Part 2 : Address =====
    cy.get("#houseNumber").type("20");
    cy.get("#soi").type("-");
    cy.get("#road").type("road 1");
    cy.get("#province").select("อุบลราชธานี — Ubon Ratchathani");
    cy.get("#district").select("เมืองอุบลราชธานี — Mueang Ubon Ratchathani");
    cy.get("#subDistrict").select("ในเมือง — Nai Mueang");

    cy.get(".next-btn").click();

    // ===== PIN =====
    const pin = ["1", "2", "3", "4", "5", "6"];

    pin.forEach((digit, index) => {
      cy.get(`[aria-label="PIN digit ${index + 1}"]`).type(digit);
    });

    cy.get(".next-btn").click();

    // ===== Confirm PIN =====
    pin.forEach((digit, index) => {
      cy.get(`[aria-label="Confirm PIN digit ${index + 1}"]`).type(digit);
    });

    cy.get(".next-btn").click();
  });
});
