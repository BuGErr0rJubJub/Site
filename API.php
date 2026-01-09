<?php
/**
 * ระบบตรวจสอบ License แบบใช้ Array (ไม่ต้องใช้ Database)
 * รองรับสถานะ: SUCCEED, EXPIRE, BANNED, INVAID
 */

// 1. กำหนดฐานข้อมูล License ในรูปแบบ Array
$licenses = [
    "TEST-123-ABC" => "SUCCEED",
    "USER-PREMIUM-01" => "SUCCEED",
    "OLD-KEY-999" => "EXPIRE",
    "CHEATER-ID" => "BANNED",
    // เพิ่ม License ใหม่ลงไปที่นี่
];

// 2. รับค่าจากโปรแกรม C++ (URL parameter: ?license=...)
$license_code = isset($_GET['license']) ? $_GET['license'] : '';

// 3. ตรวจสอบข้อมูล
if (empty($license_code)) {
    echo "INVAID"; // อ้างอิงตาม License.cpp บรรทัดที่ 125
    exit;
}

if (array_key_exists($license_code, $licenses)) {
    // ส่งค่าสถานะกลับไป (SUCCEED, EXPIRE, หรือ BANNED)
    echo $licenses[$license_code];
} else {
    // หากไม่พบ License ใน Array
    echo "INVAID";
}
?>