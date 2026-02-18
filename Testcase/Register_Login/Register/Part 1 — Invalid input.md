# Register / Login

**Test By:** Porntep  
**Date:** 2026-01-20  
**Device:** Desktop Web  

---

## Part 1 — Invalid Input

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC01 | Open website on desktop | Go to เข้าสู่ระบบ page | Positive | Pass |
| TS02_TC02 | Click สร้างบัญชีใหม่ | Go to สมัครสมาชิก page | Positive | Pass |
| TS02_TC03 | Click มีบัญชีอยู่แล้ว? | Go to เข้าสู่ระบบ page | Positive | Pass |
| TS02_TC05 | Input invalid CID then click ถัดไป | Show error รหัสบัตรประชาชนไม่ถูกต้อง | Negative | Pass |
| TS02_TC06 | CID already exists | Show error เลขบัตรประชาชนนี้ถูกใช้สมัครแล้ว | Negative | Pass |
| TS02_TC07 | No select title then click ถัดไป | Show error กรุณาเลือกคำนำหน้า | Negative | Pass |
| TS02_TC08 | Invalid Firstname (TH) | Show error กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น | Negative | Pass |
| TS02_TC09 | Invalid Lastname (TH) | Show error กรุณากรอกนามสกุลเป็นภาษาไทยเท่านั้น | Negative | Pass |
| TS02_TC10 | Invalid Firstname (EN) | Show error กรุณากรอกชื่อเป็นภาษาอังกฤษเท่านั้น | Negative | Pass |
| TS02_TC11 | Invalid Lastname (EN) | Show error กรุณากรอกนามสกุลเป็นภาษาอังกฤษเท่านั้น | Negative | Pass |
| TS02_TC12 | Invalid email | Show error รูปแบบอีเมลไม่ถูกต้อง | Negative | Pass |
| TS02_TC13 | Invalid birthdate | Show error ต้องมีอายุอย่างน้อย 15 ปี | Negative | Pass |
| TS02_TC14 | Invalid phone | Show error หมายเลขโทรศัพท์ไม่ถูกต้อง | Negative | Pass |
| TS02_TC15 | Invalid username | Show error ชื่อผู้ใช้ต้อง 6–20 ตัว และใช้ได้เฉพาะ a-z A-Z 0-9 _ | Negative | Pass |
| TS02_TC16 | Username already exists | Show error ชื่อผู้ใช้นี้ถูกใช้สมัครแล้ว | Negative | Pass |
| TS02_TC17 | Invalid password | Show error รหัสผ่านต้องมีตัวอักษร ตัวเลข และอักขระพิเศษ อย่างน้อย 1 ตัว | Negative | Pass |
| TS02_TC18 | Password not match confirm | Show error รหัสผ่านไม่ตรงกัน | Negative | Pass |

---

## Part 1 — Required Field Validation

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC23 | No input CID | Show error กรุณากรอกเลขบัตรประชาชน | Negative | Pass |
| TS02_TC24 | No select title | Show error กรุณาเลือกคำนำหน้า | Negative | Pass |
| TS02_TC25 | No input Thai first name | Show error กรุณากรอกข้อมูลให้ครบ | Negative | Pass |
| TS02_TC26 | No input Thai last name | Show error กรุณากรอกข้อมูลให้ครบ | Negative | Pass |
| TS02_TC27 | No input English first name | Show error กรุณากรอกข้อมูลให้ครบ | Negative | Pass |
| TS02_TC28 | No input English last name | Show error กรุณากรอกข้อมูลให้ครบ | Negative | Pass |
| TS02_TC29 | No input email | Show error กรุณากรอกอีเมล | Negative | Pass |
| TS02_TC30 | No select birthdate | Show error กรุณาเลือกวันเกิด | Negative | Pass |
| TS02_TC31 | No input phone | Show error กรุณากรอกเบอร์โทรศัพท์ | Negative | Pass |
| TS02_TC32 | No input username | Show error กรุณากรอกชื่อผู้ใช้งาน | Negative | Pass |
| TS02_TC33 | No input password | Show error กรุณากรอกรหัสผ่าน | Negative | Pass |
| TS02_TC34 | No confirm password | Show error กรุณายืนยันรหัสผ่าน | Negative | Pass |
