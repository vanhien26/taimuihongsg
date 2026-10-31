'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Activity, Wind, Volume2, Ear, Moon, Baby, Building2 } from 'lucide-react'

interface PageProps {
  onOpenBooking?: (specialty?: string) => void
}

const SPECIALTIES = [
  {
    id: 'mui-xoang',
    name: 'Khoa Mũi - Xoang',
    icon: Wind,
    color: 'emerald',
    desc: 'Chuyên sâu chẩn đoán và điều trị vi phẫu các bệnh lý phức tạp vùng mũi xoang bằng hệ thống nội soi Karl Storz Full HD.',
    highlights: [
      'Phẫu thuật nội soi xoang FESS điều trị viêm đa xoang mạn tính',
      'Chỉnh hình vách ngăn mũi vẹo, lệch, mào vách ngăn bằng vi phẫu',
      'Cắt polyp mũi, mở rộng lỗ thông xoang không để lại sẹo ngoài',
      'Điều trị viêm mũi dị ứng kháng thuốc, phì đại cuốn mũi dưới'
    ],
    procedure: 'Thời gian phẫu thuật: 30 - 45 phút • Gây mê/tê • Xuất viện sau 24h'
  },
  {
    id: 'hong-thanh-quan',
    name: 'Khoa Họng - Thanh Quản',
    icon: Volume2,
    color: 'teal',
    desc: 'Điều trị các bệnh lý đường thở trên và giọng nói bằng công nghệ dao Coblator lạnh nhiệt độ thấp giúp bảo vệ mô lành tối đa.',
    highlights: [
      'Cắt Amidan bằng Coblator thế hệ mới không đau, không chảy máu',
      'Nạo VA bằng dao Plasma lạnh hạn chế tối đa tái phát',
      'Vi phẫu thanh quản bóc tách hạt xơ, polyp, u nang dây thanh',
      'Điều trị trào ngược dạ dày họng thanh quản (LPR) dai dẳng'
    ],
    procedure: 'Nói chuyện được sau mổ • Ăn cháo nguội sau 4 giờ • Xuất viện trong ngày'
  },
  {
    id: 'tai-thinh-hoc',
    name: 'Khoa Tai - Thính Học',
    icon: Ear,
    color: 'blue',
    desc: 'Hệ thống phòng thính lực cách âm chuẩn ISO và kính vi phẫu Carl Zeiss phóng đại quang học giúp phẫu thuật chính xác đến từng milimet.',
    highlights: [
      'Vá màng nhĩ vi phẫu nội soi đường rạch kín',
      'Cấp cứu điếc đột ngột trong thời gian vàng 72 giờ đầu',
      'Đặt ống thông khí màng nhĩ điều trị viêm tai giữa ứ dịch',
      'Phác đồ đa mô thức kiểm soát ù tai, chóng mặt tiền đình'
    ],
    procedure: 'Phòng đo thính lực đơn âm, nhĩ lượng • Kính vi phẫu Carl Zeiss CHLB Đức'
  },
  {
    id: 'ngu-ngay',
    name: 'Trung Tâm Đo Đa Ký Giấc Ngủ (PSG)',
    icon: Moon,
    color: 'purple',
    desc: 'Đơn vị chuyên sâu đầu ngành tại TP.HCM về chẩn đoán hội chứng ngưng thở khi ngủ tắc nghẽn (OSAS) và các rối loạn hô hấp khi ngủ.',
    highlights: [
      'Hệ thống đo đa ký giấc ngủ Polysomnography (PSG) 24 kênh tiêu chuẩn Hoa Kỳ',
      'Ghi nhận đầy đủ sóng điện não (EEG), nồng độ oxy SpO2, nhịp thở và điện tim',
      'Phác đồ điều chỉnh áp lực máy thở CPAP tự động theo thể trạng',
      'Phẫu thuật tạo hình màn hầu lưỡi gà (UPPP) cho ca tắc nghẽn giải phẫu'
    ],
    procedure: 'Phòng lưu đêm cách âm khách sạn • Bác sĩ chuyên khoa theo dõi liên tục'
  },
  {
    id: 'tmh-nhi',
    name: 'Trung Tâm Tai Mũi Họng Trẻ Em',
    icon: Baby,
    color: 'amber',
    desc: 'Không gian khám thân thiện giúp bé không sợ hãi. Nguyên tắc điều trị hạn chế kháng sinh bừa bãi và bảo tồn chức năng hô hấp tự nhiên.',
    highlights: [
      'Ống nội soi siêu nhỏ mềm mại, không gây đau, không chảy máu mũi bé',
      'Khám và xử lý dị vật đường thở, dị vật tai mũi họng an toàn',
      'Điều trị viêm tai giữa tái phát ở trẻ, kiểm tra sức nghe định kỳ',
      'Tư vấn miễn dịch và dinh dưỡng phòng ngừa viêm đường hô hấp'
    ],
    procedure: 'Khu vui chơi riêng • Điều dưỡng chuyên nhi khoa ân cần chu đáo'
  },
  {
    id: 'phau-thuat-noi-tru',
    name: 'Khoa Phẫu Thuật & Phòng Bệnh Nội Trú',
    icon: Building2,
    color: 'emerald',
    desc: 'Phòng mổ áp lực dương vô trùng tuyệt đối theo chuẩn quốc tế cùng hệ thống phòng lưu bệnh tiện nghi đầy đủ tiện ích gia đình.',
    highlights: [
      'Hệ thống khí sạch lọc HEPA kiểm soát nhiễm khuẩn tối ưu',
      'Đội ngũ gây mê hồi sức giàu kinh nghiệm theo dõi sát sao',
      'Phòng bệnh nội trú đơn, đôi với giường y tế điều khiển điện tử',
      'Hỗ trợ thủ tục bảo hiểm bảo lãnh viện phí nhanh chóng trong 15 phút'
    ],
    procedure: 'Trực cấp cứu 24/7 • Chuông gọi điều dưỡng đầu giường • Đầy đủ tiện nghi'
  }
]

const DETAIL_ROUTES: Record<string, string> = {
  'mui-xoang': '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong',
  'hong-thanh-quan': '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong',
  'tai-thinh-hoc': '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong',
  'ngu-ngay': '/chuyen-khoa/do-da-ky-giac-ngu',
  'tmh-nhi': '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong',
  'phau-thuat-noi-tru': '/chuyen-khoa/khoa-phau-thuat-tai-mui-hong',
}

export default function ChuyenKhoaPage({ onOpenBooking }: PageProps) {
  const triggerBooking = (specialtyName: string) => {
    if (onOpenBooking) onOpenBooking(specialtyName)
  }

  return (
    <div className="py-12 md:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Hệ Thống Chuyên Khoa Y Tế Đạt Chuẩn
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Khám & Phẫu Thuật Tai Mũi Họng Chuyên Sâu
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Bệnh Viện Tai Mũi Họng Sài Gòn tập trung đầu tư đồng bộ trang thiết bị phẫu thuật nội soi, vi phẫu hàng đầu thế giới từ Đức và Mỹ, mang lại kết quả điều trị tối ưu, an toàn và nhanh hồi phục.
          </p>
        </div>
      </section>

      {/* Specialties list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec) => {
            const IconComp = spec.icon
            return (
              <div 
                key={spec.id}
                id={spec.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-200/60">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{spec.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
                
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Kỹ thuật nổi bật:</div>
                  <ul className="space-y-2">
                    {spec.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {spec.procedure}
                </div>
                <Link
                  href={DETAIL_ROUTES[spec.id]}
                  className="w-full py-2.5 border border-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 hover:border-brand-700 hover:text-brand-800"
                >
                  Xem Chi Tiết Dịch Vụ
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => triggerBooking(spec.name)}
                  className="w-full py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Đặt Lịch Khám Khoa Này
                </button>
              </div>
            </div>
          )
        })}
        </div>
      </section>

    </div>
  )
}
