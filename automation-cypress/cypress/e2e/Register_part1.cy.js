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

  const clickNextShouldFail = (field) => {
    cy.get(".next-btn").click();
    cy.get("#memberId").should("be.visible");
    cy.takeScreenshotSimple(field, "Register_Negative", "FULL");
  };

  // ================= INVALID CASES (เพิ่มที่นี่ที่เดียว) =================
  const INVALID = {
    memberId: () => cy.get("#memberId").clear().type("123"),
    alreadymemberId: () => cy.get("#memberId").clear().type("1349901284681"),
    titel: ()=> cy.get("#prefixTh").clear(),
    ftname: () =>cy.get("#firstNameTh").clear().type("porntep"),
    ltname: ()=> cy.get("#lastNameTh").clear().type("toaditep"),
    fename: () =>cy.get("#firstNameEn").clear().type("พพ"),
    lename: () => cy.get("#lastNameEn").clear().type("พพ"),
    email: () => cy.get("#email").clear().type("xye@kai.com"),
    birthDate: () => setBirthday(2,"january", 1946),
    phone: () => cy.get("#phoneNumber").clear().type("1235"),
    username: () => cy.get("#username").clear().type("a"),
    alreadyusername: () => cy.get("#username").clear().type("porntep"),
    alreadyusername: () => cy.get("#username").clear().type("สุนท"),
   thaipassword:()=> cy.get("#password").clear().type("กขค"),
    password: () => {
      cy.get("#password").clear().type("123");
      cy.get("#confirmPassword").clear().type("123");
    },

    confirmPassword: () =>
      cy.get("#confirmPassword").clear().type("DIFF1111aA#"),
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
