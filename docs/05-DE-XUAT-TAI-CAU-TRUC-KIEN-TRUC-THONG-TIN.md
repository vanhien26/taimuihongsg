# ĐỀ XUẤT TÁI CẤU TRÚC KIẾN TRÚC THÔNG TIN (INFORMATION ARCHITECTURE)

## 1. Cấu trúc URL Chuẩn Hóa Theo Taxonomy Gốc & Phân Hệ Quốc Tế
```
Trang Chủ /
├── Đội Ngũ Bác Sĩ /doi-ngu-bac-si/
│   └── Hồ sơ từng Bác sĩ /bac-si/[slug]/ (18 bác sĩ chính quy, tự trỏ canonical riêng)
├── Chuyên Khoa /chuyen-khoa/
│   ├── Khoa Khám & Nội Soi /chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong/
│   ├── Khoa Phẫu Thuật TMH /chuyen-khoa/khoa-phau-thuat-tai-mui-hong/
│   └── Khoa Nội Trú TMH /chuyen-khoa/khoa-noi-tru/
├── Đo Đa Ký Giấc Ngủ (OSAS) /do-da-ki-giac-ngu/
├── Thư Viện Kiến Thức Y Học /thu-vien-kien-thuc-y-hoc/
│   ├── Bệnh học Tai /thuong-thuc-benh-hoc/benh-ve-tai/
│   ├── Bệnh học Mũi Xoang /thuong-thuc-benh-hoc/benh-ve-mui-xoang/
│   ├── Bệnh học Họng & Thanh Quản /thuong-thuc-benh-hoc/benh-ve-hong-thanh-quan/
│   └── Bài viết chuyên đề (ví dụ: /tac-hai-khong-danh-rang-ban-dem/)
├── Đặt Hẹn Khám Bệnh /dat-hen-kham-benh/
└── Phân Hệ Quốc Tế (English Portal) /english/
    ├── Quy trình bệnh nhân quốc tế: /foreign-patient-pathway/ -> /english
    ├── Bệnh lý điều trị tiếng Anh: /ear-conditions-we-treat/, /nose-conditions-we-treat/
    └── Bảo lãnh viện phí quốc tế (Direct Billing với 35+ hãng bảo hiểm toàn cầu)
```

## 2. Nguyên tắc Tái cấu trúc (Rebuild Web)
1. **Dọn dẹp & Tách bạch thực thể:** Định vị thương hiệu độc lập và chuyên sâu là "Bệnh viện Tai Mũi Họng Sài Gòn", giải quyết triệt để tình trạng khai báo lẫn lộn với phòng khám đa khoa.
2. **Khắc phục lỗi Soft 404 & Redirect:** Bỏ hoàn toàn cơ chế chuyển hướng wildcard về trang đặt hẹn. URL không tồn tại trả về đúng mã `404 Not Found` với giao diện hỗ trợ tìm kiếm lại.
3. **Phân hệ English Portal chuẩn quốc tế:** Thiết lập cổng thông tin `/english` chuẩn chỉnh 100% tiếng Anh cho người nước ngoài và cộng đồng Expat tại TP.HCM, trang bị đầy đủ hướng dẫn đặt hẹn, tiếp đón tại Quận 1, bảo lãnh bảo hiểm trực tiếp và cấp hóa đơn đỏ VAT / hồ sơ y khoa bằng tiếng Anh.
4. **Phân cấp Breadcrumbs & Dữ liệu cấu trúc:** Triển khai Schema `MedicalOrganization`, `Physician`, `MedicalCondition` và `BreadcrumbList` đồng bộ cho mọi bài viết và trang dịch vụ.
