# Deposit (+)

**Test Case ID:** TS03  
**Device:** Desktop Web  
**Test By:** Porntep  
**Date:** 2026-01-20  

---

## Deposit Testcase

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS03_TC01 | Login success | Go to “หน้าแรก” page | Positive | Pass |
| TS03_TC02 | Click “ฝากเงิน” | Go to “การฝากเงิน” page | Positive | Pass |
| TS03_TC03 | Select account to deposit | Account has been selected | Positive | Pass |
| TS03_TC04 | Try to select frozen account | System hides frozen account in selector | Positive | Pass |
| TS03_TC05 | Enter invalid amount (ไม่เกิน 1 ล้านบาท) | Show error “จำนวนเงินต้องไม่เกิน 1,000,000 ฿” | Negative | Pass |
| TS03_TC06 | Enter invalid amount (ตัวอักษร / อักขระพิเศษ) | System cannot input invalid characters | Negative | Pass |
| TS03_TC07 | Enter invalid amount (น้อยกว่าหรือเท่ากับ 0) | Show error “จำนวนเงินต้องมากกว่า 0” | Negative | Pass |
| TS03_TC08 | Enter valid amount then click “ถัดไป” | Show transaction information on right side | Positive | Pass |
| TS03_TC09 | Click “ยืนยันการฝากเงิน” | Show text “ทำรายการฝากเงินสำเร็จ” | Positive | Pass |
