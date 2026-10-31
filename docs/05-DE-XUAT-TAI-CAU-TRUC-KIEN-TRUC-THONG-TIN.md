# ĐỀ XUẤT TÁI CẤU TRÚC KIẾN TRÚC THÔNG TIN (INFORMATION ARCHITECTURE)

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
