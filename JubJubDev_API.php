<?php
// 1. ตั้งค่า Header ให้ระบบพ่นค่ากลับไปเป็น JSON และอนุญาตให้เข้าถึงได้
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

// 2. นำข้อมูลจากไฟล์ JSON ทั้ง 5 ไฟล์มาจัดเก็บในรูปแบบ Array ของ PHP 
// โดยใช้ "ชื่อไฟล์" เป็น Key หลัก
$database = [
    "WarZ_ATK" => [
        "auth_token" => "GJDXVqrWRHmVaMd3ffWCjw==",
        "status" => "active",
        "expiry" => "2026-12-29 23:59:59",
        "crc_check" => "240CD1E0",
        "endpoint" => "103.233.195.162"
    ],
    "JubJubDev" => [
        "auth_token" => "g81D2evxJXSrxblk0JvB1Q==",
        "status" => "active",
        "expiry" => "2030-12-31 23:59:59",
        "crc_check" => "27DB1EDD",
        "endpoint" => "127.0.0.1"
    ],
    "WarZ_THAI" => [
        "auth_token" => "nDNJ6Hiu3xgpe/+THcfO6A==",
        "status" => "active",
        "expiry" => "2026-07-29 23:59:59",
        "crc_check" => "240CD1E0",
        "endpoint" => "147.50.253.52"
    ],
    "WarZ_TAXI" => [
        "auth_token" => "l79iYoVtzx91E6GxkSyW7w==",
        "status" => "active",
        "expiry" => "2026-07-24 23:59:59",
        "crc_check" => "72468C00",
        "endpoint" => "223.205.227.194"
    ],
    "WarZ_SIAM" => [
        "auth_token" => "v6TMSrCxrRSwyIA6mssaqA==",
        "status" => "active",
        "expiry" => "2026-06-30 23:59:59",
        "crc_check" => "00000000",
        "endpoint" => "103.70.5.231"
    ]
];

// 3. รับค่าตัวแปร 'key' ที่ส่งมาทาง URL (เช่น ?key=WarZ_ATK)
$requestKey = isset($_GET['key']) ? trim($_GET['key']) : null;

// 4. ตรวจสอบเงื่อนไขและประมวลผล
if (empty($requestKey)) {
    // กรณีไม่ได้ส่ง Key มา
    http_response_code(400); // Bad Request
    $response = [
        "status" => "error",
        "message" => "Missing parameter: key. Please provide a key (e.g., ?key=JubJubDev)"
    ];
} elseif (array_key_exists($requestKey, $database)) {
    // กรณีเจอ Key ในฐานข้อมูล (ดึงข้อมูลมาตอบกลับ)
    http_response_code(200); // OK
    $response = [
        "status" => "success",
        "key" => $requestKey,
        "data" => $database[$requestKey]
    ];
} else {
    // กรณีส่ง Key มาผิด หรือไม่เจอในฐานข้อมูล
    http_response_code(404); // Not Found
    $response = [
        "status" => "error",
        "message" => "Key not found."
    ];
}

// 5. แปลงข้อมูล Array เป็น JSON แล้วพิมพ์ออกมา
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>