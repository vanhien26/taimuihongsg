'use client'

import React, { useState } from 'react'
import { Calendar, Search, Award, CheckCircle2, Stethoscope, ChevronRight } from 'lucide-react'

interface PageProps {
  onOpenBooking?: (specialty?: string) => void
}

// Danh sách chính xác 18 Bác sĩ từ trang chính thức https://taimuihongsg.com/doi-ngu-bac-si/
const DOCTORS = [
  {
    name: 'TS.BS.CKII. Hoàng Lương',
    role: 'Bác sĩ Chuyên Gia • Nhà Sáng Lập BV • Ban Giám Đốc',
    specialty: 'Chuyên khoa Tai Mũi Họng & Phẫu thuật Đầu Cổ',
    degree: 'Tiến sĩ Y học, Bác sĩ Chuyên khoa II Đại học Y Dược TP.HCM (1985)',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2016/06/1.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ts-bs-ckii-hoang-luong/'
  },
  {
    name: 'BS.CKII. Đỗ Kỳ Nhật',
    role: 'Bác sĩ Cao Cấp • Giám Đốc Bệnh Viện • Ban Giám Đốc',
    specialty: 'Phẫu tích Xương Thái Dương & Cấy Điện Ốc Tai (Hoa Kỳ, Philippines)',
    degree: 'Bác sĩ Chuyên khoa II Tai Mũi Họng, Bác sĩ nội trú tại Pháp (AFSA)',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/7.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/bs-ckii-do-ky-nhat/'
  },
  {
    name: 'BS.CKII. Trịnh Thị Minh Hải',
    role: 'Bác sĩ Cao Cấp • Giám Đốc Khối Đào Tạo Lâm Sàng • Ban Giám Đốc',
    specialty: 'Nội soi NBI phát hiện sớm ung thư vùng mũi họng, thanh quản',
    degree: 'Bác sĩ Chuyên khoa II Đại học Y Dược TP.HCM',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/19.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/bs-ckii-trinh-thi-minh-hai/'
  },
  {
    name: 'THS.BS.CKII Hoàng Long',
    role: 'Bác sĩ Cao Cấp • Giám Đốc Khối Vận Hành Y Tế',
    specialty: 'Chuyên khoa Tai Mũi Họng & Y Học Giấc Ngủ (Đo Đa Ký Giấc Ngủ OSAS)',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa II Đại học Y Dược TP.HCM',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/Hinh-bac-si-co-ten-11.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-hoang-long/'
  },
  {
    name: 'BS.CKII. Trần Cao Khoát',
    role: 'Bác sĩ Cao Cấp • Khoa Tai Mũi Họng',
    specialty: 'Phẫu thuật vi phẫu tai và điều trị chóng mặt tiền đình',
    degree: 'Bác sĩ Chuyên khoa II Tai Mũi Họng (Tốt nghiệp ĐH Y Dược TP.HCM 1995)',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/8.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/bs-ckii-tran-cao-khoat/'
  },
  {
    name: 'BS.CKII. Vũ Văn Khánh',
    role: 'Bác sĩ Cao Cấp • Khoa Tai Mũi Họng',
    specialty: 'Khám & Điều trị chuyên sâu bệnh lý viêm mũi xoang, vòm họng',
    degree: 'Bác sĩ Chuyên khoa II Tai Mũi Họng (Đại học Quân Y - Bộ Quốc Phòng)',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/Hinh-bac-si-co-ten-12.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/bs-ckii-vu-van-khanh/'
  },
  {
    name: 'THS.BS.CKII. Trương Kim Tri',
    role: 'Bác sĩ Cao Cấp • Giám Đốc Phòng Khám Đa Khoa',
    specialty: 'Phẫu thuật Chỉnh hình Vách ngăn & Nội soi Mũi Xoang FESS',
    degree: 'Thạc sĩ Y học, Bác sĩ Chuyên khoa II Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/Hinh-bac-si-co-ten-8.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-truong-kim-tri/'
  },
  {
    name: 'THS.BS.CKII. Trần Quý Ngọc',
    role: 'Bác sĩ Cao Cấp • Trưởng Khoa Nội Trú',
    specialty: 'Điều trị nội trú chuyên sâu, Phẫu thuật Tai Mũi Họng phức tạp',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa II Đại học Y Dược TP.HCM',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/Hinh-bac-si-co-ten-7.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-tran-quy-ngoc/'
  },
  {
    name: 'THS.BS.CKII. Đinh Tiến Trung',
    role: 'Bác sĩ Cao Cấp • Khoa Tai Mũi Họng',
    specialty: 'Phẫu thuật Tai Mũi Họng, Hội viên Hội Tai Mũi Họng Việt Nam',
    degree: 'Thạc sĩ Tai Mũi Họng, Bác sĩ Chuyên khoa II ĐH Y Dược TP.HCM',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/5.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-dinh-tien-trung/'
  },
  {
    name: 'BS.CKII. Nguyễn Kim Phong',
    role: 'Bác sĩ Cao Cấp • Khoa Tai Mũi Họng',
    specialty: 'Tu nghiệp chuyên khoa Mũi Xoang tại ĐH Y khoa North Carolina (Hoa Kỳ)',
    degree: 'Bác sĩ Chuyên khoa II (Tốt nghiệp ĐH Y Dược TP.HCM 1985)',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/13.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/bs-ckii-nguyen-kim-phong/'
  },
  {
    name: 'THS.BS. Trần Ngọc Quỳnh',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Khám và điều trị các bệnh lý Tai Mũi Họng người lớn & trẻ em',
    degree: 'Thạc sĩ Y học Chuyên ngành Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/10/Hinh-bac-si-co-ten-13.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-tran-ngoc-quynh/'
  },
  {
    name: 'THS.BS.CKI. Trương Thế Anh',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Phẫu thuật Tạo hình, Tái tạo & Thẩm mỹ vùng Đầu Cổ',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa I Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/12/16.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-cki-truong-the-anh/'
  },
  {
    name: 'THS.BS.CKII Đặng Nhật Quỳnh Như',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Khám & Phục hồi chức năng Thính học, Đo sức nghe chuyên sâu',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa II Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2019/09/Hinh-bac-si-co-ten-4.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-dang-nhat-quynh-nhu/'
  },
  {
    name: 'THS.BS.CKI. Trần Anh Thư',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Bác sĩ nội trú Tai Mũi Họng, Điều trị bệnh lý họng thanh quản',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa I, Bác sĩ Nội Trú',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2019/09/9.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-cki-tran-anh-thu/'
  },
  {
    name: 'THS.BS. Đặng Diệu Linh',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Điều trị viêm xoang, polyp mũi & bệnh lý họng thanh quản',
    degree: 'Thạc sĩ – Bác sĩ Chuyên ngành Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2023/09/Hinh-bac-si-co-ten-3.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-dang-dieu-linh/'
  },
  {
    name: 'THS.BS. Nguyễn Công Sơn',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Nội soi chẩn đoán & điều trị vi phẫu các bệnh lý tai mũi họng',
    degree: 'Thạc sĩ – Bác sĩ Chuyên ngành Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2023/09/12.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-nguyen-cong-son/'
  },
  {
    name: 'ThS.BS.CKI Nguyễn Tất Cường',
    role: 'Bác sĩ Điều Trị • Khoa Tai Mũi Họng',
    specialty: 'Điều trị viêm mũi họng, nạo VA & Thính học Tai Mũi Họng trẻ em',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa I Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2023/09/11.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-cki-nguyen-tat-cuong/'
  },
  {
    name: 'THS.BS.CKII Hoàng Ngọc Đức',
    role: 'Bác sĩ Cao Cấp • Bệnh Viện Tai Mũi Họng Sài Gòn',
    specialty: 'Khám, điều trị chuyên sâu và phẫu thuật Tai Mũi Họng kỹ thuật cao',
    degree: 'Thạc sĩ – Bác sĩ Chuyên khoa II Tai Mũi Họng',
    department: 'Khoa Tai Mũi Họng',
    image: 'https://taimuihongsg.com/wp-content/uploads/2025/02/Hinh-bac-si-co-ten-1.png',
    profileUrl: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-hoang-ngoc-duc/'
  }
]

export default function BacSiPage({ onOpenBooking }: PageProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDoctors = DOCTORS.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.degree.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-12 md:py-16 space-y-16 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Hội Đồng Cố Vấn & Chuyên Gia Y Khoa Chính Thức
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Đội Ngũ Bác Sĩ Bệnh Viện Tai Mũi Họng Sài Gòn
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Danh sách 18 Bác sĩ đầu ngành trực tiếp khám, hội chẩn và phẫu thuật tại Bệnh viện Tai Mũi Họng Sài Gòn. Đứng đầu là các Tiến sĩ – Bác sĩ Chuyên khoa II với hơn 30 - 40 năm kinh nghiệm y khoa.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Tìm theo tên bác sĩ, học vị hoặc chuyên khoa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm focus:outline-none focus:border-brand-600 transition-all"
          />
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Doctor Portrait Image */}
                <div className="relative w-32 h-44 mx-auto rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-brand-700 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-bold text-emerald-700 mt-1">
                    {doc.role}
                  </div>
                </div>

                {/* Details */}
                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl space-y-1.5 border border-slate-100">
                  <div>
                    <strong className="text-slate-900">Lĩnh vực:</strong> {doc.specialty}
                  </div>
                  <div>
                    <strong className="text-slate-900">Học vị:</strong> {doc.degree}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(doc.specialty)}
                  className="w-full py-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Đặt Hẹn Với Bác Sĩ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
