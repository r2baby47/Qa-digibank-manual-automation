
Cypress.Commands.add('takeScreenshotSimple', (step, dir, mode = "VIEWPORT") => {
  const capture = mode === "FULL" ? "fullPage" : "viewport";

  // ให้ชื่อ screenshot มี path โฟลเดอร์รวมอยู่ด้วย
  const name = dir ? `${dir}/${step}` : `${step}`;

  cy.screenshot(name, { capture });
});
Cypress.Commands.add('takeScreenshotWith_TS_name', (step, dir, mode = "VIEWPORT") => {
  const capture = mode === "FULL" ? "fullPage" : "viewport";

  // ถ้าไม่ส่ง step มา → ใช้ชื่อ test อัตโนมัติ
  const testName = Cypress.currentTest.title
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]/g, "");

  const finalName = step
    ? (dir ? `${dir}/${step}` : step)
    : (dir ? `${dir}/${testName}` : testName);

  cy.screenshot(finalName, { capture });
});

//------------------------------------------------------------------------------------------------------------------------------------------------


import './digibank_command'