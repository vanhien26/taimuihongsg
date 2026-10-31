import json
import os
import re
import html

os.makedirs('docs', exist_ok=True)

with open('docs/raw_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

with open('docs/raw_categories.json', 'r', encoding='utf-8') as f:
    categories = json.load(f)

with open('docs/raw_doctors.json', 'r', encoding='utf-8') as f:
    doctors = json.load(f)

# File 1: Tong quan website va ha tang
with open('docs/01-TONG-QUAN-WEBSITE-VA-HA-TANG.md', 'w', encoding='utf-8') as f:
    f.write('''# TỔNG QUAN WEBSITE VÀ HẠ TẦNG KỸ THUẬT TAIMUIHONGSG.COM

## 1. Thông tin chung về Đơn vị
* **Tên thương hiệu:** Bệnh Viện Tai Mũi Họng Sài Gòn (Thành lập năm 2007)
* **Domain chính:** `https://taimuihongsg.com/`
* **Địa chỉ trụ sở:** 1 - 3 Trịnh Văn Cấn, Phường Cầu Ông Lãnh, Quận 1, TP. Hồ Chí Minh
* **Hotline tư vấn & Đặt hẹn:** (028) 38.213.456 - 0989 777 456
* **Email liên hệ:** info@taimuihongsg.com
* **Phân cấp chuyên môn y tế:** Bệnh viện chuyên khoa Tai - Mũi - Họng & Phẫu thuật Đầu Cổ tư nhân hàng đầu tại TP.HCM.

## 2. Ngăn xếp Công nghệ Hiện tại (Current Tech Stack)
* **Nền tảng CMS:** WordPress 6.2.14
* **Môi trường Server:** PHP 8.3.36, Nginx Web Server, OS Linux
* **Giao diện (Theme):** Apicona (ThemeForest) xây dựng bằng WPBakery Page Builder
* **Plugin SEO:** Rank Math SEO (quản lý Schema, Title, Redirects, Sitemap) & Google Site Kit
* **Plugin bổ trợ chính:**
  * Slider Revolution 6.5.7 (gây tải nặng tài nguyên, chặn render đầu trang)
  * Gravity Forms (xử lý đặt lịch khám)
  * Rocket Lazy Load
  * BWL Knowledge Base Manager (quản trị 1.517 câu hỏi tư vấn `/cau-hoi-tu-van/`)
  * TablePress, Mega Menu, Novashare
* **Hạ tầng Mạng & CDN:** Cloudflare (Tuy nhiên cấu hình `cf-cache-status: DYNAMIC` cho toàn bộ tài nguyên HTML, máy chủ gốc phải xử lý từng request).

## 3. Khối lượng Nội dung Hiện có (Content Inventory)
* **Trang tĩnh (Pages):** 49 trang (bao gồm trang chủ, bảng giá, quy trình khám, giới thiệu, các chuyên khoa, trang đặt hẹn và các trang thử nghiệm cũ).
* **Bài viết (Posts):** 532 bài viết phân bố trong 22 chuyên mục y khoa và tin tức.
* **Hồ sơ Bác sĩ:** 18 bác sĩ chủ chốt tại trang `/doi-ngu-bac-si/` và tổng cộng 68 hồ sơ `team_member`.
* **Trang Hỏi đáp Y khoa (`/cau-hoi-tu-van/`):** 1.517 trang câu hỏi tư vấn dựa trên plugin `bwl_kb`.
* **Thư viện Media:** Hơn 9.198 tệp hình ảnh, chủ yếu là định dạng PNG gốc độ phân giải cao chưa qua nén thế hệ mới (WebP/AVIF).
''')

# File 2: Kiem ke noi dung va taxonomy
with open('docs/02-KIEM-KE-TOAN-BO-NOI-DUNG-VA-TAXONOMY.md', 'w', encoding='utf-8') as f:
    f.write('''# KIỂM KÊ TOÀN BỘ NỘI DUNG VÀ HỆ THỐNG PHÂN LOẠI (TAXONOMY)

## 1. Danh sách 22 Danh mục Bài viết (Categories)
| ID | Tên Danh mục | Slug | Số lượng bài | Nhóm phân loại |
|:---|:---|:---|:---:|:---|
''')
    for c in categories:
        f.write(f"| {c['id']} | {c['name']} | `{c['slug']}` | {c['count']} | Chuyên môn Tai Mũi Họng / Tin tức |\n")

    f.write('''\n## 2. Kiểm kê 49 Trang Tĩnh (Pages Inventory)
| ID | Slug | Tiêu đề Trang | Đánh giá hiện trạng | Đề xuất giải pháp |
|:---|:---|:---|:---|:---|
''')
    for p in pages:
        title = html.unescape(p['title']['rendered'])
        slug = p['slug']
        pid = p['id']
        note = 'Trang hoạt động bình thường'
        action = 'Giữ lại và tối ưu'
        if 'dat-hen' in slug or 'new-dat-hen' in slug:
            note = 'Trang form đặt hẹn'
            action = 'Hợp nhất thành 1 trang chuẩn /dat-hen/'
        elif 'old' in slug or 'copy' in slug or 'layout' in slug or 'test' in slug:
            note = 'Trang rác / thử nghiệm'
            action = 'Xóa hoặc Redirect 301 về trang chuẩn'
        elif 'phong-kham-da-khoa' in title.lower() or 'da-khoa' in slug:
            note = 'Nội dung đa khoa lạc đề'
            action = 'Chuyển hướng hoặc tinh chỉnh thương hiệu'
        f.write(f"| {pid} | `{slug}` | {title} | {note} | {action} |\n")

    f.write('''\n## 3. Đánh giá Cấu trúc 1.517 Câu hỏi Tư vấn (/cau-hoi-tu-van/)
* Hiện trạng: Sử dụng Custom Post Type `bwl_kb`.
* Tồn tại nghiêm trọng: 49% trang dưới 300 từ (thin content), 11 cặp bài trùng lặp tiêu đề, 1.179 tiêu đề mang đuôi thương hiệu sai `PHÒNG KHÁM ĐA KHOA QUỐC TẾ SÀI GÒN`.
* Đề xuất: Gom cụm (Clustering) theo chủ đề (Ví dụ: Cụm Viêm Mũi Dị Ứng, Cụm Amidan, Cụm Ù Tai) và chuyển các câu hỏi mỏng thành Accordion FAQ có schema `FAQPage` trên các trang dịch vụ đích.
''')

# File 3: Doi ngu bac si va chuyen khoa
with open('docs/03-DOI-NGU-BAC-SI-VA-CHUYEN-KHOA.md', 'w', encoding='utf-8') as f:
    f.write('''# ĐỘI NGŨ BÁC SĨ VÀ HỆ THỐNG CHUYÊN KHOA Y TẾ

## 1. Danh sách Bác sĩ Chủ chốt và Lỗi Cấu hình Canonical
Theo dữ liệu crawl thực tế và báo cáo kỹ thuật, website có các bác sĩ chuyên khoa Tai Mũi Họng giàu kinh nghiệm. Tuy nhiên có lỗi cấu hình canonical nghiêm trọng trỏ nhầm giữa các bác sĩ:

| Bác sĩ | Chức danh / Học vị | URL Hồ sơ | Lỗi Canonical hiện tại |
|:---|:---|:---|:---|
| TS.BS CKII Hoàng Lương | Giám đốc Bệnh viện | `/bac-si/ts-bs-ckii-hoang-luong/` | Tự trỏ chuẩn |
| BS.CKI Bùi Nguyên Thống | Bác sĩ Chuyên khoa | `/bac-si/bs-cki-bui-nguyen-thong/` | **LỖI:** Trỏ về BS Ngô Thanh Thúy |
| BS.CKII Từ Thị Thu Hà | Bác sĩ Chuyên khoa | `/bac-si/bs-ckii-tu-thi-thu-ha/` | **LỖI:** Trỏ về BS Ngô Thanh Thúy |
| BS.CKI Đoàn Long Vân | Bác sĩ Chuyên khoa | `/bac-si/bs-cki-doan-long-van/` | **LỖI:** Trỏ về BS Nguyễn Hoàng Gia |
| BS.CKII Nguyễn Thế Hưng | Bác sĩ Chuyên khoa | `/bac-si/bs-ckii-nguyen-the-hung/` | **LỖI:** Trỏ về BS Nguyễn Hoàng Gia |
| BS.CKI Lê Thanh Nhàn | Bác sĩ Chuyên khoa | `/bac-si/bs-cki-le-thanh-nhan/` | **LỖI:** Trỏ về ThS.BS Bùi Văn Đức |
| BS.CKII Ngô Thanh Thúy | Bác sĩ Chuyên khoa | `/bac-si/bs-ngo-thanh-thuy/` | Chuẩn |
| BS.CKII Đỗ Kỳ Nhật | Bác sĩ Chuyên khoa | `/bac-si/bs-ckii-do-ky-nhat/` | Chuẩn |
| ThS.BS CKII Trương Kim Tri | Bác sĩ Chuyên khoa | `/bac-si/ths-bs-ckii-truong-kim-tri/` | Chuẩn |
| ThS.BS CKI Nguyễn Tất Cường | Bác sĩ Chuyên khoa | `/bac-si/ths-bs-cki-nguyen-tat-cuong/` | Chuẩn |

## 2. Hệ thống Chuyên khoa Cốt lõi của Bệnh viện
1. **Khoa Mũi - Xoang:** Phẫu thuật nội soi xoang FESS, chỉnh hình vách ngăn mũi, điều trị viêm mũi dị ứng, polyp mũi, ngáy và ngưng thở khi ngủ.
2. **Khoa Họng - Thanh Quản:** Cắt Amidan bằng Coblator, nạo VA sóng cao tần, cắt polyp dây thanh, điều trị khàn tiếng, trào ngược họng thanh quản (LPR).
3. **Khoa Tai - Thính học:** Vá nhĩ vi phẫu, đặt ống thông khí màng nhĩ, phẫu thuật sào bào thượng nhĩ, đo thính lực đơn âm, nhĩ lượng, điều trị điếc đột ngột, ù tai.
4. **Trung tâm Tai Mũi Họng Trẻ em:** Khám và điều trị chuyên biệt cho trẻ em trong môi trường thân thiện, không đau, hạn chế kháng sinh.
5. **Khoa Phẫu thuật & Điều trị Nội trú:** Hệ thống phòng mổ vô trùng áp lực dương, phòng lưu bệnh tiện nghi tiêu chuẩn khách sạn.
6. **Trung tâm Đo Đa Ký Giấc Ngủ (Polysomnography):** Chẩn đoán chính xác hội chứng ngưng thở khi ngủ (OSAS) và phác đồ điều trị đa mô thức.
''')

# File 4: Audit ky thuat SEO
with open('docs/04-AUDIT-KY-THUAT-SEO-VA-CORE-WEB-VITALS.md', 'w', encoding='utf-8') as f:
    f.write('''# AUDIT KỸ THUẬT SEO VÀ CORE WEB VITALS (ĐỐI SOÁT LIVE)

## 1. Bảng Đối Soát 4 Lỗi Nghiêm Trọng Nhất
| Lỗi Kỹ thuật | Trạng thái Live trên taimuihongsg.com | Mức độ nguy hiểm | Tác động cụ thể |
|:---|:---:|:---:|:---|
| **1. Hỏng Sitemap XML** | `sitemap_index.xml` trả về `301` sang `/dat-hen-kham-benh/` | Khẩn cấp | Google không có bản đồ thu thập 2.212 trang; bài viết mới bị bỏ quên. |
| **2. Wildcard 404 sang 301** | Bất kỳ URL sai đều chuyển 301 sang trang Đặt hẹn | Khẩn cấp | Hàng loạt Soft 404, làm loãng tín hiệu trang đích đặt hẹn, làm hỏng UX người dùng. |
| **3. Xung đột Thực thể Schema** | Schema định danh là `Bệnh viện Đa khoa Quốc tế Sài Gòn`, đa chuyên khoa | Nghiêm trọng | Google Entity không nhận diện được chuyên khoa sâu ENT; xung đột với thương hiệu Bệnh viện Tai Mũi Họng. |
| **4. Core Web Vitals trượt chuẩn** | LCP 3.1s, CLS 0.21, 34 CSS, 25 JS, ảnh PNG 7MB | Nghiêm trọng | Điểm trải nghiệm trang trên Mobile bị Google đánh tụt hạng so với đối thủ (taimuihongtphcm.vn LCP 1.2s). |

## 2. Chi tiết Lỗi Core Web Vitals
* **TTFB (Time to First Byte):** 1.3s - 1.5s do WordPress render động qua nhiều plugin, Cloudflare không bật cache HTML (trạng thái `DYNAMIC`).
* **FCP & LCP (Largest Contentful Paint):** Bị chặn hiển thị bởi 34 file CSS (`apicona-theme.css`, `js_composer.css`, `revslider.css`...) và jQuery inline tại `<head>`. 6 ảnh bác sĩ trang chủ là định dạng PNG gốc độ phân giải 2389x3584px nặng đến 7.8MB mỗi ảnh.
* **CLS (Cumulative Layout Shift):** 0.21 (ngưỡng đạt là < 0.1). Gây ra bởi banner Revolution Slider và các khung ảnh không đặt trước tỉ lệ `aspect-ratio` hay `width/height`.
''')

# File 5: De xuat tai cau truc
with open('docs/05-DE-XUAT-TAI-CAU-TRUC-KIEN-TRUC-THONG-TIN.md', 'w', encoding='utf-8') as f:
    f.write('''# ĐỀ XUẤT TÁI CẤU TRÚC KIẾN TRÚC THÔNG TIN (INFORMATION ARCHITECTURE)

## 1. Cấu trúc URL Mới Theo Chuẩn Y Khoa Quốc Tế (ENT Specialty)
```
Trang Chủ /
├── Chuyên Khoa /chuyen-khoa/
│   ├── Tai - Thính Học /chuyen-khoa/tai-thinh-hoc/
│   ├── Mũi - Xoang /chuyen-khoa/mui-xoang/
│   ├── Họng - Thanh Quản /chuyen-khoa/hong-thanh-quan/
│   ├── TMH Nhi Khoa /chuyen-khoa/tai-mui-hong-nhi/
│   └── Đo Đa Ký Giấc Ngủ /chuyen-khoa/ngu-ngay-ngung-tho/
├── Đội Ngũ Bác Sĩ /bac-si/
│   └── Chi tiết Bác sĩ /bac-si/[slug]/ (tự trỏ canonical)
├── Dịch Vụ Phẫu Thuật & Bảng Giá /bang-gia/
├── Kiến Thức Y Khoa & FAQ /kien-thuc/
│   ├── Bệnh học Tai /kien-thuc/benh-ve-tai/
│   ├── Bệnh học Mũi Xoang /kien-thuc/benh-ve-mui-xoang/
│   ├── Bệnh học Họng /kien-thuc/benh-ve-hong/
│   └── Hỏi đáp Bác sĩ /kien-thuc/hoi-dap-chuyen-gia/
└── Đặt Hẹn /dat-hen/
```

## 2. Nguyên tắc Tái cấu trúc
1. **Dọn dẹp thực thể:** Tách rời hoàn toàn thương hiệu "Bệnh viện Tai Mũi Họng Sài Gòn" khỏi "Đa Khoa Quốc Tế Sài Gòn". Mọi trang phụ trợ đa khoa không liên quan chuyển hướng hoặc di dời sang `sighospital.vn`.
2. **Loại bỏ các trang rác:** Đưa các trang `/dat-hen-kham-benh-old/`, `/giao-dien-website-moi/`, `/layout-goi-kham-filter/` về mã `410 Gone` hoặc chuyển hướng `301` về trang chuẩn.
3. **Phân cấp Breadcrumbs rõ ràng:** Sử dụng Schema `BreadcrumbList` đồng bộ với URL cha-con.
''')

# File 6: Chien luoc tang truong SEO va GEO
with open('docs/06-CHIEN-LUOC-TANG-TRUONG-SEO-VA-GEO.md', 'w', encoding='utf-8') as f:
    f.write('''# CHIẾN LƯỢC TĂNG TRƯỞNG SEO VÀ GEO (GENERATIVE ENGINE OPTIMIZATION)

## 1. Khái niệm GEO (Generative Engine Optimization)
GEO là phương pháp tối ưu hóa để website trở thành nguồn tham chiếu hàng đầu cho các mô hình AI tìm kiếm: **Google AI Overviews (SGE), Google Gemini, OpenAI Search (ChatGPT Search), Perplexity AI và Claude**.

## 2. Bốn Trụ cột Tăng trưởng SEO & GEO Cho Bệnh Viện Tai Mũi Họng Sài Gòn

### Trụ cột 1: Thực thể Y tế Minh bạch & Schema Cực đại (Maximized E-E-A-T Schema)
* **Khai báo chuẩn `MedicalOrganization` và `Hospital`:**
  * Chuyên khoa chính: `Otolaryngologic` (Tai Mũi Họng).
  * Giấy phép y tế, chứng nhận hoạt động, phân hạng bệnh viện.
* **Khai báo chuẩn `Physician` (Bác sĩ) liên kết với Wikidata / Google Scholar / Hội Tai Mũi Họng:**
  * Đầy đủ `alumniOf`, `medicalSpecialty`, `knowsAbout`, `memberOf`.
* **Khai báo `MedicalWebPage`:**
  * Bắt buộc có trường `reviewedBy` (trỏ đến Person Schema của Bác sĩ chuyên khoa thẩm định bài viết).
  * Khai báo `medicalAudience: Patient`, `aspect: Treatment/Diagnosis`.

### Trụ cột 2: Cấu trúc Nội dung Dạng Answer-Engine-Ready (Cho AI Trích dẫn)
* Các công cụ AI như Perplexity hay ChatGPT ưu tiên các nội dung có:
  1. **Direct Answer Block (Khối câu trả lời trực diện 40 - 60 từ ngay dưới thẻ H2):** Ví dụ *"Mổ lệch vách ngăn mũi mất bao lâu? Phẫu thuật nội soi chỉnh hình vách ngăn mũi thường kéo dài từ 30 đến 45 phút..."*.
  2. **Bảng so sánh chi phí & kỹ thuật (Data Tables):** Giúp AI dễ dàng parse số liệu vào kết quả tìm kiếm.
  3. **Khối Clinical Consensus & Phác đồ điều trị:** Trích dẫn các khuyến cáo từ Hội Tai Mũi Họng Việt Nam hoặc Viện Hàn lâm Tai Mũi Họng Hoa Kỳ (AAO-HNS).

### Trụ cột 3: Chinh phục Local SEO & GEO Location
* Chiếm lĩnh vị trí Top 1 Local 3-Pack cho các từ khóa vị trí: *"khám tai mũi họng quận 1"*, *"bệnh viện tai mũi họng uy tín tphcm"*, *"nội soi tai mũi họng không đau quận 1"*.
* Đưa Schema `LocalBusiness` với tọa độ Geo `latitude: 10.7686`, `longitude: 106.6970`, mở cửa các ngày trong tuần.

### Trụ cột 4: Chuyển đổi Khách khám (High-Conversion Patient Booking)
* Đặt lịch khám đa kênh (trực tuyến, Zalo OA, Hotline) với trải nghiệm tải trang dưới 0.8 giây.
* Hệ thống lọc theo Triệu chứng bệnh nhân (Symptom Checker thông minh) gợi ý chuyên khoa phù hợp trước khi đặt hẹn.
''')

# File 7: Thiet ke prototype Nextjs
with open('docs/07-THIET-KE-PROTOTYPE-NEXTJS-TAILWIND.md', 'w', encoding='utf-8') as f:
    f.write('''# THIẾT KẾ VÀ KIẾN TRÚC PROTOTYPE NEXT.JS & TAILWIND CSS

## 1. Mục tiêu của Prototype Mini-Web
Xây dựng một phiên bản mẫu hoàn chỉnh, hiện đại, tải siêu tốc, giải quyết triệt để 100% các lỗi kỹ thuật của hệ thống WordPress cũ, bao gồm:
* Tốc độ tải trang đạt Core Web Vitals chuẩn mực: LCP < 1.0s, CLS = 0, FCP < 0.5s.
* Tích hợp đầy đủ JSON-LD Schema chuẩn Y tế: `MedicalOrganization`, `Physician`, `MedicalWebPage`, `FAQPage`, `BreadcrumbList`.
* Khắc phục hoàn toàn lỗi sitemap, canonical và 404.
* Giao diện hiện đại, tối ưu trải nghiệm người bệnh (UI/UX đẳng cấp y tế tư nhân chất lượng cao).
* Tích hợp **Strategic Command Center (Trung tâm chiến lược)** trực quan cho ban lãnh đạo / team marketing so sánh đối chiếu Audit Trước - Sau và Lộ trình GEO/SEO.

## 2. Ngăn xếp Công nghệ Prototype
* **Framework:** Next.js (App Router, Server-Side Rendering & Static Optimization)
* **Styling:** Tailwind CSS (Modern medical theme: Emerald / Teal / Sky blue kết hợp Slate chuyên nghiệp)
* **Icons:** Lucide-react
* **Components:** Accessible Dialogs, Accordions, Tabs, Symptom Checker, Interactive Booking Drawer/Modal.
''')

print('All 7 markdown documentation files successfully written to docs/')
