const products = [
  {
    id: "infes",
    name: "SRC Infestation",
    price: "$500 - ฿15,000",
    image: "infes.jpg",
    youtube: "https://www.youtube.com/embed/dpN75SDLT1Q",
    details: [
      // { text: "ระบบ Login / Register ครบถ้วน", img: "icon-login.png" },
      { text: "Survival / Boss Farm / Premium Room System" },
      { text: "รองรับระบบ Clan / Ranking / PVP แข่งกับผู้เล่นอื่นได้อย่างสนุกสนาน" },
      { text: "มีระบบ Anti-Cheat ขั้นพื้นฐาน" },
      { text: "สามารถปรับแต่ง Map / Event ได้" }
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "คู่มือการติดตั้ง + ตั้งค่า" },
      { text: "ซัพพอร์ตหลังการขาย" }
    ]
  },
  {
    id: "warzth",
    name: "SRC WarZTH",
    price: "$350 - ฿10,000",
    image: "infes.jpg",
    youtube: "https://www.youtube.com/embed/vFIDswBLr9M",
    details: [
      // { text: "ระบบ Login / Register ครบถ้วน", img: "icon-login.png" },
      { text: "Survival / Boss Farm / Premium Room System" },
      { text: "รองรับระบบ Clan / Ranking / PVP แข่งกับผู้เล่นอื่นได้อย่างสนุกสนาน" },
      { text: "มีระบบ Anti-Cheat ขั้นพื้นฐาน" },
      { text: "สามารถปรับแต่ง Map / Event ได้" }
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "คู่มือการติดตั้ง + ตั้งค่า" },
      { text: "ซัพพอร์ตหลังการขาย" }
    ]
  },
  {
    id: "fivem",
    name: "SRC - Community",
    price: "$500 - ฿15,000",
    image: "FiveM.jpg",
    youtube: "https://www.youtube.com/embed/u51q7noN2TQ",
    details: [
      { text: "รองรับ Roleplay System เต็มรูปแบบ" },
      { text: "ระบบ Economy + Job" },
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "Database SQL" },
      { text: "คู่มือติดตั้ง + สอนเบื้องต้น" }
    ]
  },
  {
    id: "fivem",
    name: "SRC - 4 School",
    price: "$500 - ฿15,000",
    image: "FiveM.jpg",
    youtube: "https://www.youtube.com/embed/u51q7noN2TQ",
    details: [
      { text: "รองรับ 4 School System เต็มรูปแบบ" },
      { text: "ระบบ Economy + Job + Event" },
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "Database SQL" },
      { text: "คู่มือติดตั้ง + สอนเบื้องต้น" }
    ]
  },
  {
    id: "fivem",
    name: "Custom Source Code",
    price: "$30 - $300 / ฿1,000 - ฿5,000",
    image: "FiveM.jpg",
    youtube: "https://www.youtube.com/embed/XrV2qQefkrQ",
    details: [
      { text: "รองรับ System เต็มรูปแบบ" },
      { text: "ระบบ Economy + Job + Event" },
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "Database SQL" },
      { text: "คู่มือติดตั้ง + สอนเบื้องต้น" }
    ]
  },
  {
    id: "altis",
    name: "SRC - Altis Life Roleplay",
    price: "$350 - ฿10,000",
    image: "arma3.jpg",
    youtube: "https://www.youtube.com/embed/VIDEO_ID4",
    details: [
      { text: "รองรับ Roleplay System เต็มรูปแบบ" },
      { text: "ระบบ Economy + Job" },
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "Database SQL" },
      { text: "คู่มือติดตั้ง + สอนเบื้องต้น" }
    ]
  },
  {
    id: "altis",
    name: "SRC - Altis Life PVE",
    price: "$300 - ฿5000",
    image: "arma3.jpg",
    youtube: "https://www.youtube.com/embed/VIDEO_ID4",
    details: [
      { text: "รองรับ Co-op System เต็มรูปแบบ" },
    ],
    includes: [
      { text: "Source Code เต็มระบบ" },
      { text: "Database SQL" },
      { text: "คู่มือติดตั้ง + สอนเบื้องต้น" }
    ]
  },
  {
    id: "php",
    name: "Custom Web Control Panel",
    price: "$100 - $300 / ฿3,000 - ฿5,000",
    image: "php.png",
    youtube: "https://www.youtube.com/embed/VIDEO_ID4",
    details: [
      { text: "เขียนโค้ด PHP อย่างปลอดภัย ป้องกัน SQL Injection, XSS, CSRF" },
      { text: "โครงสร้างโค้ดสะอาด Backend/API" },
      { text: "ระบบ Authentication/Authorization ปลอดภัย รองรับ Session และ Token" },
      { text: "รองรับการเชื่อมต่อ Database แบบ Secure และใช้ Prepared Statements" },
      { text: "ปรับแต่งระบบง่าย ต่อยอดระบบใหม่โดยไม่กระทบส่วนอื่น" }
    ],
    includes: [
      { text: "Source Code PHP เต็มระบบ เขียนตามมาตรฐานความปลอดภัยและคุณภาพ" },
      { text: "Database SQL ออกแบบปลอดภัย รองรับ Index / Constraint / Backup ง่าย" },
      { text: "คู่มือการติดตั้งและสอนการปรับแต่งโค้ด ป้องกันข้อผิดพลาดที่พบบ่อย" },
      { text: "ซัพพอร์ตหลังการขาย แนะนำ Best Practices และการป้องกันปัญหา Security" }
    ]

  },
];


// ดึง container หลัก
const container = document.getElementById("product-list");

// loop สร้างสินค้า
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "col mb-5";
  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img class="card-img-top" src="${p.image}" alt="${p.name}" />
      <div class="card-body p-4 text-center">
        <h5 class="fw-bolder">${p.name}</h5>
        ${p.price}
      </div>
      <div class="card-footer bg-transparent text-center border-top-0 p-3">
        <a class="btn btn-outline-dark me-2" href="https://www.facebook.com/BugErr0rJubJub/" target="_blank">ติดต่อ</a>
        <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-${p.id}">รายละเอียด</button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modal-${p.id}" tabindex="-1" aria-labelledby="modalLabel-${p.id}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="modalLabel-${p.id}">${p.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- รูปภาพด้านบน -->
            <div class="text-center mb-4">
              <img src="${p.image}" class="img-fluid rounded shadow-sm" alt="${p.name}">
            </div>

            <!-- แบ่งคอลัมน์ ซ้าย/ขวา -->
            <div class="row g-4">
              <!-- ซ้าย: YouTube -->
              <div class="col-md-6">
                <div class="ratio ratio-16x9 shadow-sm">
                  <iframe src="${p.youtube}" title="${p.name}" allowfullscreen></iframe>
                  </div>
              </div>

              <!-- ขวา: รายละเอียด -->
              <div class="col-md-6">
                <h5>รายละเอียดสินค้า</h5>
                <ul>
                  ${p.details.map(d => `
                    <li class="d-flex align-items-start mb-2">
                      ${d.img ? `<img src="${d.img}" alt="" class="me-2" style="width:24px;height:24px;object-fit:contain;">` : ""}
                      <span>${d.text}</span>
                    </li>`).join("")}
                </ul>

                <h5 class="mt-3">สิ่งที่คุณจะได้รับ</h5>
                <ul>
                  ${p.includes.map(i => `
                    <li class="d-flex align-items-start mb-2">
                      ${i.img ? `<img src="${i.img}" alt="" class="me-2" style="width:24px;height:24px;object-fit:contain;">` : ""}
                      <span>${i.text}</span>
                    </li>`).join("")}
                </ul>

                <div class="text-end fw-bold mt-3">ราคา: ${p.price}</div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <a href="https://www.facebook.com/BugErr0rJubJub/" target="_blank" class="btn btn-outline-dark">
              ติดต่อเพื่อสั่งซื้อ
            </a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
});
