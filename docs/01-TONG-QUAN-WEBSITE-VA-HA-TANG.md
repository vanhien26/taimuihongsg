# TỔNG QUAN WEBSITE VÀ HẠ TẦNG KỸ THUẬT TAIMUIHONGSG.COM

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
