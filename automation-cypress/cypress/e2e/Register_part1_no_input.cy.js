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
    cy.get("#memberId").clear().type("1349901284681");
    cy.get("#prefixTh").select("นาย");
    cy.get("#firstNameTh").clear().type("พรเทพ");
    cy.get("#lastNameTh").clear().type("โตอดิเทพย์");
    cy.get("#firstNameEn").clear().type("porntep");
    cy.get("#lastNameEn").clear().type("toaditep");
    cy.get("#email").clear().type("xyz@hotmail.com");
    setBirthday(2, 1, 1946);
    cy.get("#phoneNumber").clear().type("0999999999");
    cy.get("#username").clear().type("porntep1");
    cy.get("#password").clear().type("11111111aA#");
    cy.get("#confirmPassword").clear().type("11111111aA#");
  };
  
  // ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
  const INVALID = {
      memberId: () => cy.get("#memberId").clear(),
      title: ()=> cy.get("#prefixTh").select("เลือก"),
      ftname: () =>cy.get("#firstNameTh").clear(),
      ltname: ()=> cy.get("#lastNameTh").clear(),
      fename: () =>cy.get("#firstNameEn").clear(),
      lename: () => cy.get("#lastNameEn").clear(),
      email: () => cy.get("#email").clear(),
      birthDate: () => setBirthday.clear(),
      phone: () => cy.get("#phoneNumber").clear(),
      username: () => cy.get("#username").clear(),
      alreadyusername: () => cy.get("#username").clear(),
      alreadyusername: () => cy.get("#username").clear(),
      thaipassword:()=> cy.get("#password").clear(),
      password: () => {
          cy.get("#password").clear();
          cy.get("#confirmPassword").clear();
        },
        
        confirmPassword: () =>
            cy.get("#confirmPassword").clear().type("DIFF1111aA#"),
    };
    
      const clickNextShouldFail = (field) => {
        cy.get(".next-btn").click();
        cy.get("#memberId").should("be.visible");
        cy.takeScreenshotSimple(field, "Register_Negative_no_input", "FULL");
      };
    
  // list จะมาจาก INVALID อัตโนมัติ
  const fieldsToTest = Object.keys(INVALID);
  
  const makeInvalid = (field) => {
      const fn = INVALID[field];
      if (!fn) throw new Error("Unknown field: " + field);
      fn();
    };
    
    const assertError = (field) => {
        const map = {
            memberId: "#err-memberId",
            email: "#err-email",
            phone: "#err-phoneNumber",
      username: "#err-username",
      password: "#err-password",
      confirmPassword: "#err-confirmPassword",
    };

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
      makeInvalid(field);

      cy.get("body").click(0, 0);
      clickNextShouldFail(field);
      assertError(field);
    });
  });
});
