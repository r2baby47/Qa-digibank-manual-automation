# Transfer Money ($)

**Test Case ID:** TS05  
**Device:** Desktop Web  
**Test By:** Porntep  
**Date:** 2026-01-20  

---

## Transfer Testcase

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS05_TC01 | Login success | Go to “หน้าแรก” page | Positive | Pass |
| TS05_TC02 | Click “โอนเงิน” | Go to “โอนเงิน” page | Positive | Pass |
| TS05_TC03 | Select source account then click “ถัดไป” (no input other fields) | “ถัดไป” button cannot be clicked | Negative | Pass |
| TS05_TC04 | Invalid destination account + no amount then click “ถัดไป” | “ถัดไป” button cannot be clicked | Negative | Pass |
| TS05_TC05 | Input invalid destination account (โอนเข้าบัญชีตนเอง) | Show error “ไม่สามารถโอนเงินเข้าบัญชีของตนเองได้” | Negative | Pass |
| TS05_TC06 | Invalid amount (≤ 0) then click “ถัดไป” | Show error “จำนวนเงินที่ต้องการโอนไม่สามารถติดลบได้” | Negative | Pass |
| TS05_TC07 | Invalid amount (> 1,000,000) | Show error “จำนวนเงินต้องไม่เกิน 1,000,000 ฿” | Negative | Pass |
| TS05_TC08 | Invalid amount (ตัวอักษร / อักขระพิเศษ) | System cannot input invalid characters | Negative | Pass |
| TS05_TC09 | Amount greater than account balance | Show error “บัญชีของคุณมีจำนวนเงินไม่เพียงพอในการทำรายการ” | Negative | Pass |
| TS05_TC10 | Valid amount but invalid destination account | Show transaction info on right side | Positive | Pass |
| TS05_TC11 | Click “ยืนยันโอนเงิน” | Show popup PIN | Positive | Pass |
| TS05_TC12 | Enter invalid PIN | Show popup “เกิดข้อผิดพลาดเกิดขึ้น” | Negative | Pass |
| TS05_TC13 | Enter valid PIN after invalid attempt | Show popup “เกิดข้อผิดพลาดเกิดขึ้น” | Negative | Pass |
| TS05_TC14 | Input all valid then click “ถัดไป” | Show transaction info on right side | Positive | Pass |
| TS05_TC15 | Click “ยืนยันโอนเงิน” | Show popup PIN | Positive | Pass |
| TS05_TC16 | Enter valid PIN | Show popup “ทำรายการโอนเงินสำเร็จ” | Positive | Pass |
