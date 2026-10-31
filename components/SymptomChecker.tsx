'use client'

import React, { useState } from 'react'
import { HeartPulse, ArrowRight, CheckCircle2, AlertCircle, Wind, Volume2, Ear, Moon, Stethoscope } from 'lucide-react'

interface SymptomCheckerProps {
  onSelectSpecialty: (specialtyName: string) => void
}

const SYMPTOM_DATA = [
  {
    id: 'mui-xoang',
    name: 'Nghẹt mũi, đau nhức trán/gò má, chảy mũi mủ',
    specialty: 'Khoa Mũi - Xoang',
    icon: Wind,
    condition: 'Nghi ngờ Viêm Xoang Mạn Tính hoặc Lệch Vách Ngăn Mũi',
    tech: 'Nội soi chẩn đoán NBI HD & Phẫu thuật FESS xâm lấn tối thiểu',
    answer: 'Phẫu thuật chỉnh hình vách ngăn mũi tại BV TMH Sài Gòn diễn ra trong 30-45 phút, gây mê hoặc tê tại chỗ, phục hồi hoàn toàn sau 5-7 ngày và không để lại sẹo ngoài.'
  },
  {
    id: 'hong-thanh-quan',
    name: 'Đau rát họng kéo dài, khàn tiếng, vướng ở cổ họng',
    specialty: 'Khoa Họng - Thanh Quản',
    icon: Volume2,
    condition: 'Nghi ngờ Viêm Amidan Mạn, Polyp Dây Thanh hoặc Trào Ngược LPR',
    tech: 'Cắt Amidan bằng dao Coblator lạnh (nhiệt độ 40-70°C), hạn chế đau và không chảy máu',
    answer: 'Cắt Amidan bằng Coblator thế hệ mới giúp bệnh nhân nói chuyện và ăn nhẹ được ngay sau 4 giờ, xuất viện trong ngày hoặc sau 24 giờ lưu viện.'
  },
  {
    id: 'tai-thinh-hoc',
    name: 'Ù tai, giảm sức nghe, chảy dịch tai, chóng mặt',
    specialty: 'Khoa Tai - Thính Học',
    icon: Ear,
    condition: 'Nghi ngờ Viêm Tai Giữa, Thủng Màng Nhĩ hoặc Điếc Đột Ngột',
    tech: 'Hệ thống phòng đo thính lực cách âm chuẩn ISO, kính vi phẫu Karl Storz',
    answer: 'Điếc đột ngột là cấp cứu tai mũi họng cần can thiệp trong vòng 72 giờ đầu (thời gian vàng) bằng liệu pháp oxy cao áp và corticoid để tối đa hóa khả năng hồi phục thính lực.'
  },
  {
    id: 'ngu-ngay',
    name: 'Ngủ ngáy to, ngạt thở từng cơn khi ngủ, mệt mỏi ban ngày',
    specialty: 'Trung tâm Đo Đa Ký Giấc Ngủ',
    icon: Moon,
    condition: 'Hội chứng Ngưng Thở Khi Ngủ Do Tắc Nghẽn (OSAS)',
    tech: 'Máy đo đa ký giấc ngủ Polysomnography (PSG) 24 kênh tiêu chuẩn Hoa Kỳ',
    answer: 'Đo đa ký giấc ngủ tại BV TMH Sài Gòn giúp ghi nhận chính xác chỉ số ngưng - giảm thở (AHI), nồng độ oxy máu SpO2 để thiết lập phác đồ đeo máy thở CPAP hoặc phẫu thuật tạo hình vòm họng.'
  }
]

export default function SymptomChecker({ onSelectSpecialty }: SymptomCheckerProps) {
  const [selectedId, setSelectedId] = useState(SYMPTOM_DATA[0].id)
  const current = SYMPTOM_DATA.find((s) => s.id === selectedId)!

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xl shadow-slate-100">
      <div className="flex items-center gap-2.5 text-xs font-bold text-brand-700 tracking-wider uppercase mb-2">
        <HeartPulse className="w-4 h-4 text-emerald-600" />
        Hệ Thống Sàng Lọc Triệu Chứng Lâm Sàng (Symptom Navigator)
      </div>
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6">
        Bạn đang gặp phải những triệu chứng khó chịu nào?
      </h3>

      {/* Button options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {SYMPTOM_DATA.map((item) => {
          const isSelected = item.id === selectedId
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-4 rounded-2xl text-left border text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-emerald-50 border-brand-600 text-brand-900 shadow-sm ring-2 ring-brand-500/20'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </span>
                <span className="font-bold text-xs uppercase tracking-wider text-slate-600">
                  {item.specialty}
                </span>
              </div>
              <div className="font-semibold text-slate-900 pl-1">{item.name}</div>
            </button>
          )
        })}
      </div>

      {/* Analysis card (AI Search Direct Answer Block) */}
      <div className="bg-gradient-to-br from-slate-900 to-navy-950 rounded-2xl p-6 text-white space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Chẩn đoán sơ bộ & Khoa điều trị phù hợp:
            </div>
            <div className="text-lg font-bold text-white mt-1">
              {current.condition} • {current.specialty}
            </div>
          </div>
          <button
            onClick={() => onSelectSpecialty(current.specialty)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all self-start md:self-auto shadow-md"
          >
            Đặt Khám Khoa Này
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
            <span className="font-bold text-emerald-300 block mb-1">Công nghệ & Phương pháp:</span>
            {current.tech}
          </div>
          <div className="bg-emerald-950/40 rounded-xl p-3.5 border border-emerald-500/20">
            <span className="font-bold text-emerald-400 block mb-1">AI Search Direct Answer:</span>
            {current.answer}
          </div>
        </div>
      </div>
    </div>
  )
}
