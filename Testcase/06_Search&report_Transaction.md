# Functional Test Cases and Results

**Test Case ID:** TS06  
**Test Case Description:** 6_Search & Report Transaction  
**Device Type:** Desktop Web  
**Test By:** Porntep  
**Test Date:** 2026-01-20  

---

## Overview Transaction Summary

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|--------------------|----------------|--------|--------|
| TS06_TC01 | Login success | Go to “หน้าแรก” page | Positive | Pass |
| TS06_TC02 | Click “ธุรกรรม” | Go to “ธุรกรรม” page | Positive | Pass |
| TS06_TC03 | View transaction summary | Display account balance and transaction summary | Positive | Pass |

---

## Search Transaction

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|--------------------|----------------|--------|--------|
| TS06_TC04 | Click “สรุปรายการ” | Go to “สรุปรายการ” page | Positive | Pass |
| TS06_TC05 | Select start date only | Show results from start date to latest entry | Positive | Pass |
| TS06_TC06 | Select end date only | Show results from first entry to end date | Positive | Pass |
| TS06_TC07 | Start date < End date | Show results within range | Positive | Pass |
| TS06_TC08 | Start date > End date | Cannot click search | Negative | Pass |
| TS06_TC09 | Click “ล้างวันที่” | Reset start and end date | Positive | Pass |
| TS06_TC10 | Input invalid Transaction ID | Show not found | Negative | Pass |
| TS06_TC11 | Select “โอนเงิน” | Show transfer transactions | Positive | Pass |
| TS06_TC12 | Select “ฝากเงิน” | Show deposit transactions | Positive | Pass |
| TS06_TC13 | Select “ถอนเงิน” | Show withdraw transactions | Positive | Pass |
| TS06_TC14 | Input valid Transaction ID | Show search result | Positive | Pass |
| TS06_TC15 | Input valid Transaction Category | Show search result | Positive | Pass |
| TS06_TC16 | Input valid amount | Show search result | Positive | Pass |

---

## Export Transaction History (Excel)

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|--------------------|----------------|--------|--------|
| TS06_TC17 | Click “ส่งออกประวัติเป็น .xlsx” | Excel file downloaded | Positive | Pass |
| TS06_TC18 | Search then click export .xlsx | Excel file downloaded | Positive | Pass |
| TS06_TC19 | Open downloaded file | File shows transaction data | Positive | Pass |

---

## Export Transaction Slip via Email

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|--------------------|----------------|--------|--------|
| TS06_TC20 | Click transaction record | Show transaction popup | Positive | Pass |
| TS06_TC21 | Click “ส่งอีเมลใบเสร็จ” | System sends transaction slip to email | Positive | Pass |
| TS06_TC22 | Open email attachment | Show password field | Positive | Pass |
| TS06_TC23 | Input invalid password | Show error “Incorrect password” | Negative | Pass |
| TS06_TC24 | Input valid password | Show transaction slip | Positive | Pass |
