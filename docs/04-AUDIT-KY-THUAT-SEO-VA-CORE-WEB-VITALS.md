# AUDIT KỸ THUẬT SEO VÀ CORE WEB VITALS (ĐỐI SOÁT LIVE)

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
