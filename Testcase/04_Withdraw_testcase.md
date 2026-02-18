# Withdraw Money (-)

**Test Case ID:** TS04  
**Device:** Desktop Web  
**Test By:** Porntep  
**Date:** 2026-01-20  

---

## Withdraw Testcase

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS04_TC01 | Login success | Go to “หน้าแรก” page | Positive | Pass |
| TS04_TC02 | Click “ถอนเงิน” | Go to “การถอนเงิน” page | Positive | Pass |
| TS04_TC03 | Select account to withdraw | Account has been selected | Positive | Pass |
| TS04_TC04 | Try to select frozen account | System hides frozen account in selector | Positive | Pass |
| TS04_TC05 | Enter invalid amount (เกิน 1 ล้านบาท) | Show error “จำนวนเงินต้องไม่เกิน 1,000,000 ฿” | Negative | Pass |
| TS04_TC06 | Enter invalid amount (ตัวอักษร / อักขระพิเศษ) | System cannot input invalid characters | Negative | Pass |
| TS04_TC07 | Enter invalid amount (น้อยกว่าหรือเท่ากับ 0) | Show error “จำนวนเงินต้องมากกว่า 0” | Negative | Pass |
| TS04_TC08 | Enter valid amount then click “ยืนยัน” | Go to enter PIN page | Positive | Pass |
| TS04_TC09 | Enter invalid PIN | Show error “รหัสไม่ถูกต้อง” | Negative | Pass |
| TS04_TC10 | Enter valid PIN | Show popup “ทำรายการถอนเงินสำเร็จ” | Positive | Pass |
