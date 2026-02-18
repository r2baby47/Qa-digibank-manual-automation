# Register / Login
**Test** Case ID: TS02
**Device:** Desktop Web  
**Test By:** Porntep  
**Date:** 2026-01-20  

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
| TS02_TC19 | Open website on desktop | Go to เข้าสู่ระบบ page | Positive | Pass |
| TS02_TC20 | Click สร้างบัญชีใหม่ | Go to สมัครสมาชิก page | Positive | Pass |
| TS02_TC21 | Click มีบัญชีอยู่แล้ว? on สมัครสมาชิก | Go to เข้าสู่ระบบ page | Positive | Pass |
| TS02_TC22 | Click สร้างบัญชีใหม่ | Go to สมัครสมาชิก page | Positive | Pass |
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

---

## Part 2 — Address Validation

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC35 | Input all valid then click ถัดไป | Go to กรอกที่อยู่ page | Positive | Pass |
| TS02_TC36 | Input invalid address (special characters) then click สมัครการใช้งาน | System should not allow special characters | Negative | Pass |
| TS02_TC37 | Valid address but missing ตำบล/แขวง หรือ เขต หรือ จังหวัด | Show error กรุณาเลือกที่อยู่ให้ครบถ้วน | Negative | Pass |
| TS02_TC38 | No select province then click ถัดไป | Show error กรุณาเลือกจังหวัด | Negative | Pass |
| TS02_TC39 | Select province successfully | Load district data for selected province | Positive | Pass |
| TS02_TC40 | No select district then click ถัดไป | Show error กรุณาเลือกอำเภอ/เขต | Negative | Pass |
| TS02_TC41 | No select sub-district then click ถัดไป | Show error กรุณาเลือกตำบล/แขวง | Negative | Pass |
| TS02_TC42 | Select district successfully | Load sub-district data for selected district | Positive | Pass |
| TS02_TC43 | Select sub-district successfully | Auto-fill postcode for selected sub-district | Positive | Pass |

---

## Part 3 — PIN Setup

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC44 | Input all valid then click ถัดไป | Go to ตั้งค่ารหัส PIN page | Positive | Pass |
| TS02_TC45 | Input 6-digit PIN | Go to ยืนยันรหัส PIN page | Positive | Pass |
| TS02_TC46 | Input invalid confirm PIN | Show popup PIN และ Confirm PIN ไม่ตรงกัน | Negative | Pass |
| TS02_TC47 | Click ตกลง | Return to ตั้งรหัส PIN page | Positive | Pass |
| TS02_TC48 | Input valid confirm PIN | Show popup สมัครการใช้งานสำเร็จ | Positive | Pass |
| TS02_TC49 | Click เข้าสู่ระบบ in popup | Go to เข้าสู่ระบบ page | Positive | Pass |

---

## Login Validation

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC50 | No input username/password then click เข้าสู่ระบบ | Show errors กรุณากรอกชื่อผู้ใช้งาน และ กรุณากรอกรหัสผ่าน | Negative | Pass |
| TS02_TC51 | Input invalid username then click เข้าสู่ระบบ | Show popup เกิดข้อผิดพลาดเกิดขึ้น | Negative | Pass |
| TS02_TC52 | Valid username but empty password | Show popup เกิดข้อผิดพลาดเกิดขึ้น | Negative | Pass |
| TS02_TC53 | Input invalid password | Show popup เกิดข้อผิดพลาดเกิดขึ้น | Negative | Pass |
| TS02_TC54 | Click ตกลง in รหัสผ่านไม่ถูกต้อง popup | Close popup | Negative | Pass |
| TS02_TC55 | Input valid password then click เข้าสู่ระบบ | Show popup สำเร็จ | Positive | Pass |
| TS02_TC56 | Click ตกลง | Go to หน้าแรก page | Positive | Pass |
---

## Forgot Password Validation

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC57 | Click ลืมรหัสผ่าน on login page | Show ลืมรหัสผ่าน form | Positive | Pass |
| TS02_TC58 | Input invalid email syntax then click ตั้งรหัสผ่านใหม่ | Show error ไม่พบผู้ใช้ในระบบ | Negative | Pass |
| TS02_TC59 | Input invalid PIN then click ตั้งรหัสผ่านใหม่ | Show error รหัส PIN ไม่ถูกต้อง | Negative | Pass |
| TS02_TC60 | New password length < 8 | Show error รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร | Negative | Pass |
| TS02_TC61 | Confirm password not match | Show error รหัสผ่านไม่ตรงกัน | Negative | Pass |
| TS02_TC62 | Enter all valid then click ตั้งรหัสผ่านใหม่ | Show popup ตั้งรหัสผ่านใหม่สำเร็จ | Positive | Pass |
| TS02_TC63 | Click ยืนยัน | Close popup | Positive | Pass |

---

## User Account Management — Edit Profile

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC64 | Click โปรไฟล์ on navbar | Go to โปรไฟล์ผู้ใช้ page | Positive | Pass |
| TS02_TC65 | Click แก้ไขข้อมูล | Go to แก้ไขข้อมูล page | Positive | Pass |
| TS02_TC66 | Edit invalid firstname then click บันทึกการเปลี่ยนแปลง | Show error ชื่อต้องเป็นภาษาไทยเท่านั้น | Negative | Pass |
| TS02_TC67 | Edit invalid lastname then click บันทึกการเปลี่ยนแปลง | Show error นามสกุลต้องเป็นภาษาไทยเท่านั้น | Negative | Pass |
| TS02_TC68 | Edit invalid email syntax then click บันทึกการเปลี่ยนแปลง | Show error รูปแบบอีเมลไม่ถูกต้อง หรือโดเมนไม่รองรับ | Negative | Pass |
| TS02_TC69 | Edit valid values then click บันทึกการเปลี่ยนแปลง | Show popup บันทึกสำเร็จ | Positive | Pass |
| TS02_TC70 | Click ตกลง | Close popup and return to แก้ไขข้อมูล page | Positive | Pass |

---

## Transactions — Open New Account

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC71 | Click เพิ่มบัญชีใหม่ on ธุรกรรม page | Show เปิดบัญชีใหม่ form | Positive | Pass |
| TS02_TC72 | Click ยกเลิก in form | Close เปิดบัญชีใหม่ form | Positive | Pass |
| TS02_TC73 | Click ยืนยันเปิดบัญชี with empty fields | Show error กรุณากรอกเลขบัตรประชาชน | Negative | Pass |
| TS02_TC74 | Invalid CID + empty PIN then click ยืนยันเปิดบัญชี | Show error กรุณากรอก PIN | Negative | Pass |
| TS02_TC75 | Invalid CID + invalid PIN then click ยืนยันเปิดบัญชี | Show error ไม่สามารถเปิดบัญชีได้ กรุณาลองใหม่ | Negative | Pass |
| TS02_TC76 | Valid CID + invalid PIN then click ยืนยันเปิดบัญชี | Show error ไม่สามารถเปิดบัญชีได้ กรุณาลองใหม่ | Negative | Pass |
| TS02_TC77 | Empty CID + invalid PIN then click ยืนยันเปิดบัญชี | Show error ไม่สามารถเปิดบัญชีได้ กรุณาลองใหม่ | Negative | Pass |
| TS02_TC78 | Input all valid then click ยืนยันเปิดบัญชี | Account created successfully | Positive | Pass |

### Delete Case — Balance 0, No Transactions, Active

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC79 | Click ตรวจสอบบัญชี on หน้าแรก page | Go to ตรวจสอบบัญชีของฉัน page | Positive | Pass |
| TS02_TC80 | Click ลบบัญชี | Show confirmation popup | Positive | Pass |
| TS02_TC81 | Click ยกเลิก | Close confirmation popup | Negative | Pass |
| TS02_TC82 | Click ยืนยัน | Show ลบบัญชีสำเร็จ and delete TAX account | Positive | Pass |

---

### Delete Case — Balance 0, No Transactions, Suspended

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC83 | Click ตรวจสอบบัญชี on หน้าแรก page | Go to ตรวจสอบบัญชีของฉัน page | Positive | Pass |
| TS02_TC84 | Click ลบบัญชี | Show confirmation popup | Positive | Pass |
| TS02_TC85 | Click ยกเลิก | Close confirmation popup | Negative | Pass |
| TS02_TC86 | Click ยืนยัน | Show ลบบัญชีสำเร็จ and delete TAX account | Positive | Pass |

### Delete Case — Balance 0, Has Transactions, Active

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC87 | Click ตรวจสอบบัญชี on หน้าแรก page | Go to ตรวจสอบบัญชีของฉัน page | Positive | Pass |
| TS02_TC88 | Click ลบบัญชี | Show confirmation popup | Positive | Pass |
| TS02_TC89 | Click ยกเลิก | Close confirmation popup | Negative | Pass |
| TS02_TC90 | Click ยืนยัน | Show ลบบัญชีสำเร็จ and delete TAX account | Positive | Pass |

### Delete Case — Balance 0, Has Transactions, Suspended

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC91 | Click ตรวจสอบบัญชี on หน้าแรก page | Go to ตรวจสอบบัญชีของฉัน page | Positive | Pass |
| TS02_TC92 | Click ลบบัญชี | Show confirmation popup | Positive | Pass |
| TS02_TC93 | Click ยกเลิก | Close confirmation popup | Negative | Pass |
| TS02_TC94 | Click ยืนยัน | Show ลบบัญชีสำเร็จ and delete TAX account | Positive | Pass |

### Delete Case — Balance More Than 0

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC95 | Click ตรวจสอบบัญชี on หน้าแรก page | Go to ตรวจสอบบัญชีของฉัน page | Positive | Pass |
| TS02_TC96 | Click ลบบัญชี | Show confirmation popup | Positive | Pass |
| TS02_TC97 | Click ยกเลิก | Close confirmation popup | Positive | Pass |
| TS02_TC98 | Click ยืนยัน | Show error ไม่สามารถลบบัญชีได้ เนื่องจากยอดคงเหลือไม่เป็นศูนย์ | Negative | Pass |

## Favorite Account (Bookmark)

| Test Case ID | Action / Description | Expected Result | Type | Status |
|--------------|----------------------|-----------------|------|--------|
| TS02_TC99 | Click เพิ่มบัญชีโปรด on หน้าแรก page | Go to จัดการบัญชีโปรด page | Positive | Pass |
| TS02_TC100 | Click เพิ่มบัญชีโปรด with empty fields | Show error กรุณากรอกทั้งชื่อรายการโปรดและเลขที่บัญชี | Negative | Pass |
| TS02_TC101 | Input name + invalid TAX ID then click เพิ่มบัญชีโปรด | Show error ไม่พบบัญชีนี้ในระบบ กรุณาตรวจสอบเลขที่บัญชีอีกครั้ง | Negative | Pass |
| TS02_TC102 | Input all valid then click เพิ่มบัญชีโปรด | Favorite account saved successfully | Positive | Pass |