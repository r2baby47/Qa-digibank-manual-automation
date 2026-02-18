describe("Register - negative one-by-one (like testcases)", () => {
  const URL = "http://localhost:3001/register";

  // ================= Utils =================
  const setBirthday = (day, month, year) => {
    cy.contains(/วันเกิด|birth|date of birth|birthday/i)
      .closest(".row")
      .find("select")
      .should("have.length", 3)
      .then(($sels) => {
        cy.wrap($sels[0]).select(day === "" ? "" : String(day));
        cy.wrap($sels[1]).select(month === "" ? "" : String(month));
        cy.wrap($sels[2]).select(year === "" ? "" : String(year));
      });
  };

  const fillValidPart1 = () => {
    cy.get("#memberId").clear().type("1521000116291");
    cy.get("#prefixTh").select("นาย");
    cy.get("#firstNameTh").clear().type("พรเทพ");
    cy.get("#lastNameTh").clear().type("โตอดิเทพย์");
    cy.get("#firstNameEn").clear().type("porntep");
    cy.get("#lastNameEn").clear().type("toaditep");
    cy.get("#email").clear().type("xyz@hotmail.com");
    setBirthday(2, 1, 1946);
    cy.get("#phoneNumber").clear().type("0999999999");
    cy.get("#username").clear().type("porntep111");
    cy.get("#password").clear().type("11111111aA#");
    cy.get("#confirmPassword").clear().type("11111111aA#");
    cy.get(".next-btn").click();
  };
  const fillValidPart2 = () => {
    //part2
    cy.get("#houseNumber").type("20");
    cy.get("#soi").type("-");
    cy.get("#road").type("road 1");
    cy.get("#province").select("อุบลราชธานี — Ubon Ratchathani");
    cy.get("#district").select("เมืองอุบลราชธานี — Mueang Ubon Ratchathani");
    cy.get("#subDistrict").select("ในเมือง — Nai Mueang");
  };

  const clickNextShouldFail = (field) => {
    cy.get(".next-btn").click();
    cy.takeScreenshotSimple(field, "Register_Negative2", "FULL");
  };

  // ================= INVALID CASES =================
  const INVALID2 = {
    housenumber: () => cy.get("#houseNumber").clear(),
    soi: () => cy.get("#soi").clear().type("-"),
    road: () => cy.get("#road").clear().type("road 1"),
    province: () => {
      cy.get("#province").clear();
    },
    district: () => {
      cy.get("#province").select("อุบลราชธานี — Ubon Ratchathani");
      cy.get("#district")
        .clear()
        .select("เมืองอุลราชธานี — Mueang Ubon Ratchathani");
      cy.get("#district").clear();
    },
    subdistrict: () => {
      cy.get("#province").select("อุบลราชธานี — Ubon Ratchathani");
      cy.get("#district")
        .clear()
        .select("เมืองอุบลราชธานี — Mueang Ubon Ratchathani");
      cy.get("#subDistrict").clear();
    },
  };
  // list จะมาจาก INVALID อัตโนมัติ
  const fieldsToTest = Object.keys(INVALID2);

  const makeInvalid2 = (field) => {
    const fn = INVALID2[field];
    if (!fn) throw new Error("Unknown field: " + field);
    fn();
  };

  const assertError = (field) => {
    if (field === "birthDate") {
      cy.contains(/วันเกิด|birth|date of birth|birthday/i)
        .closest(".row")
        .find("select.error")
        .should("have.length", 3);
      return;
    }
  };

  // ================= Tests =================
  beforeEach(() => {
    cy.visit(URL);
    cy.get(".loading").should("not.exist");
  });

  fieldsToTest.forEach((field) => {
    it(`Part1: only ${field} invalid (others valid)`, () => {
      fillValidPart1();
      fillValidPart2();
      makeInvalid2(field);

      cy.get("body").click(0, 0);
      clickNextShouldFail(field);
      assertError(field);
    });
  });
});
