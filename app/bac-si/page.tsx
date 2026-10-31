'use client'

import React, { useState } from 'react'
import { Calendar, Award, ShieldCheck, CheckCircle2, Search, Filter } from 'lucide-react'

interface PageProps {
  onOpenBooking?: (specialty?: string) => void
}

const DOCTORS = [
  {
    name: 'TS.BS CKII Hoàng Lương',
    role: 'Giám Đốc Bệnh Viện',
    specialty: 'Chuyên khoa Tai Mũi Họng & Phẫu thuật Đầu Cổ',
    exp: 'Hơn 30 năm kinh nghiệm',
    edu: 'Tiến sĩ Y học, Bác sĩ Chuyên khoa II Đại học Y Dược TP.HCM',
    canonical: 'https://taimuihongsg.com/bac-si/ts-bs-ckii-hoang-luong/'
  },
  {
    name: 'BS.CKI Bùi Nguyên Thống',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Nội soi NBI & Phẫu thuật Cắt Amidan Coblator',
    exp: 'Hơn 18 năm kinh nghiệm',
    edu: 'Bác sĩ Chuyên khoa I Tai Mũi Họng',
    canonical: 'https://taimuihongsg.com/bac-si/bs-cki-bui-nguyen-thong/'
  },
  {
    name: 'BS.CKII Ngô Thanh Thúy',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Khám & Điều trị bệnh lý Mũi Xoang, Tai Thính Học',
    exp: 'Hơn 22 năm kinh nghiệm',
    edu: 'Bác sĩ Chuyên khoa II Tai Mũi Họng',
    canonical: 'https://taimuihongsg.com/bac-si/bs-ngo-thanh-thuy/'
  },
  {
    name: 'BS.CKII Từ Thị Thu Hà',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Vi phẫu Tai & Phục hồi thính lực người cao tuổi',
    exp: 'Hơn 20 năm kinh nghiệm',
    edu: 'Bác sĩ Chuyên khoa II Tai Mũi Họng',
    canonical: 'https://taimuihongsg.com/bac-si/bs-ckii-tu-thi-thu-ha/'
  },
  {
    name: 'BS.CKII Đỗ Kỳ Nhật',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Chẩn đoán nội soi & Điều trị các khối u vùng Đầu Cổ',
    exp: 'Hơn 25 năm kinh nghiệm',
    edu: 'Bác sĩ Chuyên khoa II Tai Mũi Họng',
    canonical: 'https://taimuihongsg.com/bac-si/bs-ckii-do-ky-nhat/'
  },
  {
    name: 'ThS.BS CKII Trương Kim Tri',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Phẫu thuật Chỉnh hình Vách ngăn & Nội soi Xoang FESS',
    exp: 'Hơn 16 năm kinh nghiệm',
    edu: 'Thạc sĩ Y học, Bác sĩ Chuyên khoa II',
    canonical: 'https://taimuihongsg.com/bac-si/ths-bs-ckii-truong-kim-tri/'
  },
  {
    name: 'ThS.BS CKI Nguyễn Tất Cường',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Điều trị viêm mũi họng, nạo VA & Thính học trẻ em',
    exp: 'Hơn 15 năm kinh nghiệm',
    edu: 'Thạc sĩ Y học, Bác sĩ Chuyên khoa I',
    canonical: 'https://taimuihongsg.com/bac-si/ths-bs-cki-nguyen-tat-cuong/'
  },
  {
    name: 'BS.CKII Trần Cao Khoát',
    role: 'Bác sĩ Chuyên khoa',
    specialty: 'Phẫu thuật vi phẫu tai và điều trị chóng mặt tiền đình',
    exp: 'Hơn 24 năm kinh nghiệm',
    edu: 'Bác sĩ Chuyên khoa II Tai Mũi Họng',
    canonical: 'https://taimuihongsg.com/bac-si/bs-ckii-tran-cao-khoat/'
  }
]

export default function BacSiPage({ onOpenBooking }: PageProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDoctors = DOCTORS.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-12 md:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Hội Đồng Cố Vấn & Chuyên Gia Y Khoa
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Đội Ngũ Bác Sĩ Chuyên Khoa Tai Mũi Họng
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Quy tụ các chuyên gia y tế giàu kinh nghiệm công tác tại các bệnh viện lớn trong và ngoài nước. 100% bác sĩ có đầy đủ chứng chỉ hành nghề và được cập nhật các phác đồ vi phẫu y khoa tân tiến nhất.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Tìm theo tên bác sĩ hoặc chuyên khoa điều trị..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm focus:outline-none focus:border-brand-600 transition-all"
          />
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-brand-700 font-black text-2xl flex items-center justify-center mx-auto border-2 border-emerald-500/20">
                  {doc.name.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">{doc.name}</h3>
                  <div className="text-xs font-bold text-emerald-600 mt-0.5">{doc.role}</div>
                  <div className="text-xs text-slate-500 mt-2 line-clamp-2">{doc.specialty}</div>
                </div>

                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl text-left space-y-1">
                  <div><strong>Kinh nghiệm:</strong> {doc.exp}</div>
                  <div><strong>Học vị:</strong> {doc.edu}</div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(doc.specialty)}
                  className="w-full py-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5"
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
