# AUDIT KỸ THUẬT SEO VÀ CORE WEB VITALS (ĐỐI SOÁT LIVE)

## 1. Bảng Đối Soát 5 Lỗi Nghiêm Trọng Nhất Trên Website Cũ
| Lỗi Kỹ thuật | Trạng thái Live trên taimuihongsg.com | Mức độ nguy hiểm | Tác động cụ thể |
|:---|:---:|:---:|:---|
| **1. Hỏng Sitemap XML** | `sitemap_index.xml` trả về `301` sang `/dat-hen-kham-benh/` | Khẩn cấp | Google không có bản đồ thu thập 2.212 trang; bài viết mới bị bỏ quên. |
| **2. Wildcard 404 sang 301** | Bất kỳ URL sai đều chuyển 301 sang trang Đặt hẹn | Khẩn cấp | Hàng loạt Soft 404, làm loãng tín hiệu trang đích đặt hẹn, làm hỏng trải nghiệm người dùng. |
| **3. Xung đột Thực thể Schema** | Schema định danh là `Bệnh viện Đa khoa Quốc tế Sài Gòn`, đa chuyên khoa | Nghiêm trọng | Google Entity không nhận diện được chuyên khoa sâu ENT; xung đột với thương hiệu Bệnh viện Tai Mũi Họng. |
| **4. Core Web Vitals trượt chuẩn** | LCP 3.1s, CLS 0.21, 34 CSS, 25 JS, ảnh PNG 7.8MB | Nghiêm trọng | Điểm trải nghiệm trang trên Mobile bị Google đánh tụt hạng so với đối thủ (taimuihongtphcm.vn LCP 1.2s). |
| **5. Phân hệ Tiếng Anh `/english/` lai tạp** | Chỉ là danh mục tin tức thô; Header và Menu vẫn 100% tiếng Việt; không có thẻ `hreflang` | Nghiêm trọng | Đánh mất toàn bộ tệp bệnh nhân quốc tế, chuyên gia nước ngoài (Expats) tại Quận 1 và khách du lịch y tế; không có luồng bảo lãnh bảo hiểm quốc tế rõ ràng. |

## 2. Chi tiết Lỗi Phân Hệ Đa Ngôn Ngữ & Bệnh Nhân Quốc Tế (English Portal)
* **Giao diện lai tạp ngôn ngữ:** Truy cập `https://taimuihongsg.com/english/` nhưng toàn bộ thanh điều hướng chính, thanh tiện ích và chân trang vẫn hiển thị tiếng Việt ("Văn hóa doanh nghiệp", "Trách nhiệm cộng đồng", "Đặt hẹn khám bệnh"...). Bệnh nhân nước ngoài không thể tự định hướng.
* **Thiếu chuẩn kỹ thuật đa ngôn ngữ (International SEO):** Không khai báo cặp thẻ `hreflang="en"` và `hreflang="vi"`. Google xem đây chỉ là các bài viết rời rạc cùng một ngôn ngữ tiếng Việt, không tối ưu cho công cụ tìm kiếm tiếng Anh tại khu vực TP.HCM.
* **Đứt gãy luồng đặt lịch khám & thanh toán bảo hiểm quốc tế:** Các bài viết tiếng Anh hướng dẫn người bệnh nhắn tin qua Facebook hoặc gọi số hotline tiếng Việt chung, không có quy trình tiếp đón có nhân sự tiếng Anh, không nêu rõ chính sách xuất hóa đơn điện tử VAT hay danh sách các hãng bảo hiểm bảo lãnh trực tiếp (Direct Billing).

## 3. Chi tiết Lỗi Core Web Vitals & Trải Nghiệm Trang
* **TTFB (Time to First Byte):** 1.3s - 1.5s do hệ thống cũ xử lý động cồng kềnh qua nhiều thành phần mở rộng, chưa kích hoạt cơ chế bộ nhớ đệm trang tĩnh hoàn chỉnh.
* **FCP & LCP (Largest Contentful Paint):** Bị chặn hiển thị bởi 34 file giao diện CSS và tập lệnh chạy nền tại `<head>`. Các hình ảnh chân dung bác sĩ là định dạng ảnh gốc chưa tối ưu nén, nặng đến 7.8MB mỗi tệp.
* **CLS (Cumulative Layout Shift):** 0.21 (ngưỡng an toàn là < 0.1). Gây ra bởi các khung trình diễn banner trượt tự động và các ảnh không được cố định trước tỉ lệ khung hình `aspect-ratio`.

## 4. Giải Pháp Rebuild Lại Web Mới Toàn Diện
* **Xây dựng English Portal độc lập tại `/english`:** 100% giao diện tiếng Anh chuẩn mực, hiển thị quy trình 5 bước khám cho người nước ngoài (Foreign Patient Pathway), thông tin bác sĩ và hotline tư vấn tiếng Anh riêng biệt.
* **Tích hợp chính sách Bảo lãnh viện phí quốc tế:** Liệt kê minh bạch 35+ đối tác bảo hiểm toàn cầu (Allianz, Bupa, Cigna, AXA...), cam kết cung cấp hồ sơ bệnh án tiếng Anh và hóa đơn VAT trong vòng 30 phút.
* **Chuẩn hóa kiến trúc thông tin & Core Web Vitals:** Tái tạo toàn bộ mã nguồn sạch, nén ảnh tự động chuẩn WebP, cố định kích thước, loại bỏ toàn bộ tập lệnh rác để đạt điểm xanh Core Web Vitals tuyệt đối (< 1.2s).
