# Admin — Functional Test Cases

**Test Case ID:** TS01  
**Device:** Desktop Web  
**Test By:** Porntep  
**Date:** 2026-01-20  

---

## Admin Login

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC01 | Open website on desktop | Go to Admin Login page | Positive | Pass | 2026-01-20 |
| TS01_TC02 | Input invalid username or password then click “เข้าสู่ระบบ” | Show popup “ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง” | Negative | Pass | 2026-01-20 |
| TS01_TC03 | Login with valid username and password | Show popup “เข้าสู่ระบบผู้ดูแลสำเร็จ” | Positive | Pass | 2026-01-20 |
| TS01_TC04 | Click “ยืนยัน” | Go to Admin Dashboard page | Positive | Pass | 2026-01-20 |

---

## Manage Account — Search Account

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC05 | Input invalid account number then search | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC06 | Input invalid name then search | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC07 | Input invalid CID then search | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC08 | Input invalid email then search | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC09 | Input invalid phone then search | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC10 | Input valid account number | Show search result | Positive | Pass | 2026-01-20 |
| TS01_TC11 | Input valid name | Show search result | Positive | Pass | 2026-01-20 |
| TS01_TC12 | Input valid CID | Show search result | Positive | Pass | 2026-01-20 |
| TS01_TC13 | Input valid email | Show search result | Positive | Pass | 2026-01-20 |
| TS01_TC14 | Input valid phone | Show search result | Positive | Pass | 2026-01-20 |
| TS01_TC15 | Click clear icon | Clear search data | Positive | Pass | 2026-01-20 |

---

## Manage Account — Freeze Account

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC16 | Click “อายัดบัญชี” | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC17 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC18 | Click “ยืนยัน” | Account is frozen | Positive | Pass | 2026-01-20 |

---

## Manage Account — Unfreeze Account

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC19 | Click “ปลดอายัดบัญชี” | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC20 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC21 | Click “ยืนยัน” | Account is unfrozen | Positive | Pass | 2026-01-20 |

---

## Search Transaction

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC22 | Invalid Transaction ID | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-20 |
| TS01_TC23 | Select start date only | Show results from start date to latest | Positive | Pass | 2026-01-27 |
| TS01_TC24 | Select end date only | Show results from first entry to end date | Positive | Pass | 2026-01-27 |
| TS01_TC25 | Start date < End date | Show results within range | Positive | Pass | 2026-01-27 |
| TS01_TC26 | Start date > End date | Show popup “ไม่พบบัญชีที่ค้นหา” | Negative | Pass | 2026-01-27 |
| TS01_TC27 | Invalid Transaction ID | Show not found | Negative | Pass | 2026-01-27 |
| TS01_TC28 | Select “ทั้งหมด” | Show all transactions | Positive | Pass | 2026-01-26 |
| TS01_TC29 | Select “รับเงิน” | Show receive transactions | Positive | Pass | 2026-01-27 |
| TS01_TC30 | Select “โอนเงิน” | Show transfer transactions | Positive | Pass | 2026-01-27 |
| TS01_TC31 | Select “ฝากเงิน” | Show deposit transactions | Positive | Pass | 2026-01-27 |
| TS01_TC32 | Select “ถอนเงิน” | Show withdraw transactions | Positive | Pass | 2026-01-28 |
| TS01_TC33 | Input valid Transaction ID | Show result | Positive | Pass | 2026-01-27 |
| TS01_TC34 | Status “ทั้งหมด” | Show all status | Positive | Pass | 2026-01-27 |
| TS01_TC35 | Status “สำเร็จ” | Show success status | Positive | Pass | 2026-01-27 |
| TS01_TC36 | Status “ทั้งหมด” | Show all status | Positive | Pass | 2026-01-27 |
| TS01_TC37 | Click clear icon | Clear search data | Positive | Pass | 2026-01-20 |

---

## Cancel Transaction — Deposit (Active Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC38 | Click “ยกเลิกรายการ” (Deposit) | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC39 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC40 | Click “ยืนยัน” | Deduct deposited money | Positive | Pass | 2026-01-20 |

## Cancel Transaction — Deposit (Frozen Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|--------------------|----------------|--------|--------|------------|
| TS01_TC41 | Click “ยกเลิกรายการ” (Deposit – Frozen Account) | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC42 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC43 | Click “ยืนยัน” | Deduct deposited amount from account | Positive | Pass | 2026-01-20 |
---

## Cancel Transaction — Transfer (Active Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|----------------------|-----------------|------|--------|------|
| TS01_TC44 | Cancel transfer | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC45 | Click cancel | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC46 | Click confirm | Refund to source account | Positive | Pass | 2026-01-20 |
---
## Cancel Transaction — Transfer (Frozen Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|--------------------|----------------|--------|--------|------------|
| TS01_TC47 | Click “ยกเลิกรายการ” (Transfer – Frozen Account) | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC48 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC49 | Click “ยืนยัน” | Refund transfer amount to source account | Positive | Pass | 2026-01-20 |

---

## Cancel Transaction — Withdraw (Active Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|--------------------|----------------|--------|--------|------------|
| TS01_TC50 | Click “ยกเลิกรายการ” (Withdraw – Active Account) | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC51 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC52 | Click “ยืนยัน” | Refund withdrawn amount back to account | Positive | Pass | 2026-01-20 |

---

## Cancel Transaction — Withdraw (Frozen Account)

| Test Case ID | Action / Description | Expected Result | Type | Status | Date |
|--------------|--------------------|----------------|--------|--------|------------|
| TS01_TC53 | Click “ยกเลิกรายการ” (Withdraw – Frozen Account) | Show confirmation popup | Positive | Pass | 2026-01-20 |
| TS01_TC54 | Click “ยกเลิก” | Close popup | Negative | Pass | 2026-01-20 |
| TS01_TC55 | Click “ยืนยัน” | Refund withdrawn amount back to account | Positive | Pass | 2026-01-20 |
